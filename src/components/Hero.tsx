import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
          Math.random() * 100 + 155
        )}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Connect particles with lines
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(148, 163, 184, ${0.15 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full -z-10"
      ></canvas>

      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90 -z-10"></div>

      <div className="container mx-auto px-4 md:px-8 text-center z-10">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="block">Hi, I'm</span>
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Aniket Kumar Jha
          </span>
        </h1>
        
        <div className="relative inline-flex mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-30 rounded-lg"></div>
          <p className="relative text-xl md:text-2xl font-light text-gray-300 px-4 py-2">
            BTech Student & Full Stack Developer
          </p>
        </div>

        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12">
          Specialized in{" "}
          <span className="text-indigo-400 font-medium">MERN Stack</span>,{" "}
          <span className="text-purple-400 font-medium">Next.js</span>,{" "}
          <span className="text-pink-400 font-medium">TypeScript</span>, and{" "}
          <span className="text-blue-400 font-medium">Three.js</span>
        </p>

        <div className="flex justify-center gap-4 md:gap-6">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border border-gray-700 text-gray-300 font-medium rounded-lg transition-all duration-300 hover:border-gray-500 hover:text-white"
          >
            Contact Me
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 hover:text-gray-300 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;