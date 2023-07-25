import GetColorModeUseCase from "@/@core/application/colorMode/GetColorModeUseCase";
import ColorMode from "@/@core/domain/entities/ColorMode";

describe('test use case', function () {
  it('should get storage color mode and return DARK', function () {
    const storageColorModeGateway = {
      getMode: () => ColorMode.DARK,
      setMode: () => storageColorModeGateway
    }

    const systemColorModeGateway = {
      getMode: () => ColorMode.DARK
    }

    const notificationGateway = {
      notify: () => {}
    }
    const useCase = new GetColorModeUseCase(storageColorModeGateway, systemColorModeGateway, notificationGateway);

    const result = useCase.execute();

    expect(result).toBe(ColorMode.DARK);
  });

  it('should get storage color mode and return LIGHT', function () {
    const storageColorModeGateway = {
      getMode: () => ColorMode.LIGHT,
      setMode: () => storageColorModeGateway
    }

    const systemColorModeGateway = {
      getMode: () => ColorMode.DARK
    }

    const notificationGateway = {
      notify: () => {}
    }
    const useCase = new GetColorModeUseCase(storageColorModeGateway, systemColorModeGateway, notificationGateway);

    const result = useCase.execute();

    expect(result).toBe(ColorMode.LIGHT);
  });

  it('should don\'t get storage color mode and return DARK from system preference', function () {
    const storageColorModeGateway = {
      getMode: () => null,
      setMode: () => storageColorModeGateway
    }

    const systemColorModeGateway = {
      getMode: () => ColorMode.DARK
    }

    const notificationGateway = {
      notify: jest.fn()
    };
    const useCase = new GetColorModeUseCase(storageColorModeGateway, systemColorModeGateway, notificationGateway);

    const result = useCase.execute();

    expect(result).toBe(ColorMode.DARK);
    expect(notificationGateway.notify).toBeCalledTimes(1);
  });

  it('should don\'t get storage color mode and return LIGHT from system preference', function () {
    const storageColorModeGateway = {
      getMode: () => null,
      setMode: () => storageColorModeGateway
    }

    const systemColorModeGateway = {
      getMode: () => ColorMode.LIGHT
    }

    const notificationGateway = {
      notify: jest.fn()
    };
    const useCase = new GetColorModeUseCase(storageColorModeGateway, systemColorModeGateway, notificationGateway);

    const result = useCase.execute();

    expect(result).toBe(ColorMode.LIGHT);
    expect(notificationGateway.notify).toBeCalledTimes(1);
  });
});