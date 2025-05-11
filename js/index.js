const navItems = document.querySelectorAll('.nav-menu li');
const dropdowns = document.querySelectorAll('.dropdown');

navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const targetId = item.getAttribute('data-dropdown');

        dropdowns.forEach(drop => drop.classList.remove('active'));
        
        const targetDropdown = document.getElementById(targetId);
        if (targetDropdown) {
            targetDropdown.classList.add('active');
        }
    });
});

// Tutup dropdown
document.querySelector('.menu-item-content').addEventListener('mouseleave', () => {
    dropdowns.forEach(drop => drop.classList.remove('active'));
});

