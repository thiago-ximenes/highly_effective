import {COLOR_MODE} from "@/@core/domain/entities/ColorMode";

export default interface SystemColorModeGatewayInterface {
  getMode(): COLOR_MODE;
}