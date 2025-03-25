
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface StarFieldProps {
  className?: string;
  starCount?: number;
  speed?: number;
  glowIntensity?: number;
}

export const StarField = ({
  className,
  starCount = 200,
  speed = 0.05,
  glowIntensity = 2.5
}: StarFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const stars: { x: number; y: number; z: number; size: number; color: string; twinkle: number; twinkleSpeed: number }[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };
    
    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 2 + 0.5;
        
        // Enhanced color palette for stars with more variety
        const colors = [
          'rgba(255, 255, 255, 0.9)',  // Pure white
          'rgba(235, 244, 255, 0.85)', // Bluish white
          'rgba(200, 220, 255, 0.8)',  // Light blue
          'rgba(200, 200, 255, 0.8)',  // Very light purple
          'rgba(255, 240, 230, 0.8)',  // Warm white (slightly orange)
          'rgba(220, 240, 255, 0.85)'  // Ice blue
        ];
        
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
          size,
          color: colors[Math.floor(Math.random() * colors.length)],
          twinkle: Math.random(),
          twinkleSpeed: 0.01 + Math.random() * 0.03
        });
      }
    };
    
    let animationFrameId: number;
    let lastTime = 0;
    
    const render = (time = 0) => {
      // Calculate delta time for smoother animations
      const deltaTime = time - lastTime;
      lastTime = time;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw a subtle gradient background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, 'rgba(5, 5, 10, 0.3)');
      bgGradient.addColorStop(1, 'rgba(10, 15, 35, 0.1)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        // Move the star
        star.z -= speed * (deltaTime * 0.05 || 1);
        
        // Update twinkle effect
        star.twinkle += star.twinkleSpeed;
        if (star.twinkle > 1) star.twinkle = 0;
        
        // Calculate twinkle factor (0.7 to 1.3 range)
        const twinkleFactor = 0.7 + Math.sin(star.twinkle * Math.PI * 2) * 0.3;
        
        // If the star is too close, reset its position
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
        
        // Calculate the star position
        const x = star.x;
        const y = star.y;
        const radius = star.size * (1 - star.z / canvas.width) * twinkleFactor;
        
        // Draw the star
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        
        // Add an enhanced glow to all stars with intensity based on size
        const glowRadius = radius * glowIntensity * (1 + Math.sin(star.twinkle * Math.PI * 2) * 0.3);
        
        ctx.beginPath();
        ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(x, y, radius * 0.5, x, y, glowRadius);
        
        // Extract the RGB values from the original color
        const colorParts = star.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
        if (colorParts) {
          const r = parseInt(colorParts[1]);
          const g = parseInt(colorParts[2]);
          const b = parseInt(colorParts[3]);
          
          // Create new RGBA strings with correct format
          const alpha = 0.4 * twinkleFactor;
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
        } else {
          // Fallback to a safe default if the color can't be parsed
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        }
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add extra flare to larger stars (occasional lens flare effect)
        if (radius > 1.2 && Math.random() > 0.7) {
          const flareLength = radius * 10 * twinkleFactor;
          const angle = Math.random() * Math.PI * 2;
          
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(
            x + Math.cos(angle) * flareLength,
            y + Math.sin(angle) * flareLength
          );
          
          const flareGradient = ctx.createLinearGradient(
            x, y,
            x + Math.cos(angle) * flareLength,
            y + Math.sin(angle) * flareLength
          );
          
          if (colorParts) {
            const r = parseInt(colorParts[1]);
            const g = parseInt(colorParts[2]);
            const b = parseInt(colorParts[3]);
            
            flareGradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.3)`);
            flareGradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          } else {
            flareGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
            flareGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          }
          
          ctx.strokeStyle = flareGradient;
          ctx.lineWidth = radius * 0.5;
          ctx.stroke();
        }
      });
      
      animationFrameId = window.requestAnimationFrame(render);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    render();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [starCount, speed, glowIntensity]);
  
  return (
    <canvas
      ref={canvasRef}
      className={cn('fixed inset-0 w-full h-full -z-10', className)}
    />
  );
};
