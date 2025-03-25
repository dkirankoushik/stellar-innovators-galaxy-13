
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface StarFieldProps {
  className?: string;
  starCount?: number;
  speed?: number;
}

export const StarField = ({
  className,
  starCount = 150,
  speed = 0.05
}: StarFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const stars: { x: number; y: number; z: number; size: number; color: string }[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };
    
    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 1.5 + 0.5;
        
        // Colors: white, bluish white, light blue, very light purple
        const colors = [
          'rgba(255, 255, 255, 0.8)',
          'rgba(235, 244, 255, 0.8)',
          'rgba(185, 220, 255, 0.7)',
          'rgba(200, 200, 255, 0.7)'
        ];
        
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
          size,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };
    
    let animationFrameId: number;
    
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        // Move the star
        star.z -= speed;
        
        // If the star is too close, reset its position
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
        }
        
        // Calculate the star position
        const x = star.x;
        const y = star.y;
        const radius = star.size * (1 - star.z / canvas.width);
        
        // Draw the star
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        
        // Add a subtle glow to larger stars
        if (radius > 0.8) {
          ctx.beginPath();
          ctx.arc(x, y, radius * 2, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(x, y, radius, x, y, radius * 2);
          
          // Extract the RGB values from the original color
          const colorParts = star.color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
          if (colorParts) {
            const r = colorParts[1];
            const g = colorParts[2];
            const b = colorParts[3];
            
            // Create new RGBA strings with correct format
            gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.3)`);
            gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          } else {
            // Fallback to a safe default if the color can't be parsed
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          }
          
          ctx.fillStyle = gradient;
          ctx.fill();
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
  }, [starCount, speed]);
  
  return (
    <canvas
      ref={canvasRef}
      className={cn('fixed inset-0 w-full h-full -z-10', className)}
    />
  );
};
