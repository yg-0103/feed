import { useEffect, useState } from 'react';

export const useLocalstorage = <T>(
  key: string,
  initialState?: T
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(() => {
    return JSON.parse(`${localStorage.getItem(key)}`) || initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
