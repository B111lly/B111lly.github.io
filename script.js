document.addEventListener("DOMContentLoaded", () => {
    // Находим все кнопки и блоки с контентом
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Убираем класс 'active' у всех кнопок и блоков
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // 2. Добавляем 'active' только той кнопке, на которую нажали
            btn.classList.add('active');

            // 3. Находим нужный блок по атрибуту data-tab и показываем его
            const targetId = btn.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
        });
    });
});
