import LocalStorageColorModeGateway from "@/@core/infra/colorMode/LocalStorageColorModeGateway";
import ColorMode from "@/@core/domain/entities/ColorMode";

describe('LocalStorageColorModeGateway', function () {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should save in local storage with "colorMode" key and DARK mode', function () {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(),
        getItem: jest.fn(),
      },
    });

    const localStorageColorModeGateway = new LocalStorageColorModeGateway();

    localStorageColorModeGateway.setMode(ColorMode.DARK);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith("colorMode", JSON.stringify(ColorMode.DARK));
  });

  it('should save in local storage with "colorMode" key and LIGHT mode', function () {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(),
        getItem: jest.fn(),
      },
    });

    const localStorageColorModeGateway = new LocalStorageColorModeGateway();

    localStorageColorModeGateway.setMode(ColorMode.LIGHT);

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith("colorMode", JSON.stringify(ColorMode.LIGHT));
  });
});