function callAfterDelay(callback) {
    if (typeof callback !== "function") {
        throw new Error("Ошибка: Параметр должен быть функцией.");
    }

    setTimeout(() => {
        callback(); 
    }, 2000);
}

callAfterDelay(() => {
    console.log("Callback вызван после 2 секунд.");
});