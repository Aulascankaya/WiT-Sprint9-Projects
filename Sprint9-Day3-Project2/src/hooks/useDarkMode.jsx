import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage('geceModu', false);

  return [darkMode, setDarkMode];
};
