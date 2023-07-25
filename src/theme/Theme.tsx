'use client'

import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {PropsWithChildren, useMemo} from "react";
import {useColorMode} from "@/contexts/ColorMode/ColorModeProvider";

export default function Theme({children}: PropsWithChildren) {
  const {mode} = useColorMode();

  const darkTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}