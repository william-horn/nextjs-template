
import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [_state, _setState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = JSON.parse(localStorage.getItem(key));
      if (saved) return saved;
    }

    if (initialValue instanceof Function) return initialValue();
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(_state));
  }, [_state])

  return [_state, _setState];
}

export default useLocalStorage;
