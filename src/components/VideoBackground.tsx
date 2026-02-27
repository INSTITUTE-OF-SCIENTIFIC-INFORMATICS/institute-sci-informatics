import MoleculeBackground from './MoleculeBackground';

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <iframe
        src="https://player.vimeo.com/video/1074971738?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&controls=0"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[177.78vh] min-h-[56.25vw] w-[177.78vh] h-[56.25vw]"
        style={{ border: 'none' }}
        allow="autoplay; fullscreen"
        allowFullScreen
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* Molecule animation overlay */}
      <MoleculeBackground />
    </div>
  );
};

export default VideoBackground;
