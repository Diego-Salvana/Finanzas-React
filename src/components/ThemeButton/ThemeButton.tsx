import { useContext, useState } from 'react';
import { DarkThemeContext } from '../../contexts';
import { InputSwitch, type InputSwitchChangeEvent } from 'primereact/inputswitch';

export function ThemeButton() {
  const { isDark, setIsDark } = useContext(DarkThemeContext);
  const [checked, setChecked] = useState(isDark);

  function handleTheme(event: InputSwitchChangeEvent) {
    setChecked(event.value);
    setIsDark(event.value);
  }

  return (
    <>
      <InputSwitch checked={checked} onChange={(event: InputSwitchChangeEvent) => handleTheme(event)} />
    </>
  );
}
