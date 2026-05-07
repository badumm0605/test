let count = 0;

// Инициализация при загрузкеwindow.onload = function() {
    if (typeof Android !== 'undefined') {
        // Получаем email текущего пользователя из SecurityManager
        const email = Android.getString("email");
        document.getElementById('user-email').innerText = email || "Неизвестно";
        
        Android.log("Мини-приложение успешно запущено");
    } else {
        document.getElementById('user-email').innerText = "Мост не найден";
    }
};

function increment() {
    count++;
    document.getElementById('counter').innerText = count;
}

function logToAndroid() {
    if (typeof Android !== 'undefined') {
        Android.log("Пользователь нажал кнопку в мини-аппе. Текущий счет: " + count);
        alert("Сообщение отправлено в логи Android Studio");
    }
}

function exitApp() {
    // Возвращаемся на главный экран мессенджера
    window.location.href = "file:///android_asset/app/messanger/chlist.htm";
}