import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: screenWidth, innerHeight: screenHeight } = window;
  return {
    screenWidth,
    screenHeight
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    screenWidth: 0,
    screenHeight: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    setWindowDimensions(getWindowDimensions());
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}