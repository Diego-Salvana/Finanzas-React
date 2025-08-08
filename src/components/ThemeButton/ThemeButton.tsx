import { Button } from 'primereact/button';
import { useContext } from 'react';
import { DarkThemeContext } from '../../contexts';

export function ThemeButton() {
  const { isDark, setIsDark } = useContext(DarkThemeContext);

  function handleClick() {
    console.log('Theme button click');
    console.log(`Is dark: ${isDark}`);
    setIsDark(!isDark);
  }

  return (
    <>
      <Button onClick={handleClick}>Theme button</Button>
    </>
  );
}
