import Container from "../container";
import LocalStorageColorModeGateway from "@/@core/infra/colorMode/LocalStorageColorModeGateway";
import GetColorModeUseCase from "@/@core/application/colorMode/GetColorModeUseCase";
import NotificationColorModeGateway from "@/@core/infra/colorMode/NotificationColorModeGateway";
import SystemColorModeGateway from "@/@core/infra/colorMode/SystemColorModeGateway";

import {Register} from "@/@core/infra/colorMode/Register";
import SetColorModeUseCase from "@/@core/application/colorMode/SetColorModeUseCase";
import notificationSubject, {RegisterNotification} from "@/@core/infra/colorMode/Notifications";

const container = Container.getInstance();

container
  .setDependency(Register.LocalStorageAdapter, new LocalStorageColorModeGateway())
  .setDependency(Register.SystemColorModeGateway, new SystemColorModeGateway())
  .setDependency(Register.NotificationColorModeGateway, new NotificationColorModeGateway(
    notificationSubject,
    RegisterNotification.GetColorModeFromOS,
  ))

container.setDynamicValue(Register.GetColorModeUseCase, new GetColorModeUseCase(
  Container.getDependency(Register.LocalStorageAdapter),
  Container.getDependency(Register.SystemColorModeGateway),
  Container.getDependency(Register.NotificationColorModeGateway),
));

container.setDependency(Register.LocalStorageAdapter, new LocalStorageColorModeGateway())

container.setDynamicValue(Register.SetColorModeUseCase, new SetColorModeUseCase(
  container.getDependency(Register.LocalStorageAdapter)
));

export default container;
