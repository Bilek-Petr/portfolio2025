import { useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface UseMousePositionReturn {
  cursorPosition: MousePosition;
  textOffset: MousePosition;
  isHovering: boolean;
  isPressed: boolean;
  handleMouseMove: (e: React.MouseEvent) => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleMouseDown: () => void;
  handleMouseUp: () => void;
}

export function useMousePosition(): UseMousePositionReturn {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [textOffset, setTextOffset] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newPosition = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    const deltaX = newPosition.x - cursorPosition.x;
    const deltaY = newPosition.y - cursorPosition.y;

    setTextOffset({
      x: deltaX * 0.4,
      y: deltaY * 0.4,
    });

    setCursorPosition(newPosition);
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsPressed(false);
  };
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  return {
    cursorPosition,
    textOffset,
    isHovering,
    isPressed,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseDown,
    handleMouseUp,
  };
}
