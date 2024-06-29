document.getElementById('menu-button-id').addEventListener('click', function() {
    var menu = document.getElementById('menu-container');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
document.getElementById('menu-button-id').addEventListener('click', function() {
    var menu = document.getElementById('menu-container-side');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});