function repeatLogMessage(message, interval, times) {
    let count = 0;
    const intervalId = setInterval(() => {
        console.log(message);
        count++;
        if (count >= times) {
            clearInterval(intervalId);
        }
    }, interval);
}

repeatLogMessage("Привет, мир!", 1000, 5); 