import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setNewStoredValue = (newStoredValue) => {
    setStoredValue(newStoredValue);
    window.localStorage.setItem(key, JSON.stringify(newStoredValue));
  };
  return [storedValue, setNewStoredValue];
};

export default useLocalStorage;
