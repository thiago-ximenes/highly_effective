import StorageColorModeGatewayInterface from "@/@core/domain/gateways/colorMode/StorageColorModeGateway";
import {COLOR_MODE} from "@/@core/domain/entities/ColorMode";

export default class LocalStorageColorModeGateway implements StorageColorModeGatewayInterface {
  private static key = "colorMode";

  public getMode(): COLOR_MODE | null {
    const colorMode = localStorage.getItem(LocalStorageColorModeGateway.key);

    if (colorMode === null) {
      return null;
    }

    return colorMode as COLOR_MODE;
  }

  public setMode(mode: COLOR_MODE): this {
    localStorage.setItem(LocalStorageColorModeGateway.key, mode);
    return this;
  }
}