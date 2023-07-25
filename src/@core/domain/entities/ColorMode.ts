export enum COLOR_MODE {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ColorModeProps = {
  mode: COLOR_MODE;
};

export default class ColorMode {
  private static _LIGHT = COLOR_MODE.LIGHT;
  private static _DARK = COLOR_MODE.DARK;

  static get LIGHT(): COLOR_MODE {
    return this._LIGHT
  }

  static get DARK(): COLOR_MODE {
    return this._DARK
  }

  constructor(private props: ColorModeProps) {}

  get mode(): COLOR_MODE {
    return this.props.mode
  }

  set mode(mode: COLOR_MODE) {
    this.props.mode = mode
  }
}
