import {COLOR_MODE, ColorModeProps} from "@/@core/domain/entities/ColorMode";

export default interface StorageColorModeGatewayInterface {
  getMode(): COLOR_MODE| null;
  setMode(mode: COLOR_MODE): this;
}
