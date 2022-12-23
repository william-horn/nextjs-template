

import { useEffect } from "react";
import { Event } from 'pseudo-events';

const useMouse = () => {
  const mouse = new Event();
  mouse.down = new Event(mouse);
  mouse.up = new Event(mouse);

  useEffect(() => {
    // callbacks
    const mouseDown = event => mouse.down.fire(event);

    // listeners
    window.addEventListener('mousedown', mouseDown);

    return () => {
      window.removeEventListener('mousedown', mouseDown);
    }
  }, []);

  return mouse;
}

export default useMouse;

