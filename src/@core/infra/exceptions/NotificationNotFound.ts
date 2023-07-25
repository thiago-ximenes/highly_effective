export default class NotificationNotFound extends Error {
    constructor(protected notification: string) {
        super(`Notification ${notification} not found`);
        this.name = "NotificationNotFound";
    }
}