'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  hue: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas boyutunu ayarla
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse hareketini takip et
    const handleMouseMove = (e: MouseEvent) => {
      // Her mouse hareketi için particle oluştur
      createParticle(e.clientX, e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Particle oluştur
    const createParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 2,
        life: 0,
        maxLife: 30, // 30 frame ömür
        hue: Math.random() * 30 + 190, // Mavi tonları
      });
    };

    // Animasyon loop
    const animate = () => {
      if (!ctx) return;

      // Canvas'ı tamamen temizle (iz kalmasın)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Particle'ları güncelle ve çiz
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life++;
        
        // Hareket ettir
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Yavaşlat
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        const lifeRatio = particle.life / particle.maxLife;
        const alpha = 1 - lifeRatio;

        if (alpha <= 0) return false;

        // Gradient çiz
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        
        gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 60%, ${alpha * 0.8})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 50%, ${alpha * 0.4})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
