import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string, defaultValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
    } catch (error) {
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as [T, typeof setValue];
}
