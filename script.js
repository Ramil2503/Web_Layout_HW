const toggleButton = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
let sidebarVisible = false;

toggleButton.addEventListener('click', () => {
    if (!sidebarVisible) {
        sidebar.style.left = '0';
        sidebarVisible = true;
    } else {
        sidebar.style.left = '-60%';
        sidebarVisible = false;
    }
});
