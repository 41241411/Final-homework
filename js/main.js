// 動態載入 Navbar 和 Footer
async function loadComponent(containerId, filePath) {
    const container = document.getElementById(containerId);
    if (container) {
        const response = await fetch(filePath);
        const content = await response.text();
        container.innerHTML = content;
    }
}

// 載入 Navbar 和 Footer
loadComponent('navbar-container', 'navbar.html');
loadComponent('footer-container', 'footer.html');
