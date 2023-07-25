import Notification from "@/@core/domain/entities/Notification";

export default interface NotificationGatewayInterface {
  notify(): void;
}