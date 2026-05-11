document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check saved theme or system preference
    let currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon(currentTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun'; // Sun icon for switching to light
        } else {
            themeIcon.className = 'fas fa-moon'; // Moon icon for switching to dark
        }
    }

    const container = document.getElementById('tiles-container');

    // Generate Tiles
    countdownData.forEach(data => {
        const tileHTML = `
            <div class="tile" id="tile-${data.id}" data-target="${data.targetDate}">
                <div class="tile-header">
                    <div class="tile-title">${data.title}</div>
                </div>
                <div class="time-breakdown">
                    <div class="time-unit" data-unit="years">
                        <span class="unit-value" id="${data.id}-years">0</span>
                        <span class="unit-label">Years</span>
                    </div>
                    <div class="time-unit" data-unit="months">
                        <span class="unit-value" id="${data.id}-months">0</span>
                        <span class="unit-label">Months</span>
                    </div>
                    <div class="time-unit" data-unit="days">
                        <span class="unit-value" id="${data.id}-days">0</span>
                        <span class="unit-label">Days</span>
                    </div>
                    <div class="time-unit" data-unit="hours">
                        <span class="unit-value" id="${data.id}-hours">0</span>
                        <span class="unit-label">Hours</span>
                    </div>
                    <div class="time-unit" data-unit="minutes">
                        <span class="unit-value" id="${data.id}-minutes">0</span>
                        <span class="unit-label">Minutes</span>
                    </div>
                    <div class="time-unit" data-unit="seconds">
                        <span class="unit-value" id="${data.id}-seconds">0</span>
                        <span class="unit-label">Seconds</span>
                    </div>
                </div>
                
                <div class="total-view" id="total-view-${data.id}">
                    <button class="close-btn">&times;</button>
                    <div class="total-value" id="total-val-${data.id}">0</div>
                    <div class="total-label" id="total-lbl-${data.id}">Total</div>
                    <div class="timer-bar-container">
                        <div class="timer-bar" id="timer-bar-${data.id}"></div>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', tileHTML);
    });

    // Update Logic
    function updateTimers() {
        const now = new Date();

        countdownData.forEach(data => {
            const target = new Date(data.targetDate);
            let d1 = now < target ? now : target;
            let d2 = now < target ? target : now;

            let years = d2.getFullYear() - d1.getFullYear();
            let months = d2.getMonth() - d1.getMonth();
            let days = d2.getDate() - d1.getDate();
            let hours = d2.getHours() - d1.getHours();
            let minutes = d2.getMinutes() - d1.getMinutes();
            let seconds = d2.getSeconds() - d1.getSeconds();

            if (seconds < 0) { seconds += 60; minutes--; }
            if (minutes < 0) { minutes += 60; hours--; }
            if (hours < 0) { hours += 24; days--; }
            if (days < 0) { 
                let prevMonthDays = new Date(d2.getFullYear(), d2.getMonth(), 0).getDate();
                days += prevMonthDays; 
                months--; 
            }
            if (months < 0) { months += 12; years--; }

            // Store for total calculations
            const totalMs = d2.getTime() - d1.getTime();
            const totals = {
                years: years + (months / 12),
                months: (years * 12) + months + (days / 30.44),
                days: Math.floor(totalMs / (1000 * 60 * 60 * 24)),
                hours: Math.floor(totalMs / (1000 * 60 * 60)),
                minutes: Math.floor(totalMs / (1000 * 60)),
                seconds: Math.floor(totalMs / 1000)
            };

            // Update DOM standard view
            document.getElementById(`${data.id}-years`).textContent = years;
            document.getElementById(`${data.id}-months`).textContent = months;
            document.getElementById(`${data.id}-days`).textContent = days;
            document.getElementById(`${data.id}-hours`).textContent = hours;
            document.getElementById(`${data.id}-minutes`).textContent = minutes;
            document.getElementById(`${data.id}-seconds`).textContent = seconds;

            // Attach totals to the tile element for easy access
            const tileEl = document.getElementById(`tile-${data.id}`);
            tileEl.dataset.totalYears = totals.years.toFixed(2);
            tileEl.dataset.totalMonths = totals.months.toFixed(1);
            tileEl.dataset.totalDays = totals.days;
            tileEl.dataset.totalHours = totals.hours;
            tileEl.dataset.totalMinutes = totals.minutes;
            tileEl.dataset.totalSeconds = totals.seconds;
            
            // Update active total view
            const totalView = document.getElementById(`total-view-${data.id}`);
            if(totalView.classList.contains('active')) {
                const activeUnit = totalView.dataset.activeUnit;
                if(activeUnit) {
                    const formatNum = (num) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(num);
                    document.getElementById(`total-val-${data.id}`).textContent = formatNum(totals[activeUnit]);
                }
            }
        });
    }

    setInterval(updateTimers, 1000);
    updateTimers(); // Initial call

    // Interaction Logic for Tap/Click
    document.querySelectorAll('.tile').forEach(tile => {
        const id = tile.id.replace('tile-', '');
        const totalView = document.getElementById(`total-view-${id}`);
        const totalVal = document.getElementById(`total-val-${id}`);
        const totalLbl = document.getElementById(`total-lbl-${id}`);
        const timerBar = document.getElementById(`timer-bar-${id}`);
        const closeBtn = totalView.querySelector('.close-btn');
        let timeoutId;

        const closeTotalView = () => {
            totalView.classList.remove('active');
            timerBar.classList.remove('animate');
            totalView.dataset.activeUnit = '';
            clearTimeout(timeoutId);
        };

        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeTotalView();
        });

        tile.querySelectorAll('.time-unit').forEach(unit => {
            unit.addEventListener('click', (e) => {
                e.stopPropagation(); 
                const unitType = unit.dataset.unit;
                
                const valMap = {
                    years: tile.dataset.totalYears,
                    months: tile.dataset.totalMonths,
                    days: tile.dataset.totalDays,
                    hours: tile.dataset.totalHours,
                    minutes: tile.dataset.totalMinutes,
                    seconds: tile.dataset.totalSeconds
                };

                const formatNum = (num) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(num);
                
                totalVal.textContent = formatNum(valMap[unitType]);
                totalLbl.textContent = `Total ${unitType}`;
                totalView.dataset.activeUnit = unitType;

                timerBar.classList.remove('animate');
                void timerBar.offsetWidth; 
                timerBar.classList.add('animate');
                
                totalView.classList.add('active');

                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    closeTotalView();
                }, 10000);
            });
        });
    });

    // Back to top button logic
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
