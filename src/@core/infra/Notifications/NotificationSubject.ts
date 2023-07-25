import SubjectInterface from "@/@core/application/patterns/interfaces/SubjectInterface";
import Notification from "@/@core/domain/entities/Notification";
import NotificationNotFound from "@/@core/infra/exceptions/NotificationNotFound";

export default class NotificationSubject implements SubjectInterface {
  private static notifications = new Map<Symbol, Notification>();

  getAll(): IterableIterator<Notification> {
    return NotificationSubject.notifications.values();
  }

  get(key: symbol): Notification {
    const notification = NotificationSubject.notifications.get(key);
    if (!notification) {
      throw new NotificationNotFound(Symbol.keyFor(key)!.toString());
    }
    return notification;
  }

  getEntry(): { key: symbol, value: Notification } {
    return {
      key: NotificationSubject.notifications.keys().next().value,
      value: NotificationSubject.notifications.values().next().value,
    };
  }

  register(key: Symbol, notification: Notification): this {
    NotificationSubject.notifications.set(key, notification);
    return this;
  }

  removeAll(): this {
    NotificationSubject.notifications.clear();
    return this;
  }

  remove(key: symbol): this {
    NotificationSubject.notifications.delete(key);
    return this;
  }

}