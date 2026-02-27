import MoleculeBackground from './MoleculeBackground';

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#070d15]">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.15)_0%,_transparent_70%)]" />
      {/* Molecule animation */}
      <MoleculeBackground />
    </div>
  );
};

export default VideoBackground;
