import container from "@/@core/infra/colorMode/colorModeContaner";
import GetColorModeUseCase from "@/@core/application/colorMode/GetColorModeUseCase";
import {Register} from "@/@core/infra/colorMode/Register";
import SetColorModeUseCase from "@/@core/application/colorMode/SetColorModeUseCase";

const getColorModeUseCase = container
  .getDynamicValue<GetColorModeUseCase>(Register.GetColorModeUseCase)

const setColorModeUseCase = container
  .getDynamicValue<SetColorModeUseCase>(
    Register
      .SetColorModeUseCase
  )

export {
  getColorModeUseCase,
  setColorModeUseCase,
}