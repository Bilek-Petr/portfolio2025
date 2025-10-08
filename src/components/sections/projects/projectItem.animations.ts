import { Transition } from 'framer-motion';

interface CursorStyleProps {
  width: string;
  height: string;
  x: string;
  y: string;
}

export const cursorStyle: CursorStyleProps = {
  width: '80px',
  height: '80px',
  x: '-50%',
  y: '-50%',
};

export const cursorAnimation = (
  cursorPosition: { x: number; y: number },
  isHovering: boolean,
  isPressed: boolean
) => ({
  left: cursorPosition.x,
  top: cursorPosition.y,
  opacity: isHovering ? 1 : 0,
  scale: isHovering ? (isPressed ? 0.85 : 1) : 0,
});

export const cursorTransition: Transition = {
  left: { type: 'spring', stiffness: 150, damping: 15, mass: 0.5 },
  top: { type: 'spring', stiffness: 150, damping: 15, mass: 0.5 },
  opacity: { duration: 0.2 },
  scale: { type: 'spring', stiffness: 300, damping: 20 },
};

export const viewTextAnimation = (
  textOffset: { x: number; y: number },
  isPressed: boolean
) => ({
  x: textOffset.x,
  y: textOffset.y,
  scale: isPressed ? 0.8 : 1,
});

export const viewTextTransition: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 20,
};
