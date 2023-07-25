import NotificationSubject from "@/@core/infra/Notifications/NotificationSubject";

export const RegisterNotification = {
  GetColorModeFromOS: Symbol.for("getColorModeFromOS"),
};

const notificationSubject = new NotificationSubject();

export default notificationSubject;
