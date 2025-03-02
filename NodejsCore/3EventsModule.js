const EventEmitter = require('events');

class NotificationService extends EventEmitter {
    sendEmail(to, subject, message) {
        console.log(`Отправка email на ${to} с темой "${subject}" и сообщением: ${message}`);
        this.emit('emailSent', { to, subject, message });
    }
    sendSMS(to, message) {
        console.log(`Отправка SMS на ${to}: ${message}`);
        this.emit('smsSent', { to, message });
    }
    sendPushNotification(to, message) {
        console.log(`Отправка push-уведомления на ${to}: ${message}`);
        this.emit('pushNotificationSent', { to, message });
    }
}

const notificationService = new NotificationService();

notificationService.on('emailSent', (data) => {
    console.log(`Уведомление: Email был отправлен на ${data.to}`);
});

notificationService.on('smsSent', (data) => {
    console.log(`Уведомление: SMS был отправлен на ${data.to}`);
});

notificationService.on('pushNotificationSent', (data) => {
    console.log(`Уведомление: Push-уведомление было отправлено на ${data.to}`);
});

// Пример отправки уведомлений
notificationService.sendEmail('user@example.com', 'Привет!', 'Это тестовое сообщение.');
notificationService.sendSMS('+1234567890', 'Это тестовое SMS.');
notificationService.sendPushNotification('user_device_id', 'Это тестовое push-уведомление.');