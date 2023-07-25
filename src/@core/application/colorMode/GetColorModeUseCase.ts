import type StorageColorModeGatewayInterface from "@/@core/domain/gateways/colorMode/StorageColorModeGateway";
import type SystemColorModeGatewayInterface from "@/@core/domain/gateways/colorMode/SystemColorModeGatewayInterface";
import {COLOR_MODE} from "@/@core/domain/entities/ColorMode";
import NotificationGatewayInterface from "@/@core/domain/gateways/colorMode/NotificationGatewayInterface";

export default class GetColorModeUseCase {
  constructor(
    private storageColorMode: StorageColorModeGatewayInterface,
    private systemColorMode: SystemColorModeGatewayInterface,
    private notification: NotificationGatewayInterface,
  ) {}

  public execute(): COLOR_MODE {
    const colorMode = this.storageColorMode.getMode();

    if (colorMode === null) {
      const systemColorMode = this.systemColorMode.getMode();
      this.storageColorMode.setMode(systemColorMode);
      this.notification.notify();

      return systemColorMode;
    }
    return colorMode;
  }
}