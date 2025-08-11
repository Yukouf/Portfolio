import { useEffect, useState } from 'react';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  isDragging: boolean;
  text: string;
}

const CustomCursor = () => {
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    isClicking: false,
    isDragging: false,
    text: ''
  });

  const [cursorTrail, setCursorTrail] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursor(prev => ({
        ...prev,
        x: e.clientX,
        y: e.clientY
      }));

      // Ajouter la position à la traînée
      setCursorTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
        // Garder seulement les 5 dernières positions
        return newTrail.slice(-5);
      });
    };

    const handleMouseDown = () => {
      setCursor(prev => ({ ...prev, isClicking: true }));
    };

    const handleMouseUp = () => {
      setCursor(prev => ({ ...prev, isClicking: false }));
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let text = '';
      let isHovering = false;

      // Vérifier si l'élément ou ses parents ont les classes spécifiques
      const hasClass = (element: HTMLElement, className: string) => {
        return element.classList.contains(className) || 
               element.closest(`.${className}`) !== null;
      };

      if (hasClass(target, 'ai-button') || hasClass(target, 'ai-button-outline') || hasClass(target, 'ai-button-yellow')) {
        text = 'Action';
        isHovering = true;
      } else if (hasClass(target, 'ai-nav-item')) {
        text = 'Navigation';
        isHovering = true;
      } else if (hasClass(target, 'ai-service-button')) {
        text = 'Select';
        isHovering = true;
      } else if (target.tagName === 'A') {
        text = 'Link';
        isHovering = true;
      }

      setCursor(prev => ({
        ...prev,
        isHovering,
        text
      }));
    };

    const handleMouseLeave = () => {
      setCursor(prev => ({
        ...prev,
        isHovering: false,
        text: ''
      }));
    };

    // Ajouter la classe custom-cursor au body
    document.body.classList.add('custom-cursor');

    // Écouteurs d'événements
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    // Nettoyage
    return () => {
      document.body.classList.remove('custom-cursor');
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Traînée du curseur */}
      {cursorTrail.map((pos, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            transform: `translate(${pos.x - 2}px, ${pos.y - 2}px)`,
            opacity: (index + 1) / cursorTrail.length * 0.3
          }}
        />
      ))}
      
      {/* Point central du curseur */}
      <div
        className={`cursor-dot ${cursor.isHovering ? 'hover' : ''} ${cursor.isClicking ? 'cursor-click' : ''}`}
        style={{
          transform: `translate(${cursor.x - 3}px, ${cursor.y - 3}px)`
        }}
      />
      
      {/* Anneau du curseur */}
      <div
        className={`cursor-ring ${cursor.isHovering ? 'hover' : ''}`}
        style={{
          transform: `translate(${cursor.x - 14}px, ${cursor.y - 14}px)`
        }}
      />
      
      {/* Texte du curseur */}
      {cursor.text && (
        <div
          className="cursor-text visible"
          style={{
            transform: `translate(${cursor.x + 20}px, ${cursor.y - 10}px)`
          }}
        >
          {cursor.text}
        </div>
      )}
    </>
  );
};

export default CustomCursor; 