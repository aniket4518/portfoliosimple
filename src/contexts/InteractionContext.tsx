import { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface InteractionContextType {
  mousePosition: { x: number; y: number };
  isHovering: boolean;
  cursorVariant: 'default' | 'hover' | 'click';
  scrollProgress: number;
  isScrollingDown: boolean;
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void;
  setIsHovering: (hovering: boolean) => void;
}

const InteractionContext = createContext<InteractionContextType | undefined>(undefined);

export const useInteraction = () => {
  const context = useContext(InteractionContext);
  if (context === undefined) {
    throw new Error('useInteraction must be used within an InteractionProvider');
  }
  return context;
};

interface InteractionProviderProps {
  children: React.ReactNode;
}

export const InteractionProvider = ({ children }: InteractionProviderProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'click'>('default');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Mouse tracking
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  // Scroll tracking
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (currentScrollY / scrollHeight) * 100 : 0;
    
    setScrollProgress(progress);
    setIsScrollingDown(currentScrollY > lastScrollY);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleMouseMove, handleScroll]);

  const value: InteractionContextType = {
    mousePosition,
    isHovering,
    cursorVariant,
    scrollProgress,
    isScrollingDown,
    setCursorVariant,
    setIsHovering,
  };

  return (
    <InteractionContext.Provider value={value}>
      {children}
    </InteractionContext.Provider>
  );
};