import { useEffect, useRef } from 'react';
import { useInteraction } from '../contexts/InteractionContext';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { mousePosition, cursorVariant, isHovering } = useInteraction();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateCursor = () => {
      cursor.style.left = `${mousePosition.x}px`;
      cursor.style.top = `${mousePosition.y}px`;
    };

    updateCursor();
  }, [mousePosition]);

  const getCursorClass = () => {
    let baseClass = 'custom-cursor';
    
    if (cursorVariant === 'hover' || isHovering) {
      baseClass += ' scale-150 bg-primary-500/30';
    } else if (cursorVariant === 'click') {
      baseClass += ' scale-75 bg-accent-500/50';
    }
    
    return baseClass;
  };

  // Hide cursor on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={getCursorClass()}
      style={{
        position: 'fixed',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.4) 100%)',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.3s cubic-bezier(0.23, 1, 0.320, 1)',
        mixBlendMode: 'difference',
      }}
    />
  );
};

export default CustomCursor;