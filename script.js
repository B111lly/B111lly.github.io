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

        // --- Анимация печатной машинки ---
    const titleElement = document.querySelector('.title');
    const textToType = "QA Engineer & Tech Problem-Solver";
    titleElement.textContent = ''; // Очищаем текст перед стартом
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < textToType.length) {
            titleElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50); // Скорость печати (50мс на символ)
        }
    }

    // Запускаем анимацию через 300мс после загрузки страницы
    setTimeout(typeWriter, 300);
    
});
