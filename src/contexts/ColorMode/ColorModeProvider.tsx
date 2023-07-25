'use client';
import {createContext, PropsWithChildren, useCallback, useContext, useState} from "react";
import NoProviderContextException from "@/exceptions/context/NoProviderContextException";
import {COLOR_MODE} from "@/@core/domain/entities/ColorMode";
import {getColorModeUseCase, setColorModeUseCase} from "@/@core/infra/colorMode";

interface ColorModeInterface {
  toggleColorMode: (mode: COLOR_MODE) => void;
  mode: COLOR_MODE;
}

const ColorModeContext = createContext<ColorModeInterface>({} as ColorModeInterface);

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new NoProviderContextException("useColorMode");
  }
  return context;
}

export default function ColorModeProvider({children}: PropsWithChildren) {
  const [mode, setMode] =
    useState<COLOR_MODE>(
      getColorModeUseCase.execute()
    );

  const toggleColorMode = useCallback((mode: COLOR_MODE) => {

    setMode(() => {
      return setColorModeUseCase.execute(mode);
    });
  }, []);

  return (
    <ColorModeContext.Provider value={{toggleColorMode, mode}}>
      {children}
    </ColorModeContext.Provider>
  );
}