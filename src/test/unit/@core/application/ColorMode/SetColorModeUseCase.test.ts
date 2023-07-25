import ColorMode from "@/@core/domain/entities/ColorMode";
import SetColorModeUseCase from "@/@core/application/colorMode/SetColorModeUseCase";

describe('SetColorModeUseCase', function () {
  it('should save color preference in localStorage DARK', function () {
    const storageColorModeGateway = {
      getMode: () => null,
      setMode: jest.fn()
    };

    const useCase = new SetColorModeUseCase(storageColorModeGateway);
    useCase.execute(ColorMode.DARK);
    expect(storageColorModeGateway.setMode).toBeCalledWith(ColorMode.DARK);
  });

  it('should save color preference in localStorage LIGHT', function () {
    const storageColorModeGateway = {
      getMode: () => null,
      setMode: jest.fn()
    };

    const useCase = new SetColorModeUseCase(storageColorModeGateway);
    useCase.execute(ColorMode.LIGHT);
    expect(storageColorModeGateway.setMode).toBeCalledWith(ColorMode.LIGHT);
  });
});