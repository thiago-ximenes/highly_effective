import NotificationGatewayInterface from "@/@core/domain/gateways/colorMode/NotificationGatewayInterface";
import Notification, {NotificationType} from "@/@core/domain/entities/Notification";
import SubjectInterface from "@/@core/application/patterns/interfaces/SubjectInterface";

export default class NotificationColorModeGateway implements NotificationGatewayInterface {

  constructor(
    private notificationSubject: SubjectInterface,
    private registerKey: symbol,
  ) {}

  public notify(): void {
    const message = "Color mode got from OS";
    const type = NotificationType.INFO;
    const notification = new Notification(message, type);
    this.notificationSubject.register(this.registerKey, notification);
  }
}