import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import './AnimatedBird.css';
import birdSprite from '../../data/Studykeet/studykeet_sprite.png';

// Bird animation states
const BIRD_STATES = {
  FLY_IN: 'fly-in',
  LANDING: 'landing',
  PERCH: 'perch',
  IDLE: 'idle'
};

// Animation frame definitions for sprite grid
const ANIMATIONS = {
  [BIRD_STATES.FLY_IN]: {
    frames: [
      { row: 0, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: 2 },
      { row: 0, col: 1 },
    ],
    duration: 150,
    loop: true
  },
  [BIRD_STATES.LANDING]: {
    frames: [
      { row: 0, col: 3 },
      { row: 0, col: 4 },
      { row: 0, col: 5 }
    ],
    duration: 200,
    loop: false
  },
  [BIRD_STATES.PERCH]: {
    frames: [
      { row: 1, col: 0 }
    ],
    duration: 200,
    loop: false
  },
  [BIRD_STATES.IDLE]: {
    frames: [
      { row: 1, col: 0 }
    ],
    duration: 500,
    loop: false
  }
};

const AnimatedBird = ({ 
  targetElement = null, 
  projectsSection = null,
  birdSize = 64
}) => {
  const [currentState, setCurrentState] = useState(BIRD_STATES.FLY_IN);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [position, setPosition] = useState({ x: typeof window !== 'undefined' ? window.innerWidth + 100 : 1000, y: 50 });
  const [finalPosition, setFinalPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [hasLanded, setHasLanded] = useState(false);
  const birdRef = useRef(null);
  const animationRef = useRef(null);

  // Start the bird animation when projects section is in view
  useEffect(() => {
    if (!projectsSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setTimeout(() => {
              flyToTarget();
            }, 500);
          }
        });
      },
      {
        threshold: 0.1, // Lower threshold for mobile (was 0.3)
        rootMargin: '50px' // Give more margin for mobile detection
      }
    );

    observer.observe(projectsSection);

    return () => {
      observer.disconnect();
    };
  }, [projectsSection, isVisible]);

  // Fly to target element
  const flyToTarget = () => {
    if (!targetElement || !projectsSection) return;

    // Simple fixed position on the card - no complex calculations
    const targetX = 50; // Fixed position from left of card
    const targetY = -85; // Fixed position higher above card

    // Animate flying to target
    const duration = 2500; // 2.5 seconds flight
    const startX = Math.max(window.innerWidth + 50, 400); // Ensure reasonable start position
    const startY = targetY; // Start at same Y level as target
    const startTime = Date.now();

    const animateFlight = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth flight
      const ease = 1 - Math.pow(1 - progress, 3);
      
      const currentX = startX + (targetX - startX) * ease;
      const currentY = startY + (targetY - startY) * ease;
      
      setPosition({ x: currentX, y: currentY });

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateFlight);
      } else {
        // Landing sequence - use fixed position relative to card
        setCurrentState(BIRD_STATES.LANDING);
        setCurrentFrame(0);
        setFinalPosition({ x: targetX, y: targetY });
        setTimeout(() => {
          setCurrentState(BIRD_STATES.PERCH);
          setHasLanded(true);
          setTimeout(() => {
            setCurrentState(BIRD_STATES.IDLE);
          }, 500);
        }, 600);
      }
    };

    animationRef.current = requestAnimationFrame(animateFlight);
  };

  // Frame animation
  useEffect(() => {
    if (!isVisible) return;

    const animation = ANIMATIONS[currentState];
    if (!animation || animation.frames.length === 0) return;

    const interval = setInterval(() => {
      setCurrentFrame(prev => {
        if (animation.loop) {
          return (prev + 1) % animation.frames.length;
        } else {
          return Math.min(prev + 1, animation.frames.length - 1);
        }
      });
    }, animation.duration);

    return () => clearInterval(interval);
  }, [currentState, isVisible]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Update bird position on window resize after landing - now using fixed positions
  useEffect(() => {
    if (!hasLanded) return;

    // Bird uses fixed position relative to its parent card container
    // No need to recalculate on resize since it's positioned relative to the card
    setFinalPosition({ x: 50, y: -85 });
  }, [hasLanded]);

  if (!isVisible) return null;

  const animation = ANIMATIONS[currentState];
  const frame = animation.frames[Math.min(currentFrame, animation.frames.length - 1)];
  
  if (!frame) return null;

  // Calculate background position for sprite
  const spriteX = -frame.col * birdSize;
  const spriteY = -frame.row * birdSize;

  return (
    <Box
      ref={birdRef}
      className={`animated-bird ${currentState}`}
      position="absolute"
      left={hasLanded ? `${finalPosition.x}px` : `${Math.min(position.x, window.innerWidth - birdSize)}px`}
      top={hasLanded ? `${finalPosition.y}px` : `${position.y}px`}
      width={`${birdSize}px`}
      height={`${birdSize}px`}
      backgroundImage={`url('${birdSprite}')`}
      backgroundPosition={`${spriteX}px ${spriteY}px`}
      backgroundSize={`${birdSize * 7}px ${birdSize * 8}px`}
      backgroundRepeat="no-repeat"
      zIndex={1000}
      pointerEvents="none"
      style={{
        transition: hasLanded ? 'none' : 'transform 0.1s ease-out'
      }}
    />
  );
};

export default AnimatedBird;