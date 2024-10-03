// Получаем элементы
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Функция для переключения темы
function toggleTheme() {
    body.classList.toggle('dark-theme');
    // Сохраняем текущую тему в локальном хранилище
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Проверяем, есть ли сохраненная тема в локальном хранилище
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
}

// Добавляем обработчик события для кнопки
themeToggleButton.addEventListener('click', toggleTheme);
