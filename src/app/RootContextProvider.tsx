'use client';

import ColorModeProvider from "@/contexts/ColorMode/ColorModeProvider";
import Theme from "@/theme/Theme";
import {PropsWithChildren} from "react";
import RootNotifications from "@/app/RootNotifications";

export default function RootContextProvider({children}: PropsWithChildren) {
  return (
    <ColorModeProvider>
      <Theme>
        {children}
        <RootNotifications />
      </Theme>
    </ColorModeProvider>
  )
}