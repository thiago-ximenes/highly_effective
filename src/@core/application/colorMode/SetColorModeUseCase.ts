import StorageColorModeGatewayInterface from "@/@core/domain/gateways/colorMode/StorageColorModeGateway";
import {COLOR_MODE} from "@/@core/domain/entities/ColorMode";

export default class SetColorModeUseCase {

  constructor(
    private storageColorModeGateway: StorageColorModeGatewayInterface,
  ) {}
  execute(mode: COLOR_MODE): COLOR_MODE {
    this.storageColorModeGateway.setMode(mode);
    return mode;
  }
}