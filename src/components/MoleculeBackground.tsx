import { useEffect, useRef } from 'react';

interface Atom {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  element: string;
}

const MoleculeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const atoms: Atom[] = [];
    const BOND_DISTANCE = 150;
    const ATOM_COUNT = 60;

    const colors = [
      'rgba(99, 102, 241, 0.7)',   // indigo
      'rgba(139, 92, 246, 0.6)',   // purple
      'rgba(59, 130, 246, 0.6)',   // blue
      'rgba(16, 185, 129, 0.5)',   // green
      'rgba(236, 72, 153, 0.5)',   // pink
      'rgba(245, 158, 11, 0.4)',   // amber
    ];

    const elements = ['C', 'O', 'N', 'H', 'S', 'P'];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const init = () => {
      resize();
      atoms.length = 0;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      for (let i = 0; i < ATOM_COUNT; i++) {
        atoms.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 3 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          element: elements[Math.floor(Math.random() * elements.length)],
        });
      }
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Draw bonds
      for (let i = 0; i < atoms.length; i++) {
        for (let j = i + 1; j < atoms.length; j++) {
          const dx = atoms[i].x - atoms[j].x;
          const dy = atoms[i].y - atoms[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < BOND_DISTANCE) {
            const opacity = (1 - dist / BOND_DISTANCE) * 0.3;
            ctx.beginPath();
            ctx.moveTo(atoms[i].x, atoms[i].y);
            ctx.lineTo(atoms[j].x, atoms[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Double bond effect for some connections
            if (dist < BOND_DISTANCE * 0.5 && i % 3 === 0) {
              ctx.beginPath();
              const offsetX = (dy / dist) * 3;
              const offsetY = -(dx / dist) * 3;
              ctx.moveTo(atoms[i].x + offsetX, atoms[i].y + offsetY);
              ctx.lineTo(atoms[j].x + offsetX, atoms[j].y + offsetY);
              ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.6})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      // Draw atoms
      for (const atom of atoms) {
        // Glow
        const gradient = ctx.createRadialGradient(atom.x, atom.y, 0, atom.x, atom.y, atom.radius * 4);
        gradient.addColorStop(0, atom.color);
        gradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(atom.x, atom.y, atom.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(atom.x, atom.y, atom.radius, 0, Math.PI * 2);
        ctx.fillStyle = atom.color.replace(/[\d.]+\)$/, '1)');
        ctx.fill();

        // Update position
        atom.x += atom.vx;
        atom.y += atom.vy;
        if (atom.x < 0 || atom.x > w) atom.vx *= -1;
        if (atom.y < 0 || atom.y > h) atom.vy *= -1;
      }

      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener('resize', () => { resize(); });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default MoleculeBackground;
