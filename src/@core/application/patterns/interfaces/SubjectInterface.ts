import ObserverInterface from "@/@core/application/patterns/interfaces/ObserverInterface";
import Notification from "@/@core/domain/entities/Notification";

export default interface SubjectInterface {
  register(key: symbol, notification: Notification): this;
  remove(key: symbol): void;
  removeAll(): void;
  get(
    key: symbol,
  ): void;
  getAll(): void;
}