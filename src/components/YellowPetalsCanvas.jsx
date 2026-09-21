import React, { useEffect, useRef } from 'react';

export default function YellowPetalsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse interactive effect
    const mouse = { x: -1000, y: -1000, radius: 120 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Petal class
    const petalCount = 45;
    const petals = [];

    const colors = [
      '#facc15', // yellow-400
      '#fbbf24', // amber-400
      '#f59e0b', // amber-500
      '#fef08a', // yellow-200
      '#eab308'  // yellow-500
    ];

    class Petal {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -30;
        this.size = Math.random() * 14 + 10;
        this.speedY = Math.random() * 1.5 + 0.8;
        this.speedX = Math.random() * 1.2 - 0.6;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.4;
        this.sway = Math.random() * 0.05;
        this.swayAngle = Math.random() * Math.PI * 2;
      }

      update() {
        this.swayAngle += this.sway;
        this.x += this.speedX + Math.sin(this.swayAngle) * 0.8;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;

        // Interaction with mouse wind
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 4;
          this.y -= (dy / dist) * force * 4;
        }

        if (this.y > height + 40 || this.x < -50 || this.x > width + 50) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;

        // Draw sunflower petal shape
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.bezierCurveTo(
          this.size / 2, -this.size / 2,
          this.size / 2, this.size / 2,
          0, this.size
        );
        ctx.bezierCurveTo(
          -this.size / 2, this.size / 2,
          -this.size / 2, -this.size / 2,
          0, -this.size
        );
        ctx.fill();

        // Inner petal accent line
        ctx.strokeStyle = '#b45309';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, -this.size * 0.7);
        ctx.lineTo(0, this.size * 0.7);
        ctx.stroke();

        ctx.restore();
      }
    }

    for (let i = 0; i < petalCount; i++) {
      petals.push(new Petal());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      petals.forEach((petal) => {
        petal.update();
        petal.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
}
