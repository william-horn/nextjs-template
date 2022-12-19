
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [_state, _setState] = useState(initialValue);

  const setState = (value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(value));
    }

    _setState(value);
  }

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(key));
    if (saved) setState(saved);
  }, [])

  return [_state, setState];
}

export default useLocalStorage;
