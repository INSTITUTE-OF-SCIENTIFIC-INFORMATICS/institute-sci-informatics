import { useEffect, useRef, useCallback } from 'react';

interface Atom {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  glowColor: string;
  element: string;
  // supernova burst
  burstX: number;
  burstY: number;
  burstProgress: number;
  targetX: number;
  targetY: number;
  // interaction
  isHovered: boolean;
  isDragged: boolean;
}

const MoleculeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const atomsRef = useRef<Atom[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, isDown: false });
  const draggedAtomRef = useRef<number | null>(null);
  const startTimeRef = useRef(Date.now());

  const BOND_DISTANCE = 140;
  const ATOM_COUNT = 70;
  const BURST_DURATION = 2000; // ms for supernova to settle
  const HOVER_RADIUS = 60;

  const colors = [
    { fill: 'rgba(99, 102, 241, 0.9)', glow: 'rgba(99, 102, 241, 0.4)' },   // indigo
    { fill: 'rgba(139, 92, 246, 0.85)', glow: 'rgba(139, 92, 246, 0.35)' },  // purple
    { fill: 'rgba(59, 130, 246, 0.85)', glow: 'rgba(59, 130, 246, 0.35)' },   // blue
    { fill: 'rgba(16, 185, 129, 0.8)', glow: 'rgba(16, 185, 129, 0.3)' },    // emerald
    { fill: 'rgba(236, 72, 153, 0.8)', glow: 'rgba(236, 72, 153, 0.3)' },    // pink
    { fill: 'rgba(245, 158, 11, 0.75)', glow: 'rgba(245, 158, 11, 0.25)' },  // amber
    { fill: 'rgba(14, 165, 233, 0.85)', glow: 'rgba(14, 165, 233, 0.35)' },  // sky
  ];

  const elements = ['C', 'O', 'N', 'H', 'S', 'P', 'Fe', 'Ca', 'Na'];

  const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

  const init = useCallback((w: number, h: number) => {
    const atoms: Atom[] = [];
    const cx = w / 2;
    const cy = h / 2;

    for (let i = 0; i < ATOM_COUNT; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const angle = Math.random() * Math.PI * 2;
      const targetDist = Math.random() * Math.max(w, h) * 0.45 + 50;
      const targetX = cx + Math.cos(angle) * targetDist;
      const targetY = cy + Math.sin(angle) * targetDist;
      const baseRadius = Math.random() * 3 + 1.5;

      atoms.push({
        x: cx,
        y: cy,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: baseRadius,
        baseRadius,
        color: color.fill,
        glowColor: color.glow,
        element: elements[Math.floor(Math.random() * elements.length)],
        burstX: cx,
        burstY: cy,
        burstProgress: 0,
        targetX,
        targetY,
        isHovered: false,
        isDragged: false,
      });
    }
    atomsRef.current = atoms;
    startTimeRef.current = Date.now();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let dpr = window.devicePixelRatio || 1;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;

      if (draggedAtomRef.current !== null) {
        const atom = atomsRef.current[draggedAtomRef.current];
        if (atom) {
          atom.x = mouseRef.current.x;
          atom.y = mouseRef.current.y;
          atom.vx = 0;
          atom.vy = 0;
        }
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseRef.current.x = touch.clientX - rect.left;
      mouseRef.current.y = touch.clientY - rect.top;

      if (draggedAtomRef.current !== null) {
        const atom = atomsRef.current[draggedAtomRef.current];
        if (atom) {
          atom.x = mouseRef.current.x;
          atom.y = mouseRef.current.y;
        }
      }
    };

    const findNearestAtom = (x: number, y: number): number | null => {
      let closest = -1;
      let closestDist = 30; // max grab distance
      for (let i = 0; i < atomsRef.current.length; i++) {
        const a = atomsRef.current[i];
        const d = Math.hypot(a.x - x, a.y - y);
        if (d < closestDist) {
          closestDist = d;
          closest = i;
        }
      }
      return closest >= 0 ? closest : null;
    };

    const handleDown = (x: number, y: number) => {
      mouseRef.current.isDown = true;
      const idx = findNearestAtom(x, y);
      if (idx !== null) {
        draggedAtomRef.current = idx;
        atomsRef.current[idx].isDragged = true;
      }
    };

    const handleUp = () => {
      mouseRef.current.isDown = false;
      if (draggedAtomRef.current !== null) {
        atomsRef.current[draggedAtomRef.current].isDragged = false;
        // give it a little kick
        const atom = atomsRef.current[draggedAtomRef.current];
        atom.vx = (Math.random() - 0.5) * 2;
        atom.vy = (Math.random() - 0.5) * 2;
      }
      draggedAtomRef.current = null;
    };

    const handleMouseDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      handleDown(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleTouchStart = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseRef.current.x = touch.clientX - rect.left;
      mouseRef.current.y = touch.clientY - rect.top;
      handleDown(mouseRef.current.x, mouseRef.current.y);
    };

    resize();
    init(canvas.offsetWidth, canvas.offsetHeight);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const atoms = atomsRef.current;
      const elapsed = Date.now() - startTimeRef.current;
      const burstT = Math.min(elapsed / BURST_DURATION, 1);
      const easedT = easeOutExpo(burstT);

      ctx.clearRect(0, 0, w, h);

      // Update hover state
      for (const atom of atoms) {
        const d = Math.hypot(atom.x - mouseRef.current.x, atom.y - mouseRef.current.y);
        atom.isHovered = d < HOVER_RADIUS && !atom.isDragged;
      }

      // Draw bonds
      for (let i = 0; i < atoms.length; i++) {
        for (let j = i + 1; j < atoms.length; j++) {
          const dx = atoms[i].x - atoms[j].x;
          const dy = atoms[i].y - atoms[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < BOND_DISTANCE) {
            const opacity = (1 - dist / BOND_DISTANCE) * 0.35;
            const isNearMouse =
              Math.hypot(atoms[i].x - mouseRef.current.x, atoms[i].y - mouseRef.current.y) < HOVER_RADIUS * 1.5 ||
              Math.hypot(atoms[j].x - mouseRef.current.x, atoms[j].y - mouseRef.current.y) < HOVER_RADIUS * 1.5;

            ctx.beginPath();
            ctx.moveTo(atoms[i].x, atoms[i].y);
            ctx.lineTo(atoms[j].x, atoms[j].y);
            ctx.strokeStyle = isNearMouse
              ? `rgba(139, 92, 246, ${opacity * 2.5})`
              : `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = isNearMouse ? 1.5 : 0.8;
            ctx.stroke();

            // Double bond
            if (dist < BOND_DISTANCE * 0.4 && i % 3 === 0) {
              const offsetX = (dy / dist) * 4;
              const offsetY = -(dx / dist) * 4;
              ctx.beginPath();
              ctx.moveTo(atoms[i].x + offsetX, atoms[i].y + offsetY);
              ctx.lineTo(atoms[j].x + offsetX, atoms[j].y + offsetY);
              ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.7})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      // Draw atoms
      for (const atom of atoms) {
        // During burst phase, interpolate from center to target
        if (burstT < 1 && !atom.isDragged) {
          atom.x = atom.burstX + (atom.targetX - atom.burstX) * easedT;
          atom.y = atom.burstY + (atom.targetY - atom.burstY) * easedT;
        }

        const displayRadius = atom.isDragged
          ? atom.baseRadius * 2.5
          : atom.isHovered
            ? atom.baseRadius * 2
            : atom.baseRadius;

        atom.radius += (displayRadius - atom.radius) * 0.15;

        // Outer glow
        const glowSize = atom.isHovered || atom.isDragged ? atom.radius * 8 : atom.radius * 5;
        const gradient = ctx.createRadialGradient(atom.x, atom.y, 0, atom.x, atom.y, glowSize);
        gradient.addColorStop(0, atom.glowColor);
        gradient.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(atom.x, atom.y, glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(atom.x, atom.y, atom.radius, 0, Math.PI * 2);
        ctx.fillStyle = atom.color;
        ctx.fill();

        // Bright center dot
        ctx.beginPath();
        ctx.arc(atom.x, atom.y, atom.radius * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.fill();

        // Element label on hover/drag
        if ((atom.isHovered || atom.isDragged) && atom.radius > 3) {
          ctx.font = `bold ${Math.round(atom.radius * 2.5)}px monospace`;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(atom.element, atom.x, atom.y - atom.radius * 3);
        }

        // Update position after burst
        if (burstT >= 1 && !atom.isDragged) {
          atom.x += atom.vx;
          atom.y += atom.vy;

          // Soft bounce
          if (atom.x < 0) { atom.x = 0; atom.vx *= -0.8; }
          if (atom.x > w) { atom.x = w; atom.vx *= -0.8; }
          if (atom.y < 0) { atom.y = 0; atom.vy *= -0.8; }
          if (atom.y > h) { atom.y = h; atom.vy *= -0.8; }

          // Mouse repulsion / attraction
          const mx = mouseRef.current.x;
          const my = mouseRef.current.y;
          const md = Math.hypot(atom.x - mx, atom.y - my);
          if (md < HOVER_RADIUS * 2 && md > 0 && !mouseRef.current.isDown) {
            const force = 0.5 / (md * 0.1);
            atom.vx += ((atom.x - mx) / md) * force;
            atom.vy += ((atom.y - my) / md) * force;
          }

          // Damping
          atom.vx *= 0.995;
          atom.vy *= 0.995;
        }
      }

      // Supernova flash at the very start
      if (elapsed < 400) {
        const flashOpacity = (1 - elapsed / 400) * 0.3;
        const cx = w / 2;
        const cy = h / 2;
        const flashGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, w * 0.4);
        flashGrad.addColorStop(0, `rgba(139, 92, 246, ${flashOpacity})`);
        flashGrad.addColorStop(0.5, `rgba(99, 102, 241, ${flashOpacity * 0.5})`);
        flashGrad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(cx, cy, w * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = flashGrad;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleUp);
    canvas.addEventListener('mouseleave', handleUp);
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchend', handleUp);
    window.addEventListener('resize', () => {
      resize();
      init(canvas.offsetWidth, canvas.offsetHeight);
    });

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleUp);
      canvas.removeEventListener('mouseleave', handleUp);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchend', handleUp);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
      style={{ touchAction: 'none' }}
    />
  );
};

export default MoleculeBackground;
