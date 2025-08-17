 // Theme toggle functionality
        const themeToggle = document.querySelector('.theme-toggle');
        const body = document.body;
        const icon = themeToggle.querySelector('i');

        // Check for saved theme preference or use preferred color scheme
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            body.classList.add('dark-mode');
            icon.classList.replace('fa-moon', 'fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');

            if (body.classList.contains('dark-mode')) {
                icon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            }
        });

        // VPN Warning Modal functionality
        const vpnModal = document.getElementById('vpnModal');
        const telegramLinks = document.querySelectorAll('[data-telegram-link]');
        let currentTelegramLink = '';

        telegramLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                currentTelegramLink = link.getAttribute('href');
                vpnModal.classList.add('active');
            });
        });

        document.querySelector('.modal-button.continue').addEventListener('click', () => {
            vpnModal.classList.remove('active');
            window.open(currentTelegramLink, '_blank');
        });

        document.querySelector('.modal-button.cancel').addEventListener('click', () => {
            vpnModal.classList.remove('active');
        });
