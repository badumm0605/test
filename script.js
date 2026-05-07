let count = 0;

// Инициализация при загрузке
window.onload = function() {
    if (typeof Android !== 'undefined') {
        // Получаем email текущего пользователя из SecurityManager
        const email = Android.getString("email");
        document.getElementById('user-email').innerText = email || "Неизвестно";
        
        // В MainBridge метод называется logToAndroid (или log, проверьте алиас)
        if (Android.logToAndroid) {
            Android.logToAndroid("Мини-приложение успешно запущено");
        }
    } else {
        const userEmailElem = document.getElementById('user-email');
        if (userEmailElem) userEmailElem.innerText = "Мост не найден";
    }
};

function increment() {
    count++;
    const counterElem = document.getElementById('counter');
    if (counterElem) {
        counterElem.innerText = count;
    }
}

function logToAndroid() {
    if (typeof Android !== 'undefined' && Android.logToAndroid) {
        Android.logToAndroid("Пользователь нажал кнопку в мини-аппе. Текущий счет: " + count);
        alert("Сообщение отправлено в логи Android Studio");
    }
}

function exitApp() {
    // Вызываем нативный метод из MainBridge для возврата
    if (typeof Android !== 'undefined' && Android.exitApp) {
        Android.exitApp();
    } else {
        window.location.href = "file:///android_asset/app/messanger/chlist.htm";
    }
}