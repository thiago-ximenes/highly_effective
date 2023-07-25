'use client';
import UserInput from "@/app/login/components/UserInput";
import {useColorMode} from "@/contexts/ColorMode/ColorModeProvider";
import {COLOR_MODE} from "@/@core/domain/entities/ColorMode";

export default function Login() {
  const {toggleColorMode, mode} = useColorMode();

  function handleToggleColorMode() {
    const newMode =
      mode === COLOR_MODE.DARK ? COLOR_MODE.LIGHT : COLOR_MODE.DARK;
    toggleColorMode(newMode);
  }
  return (
    <>
      <UserInput/>
      <button onClick={() => handleToggleColorMode()}>Trocar Tema</button>
    </>
  )
}