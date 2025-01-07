// 動態載入 Navbar 和 Footer
async function loadComponent(containerId, filePath) {
    const container = document.getElementById(containerId);
    if (container) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            const content = await response.text();
            container.innerHTML = content;
        } catch (error) {
            console.error(error);
        }
    }
}


// 載入 Navbar 和 Footer
loadComponent('navbar-container', 'navbar.html');
loadComponent('footer-container', 'footer.html');
