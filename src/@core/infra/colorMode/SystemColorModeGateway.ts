import SystemColorModeGatewayInterface from "@/@core/domain/gateways/colorMode/SystemColorModeGatewayInterface";
import {COLOR_MODE} from "@/@core/domain/entities/ColorMode";

export default class SystemColorModeGateway implements SystemColorModeGatewayInterface {
  public getMode(): COLOR_MODE {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? COLOR_MODE.DARK : COLOR_MODE.LIGHT;
  }
}