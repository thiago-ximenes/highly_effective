import type {Metadata} from 'next'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";
import ContainerAppBase from "@/components/Containers/ContainerAppBase";
import RootContextProvider from "@/app/RootContextProvider";

export const metadata: Metadata = {
  title: 'Manager Life Style',
  description: 'Manager Life Style',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <RootContextProvider>
          <ContainerAppBase>
            {children}
          </ContainerAppBase>
        </RootContextProvider>
      </body>
    </html>
  )
}
