
import { useEffect, useRef, useState } from 'react';

interface VideoBackgroundProps {
  videoUrl: string;
  fallbackImageUrl?: string;
}

const VideoBackground = ({ videoUrl, fallbackImageUrl }: VideoBackgroundProps) => {
  const [isVimeo, setIsVimeo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Check if the URL is a Vimeo URL
    if (videoUrl.includes('vimeo.com')) {
      setIsVimeo(true);
    } else {
      setIsVimeo(false);
    }
  }, [videoUrl]);

  useEffect(() => {
    // Initialize video when component mounts (only for direct video files, not Vimeo)
    if (!isVimeo && videoRef.current) {
      // Set video properties
      videoRef.current.muted = true;
      
      // Attempt to play the video
      const playPromise = videoRef.current.play();
      
      // Handle potential play() Promise rejection (happens in some browsers)
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Video autoplay prevented:", error);
          // We don't need to do anything special on error - the fallback image will be shown
        });
      }
    }
  }, [videoUrl, isVimeo]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Use a simple div with background as fallback if video fails */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={fallbackImageUrl ? { backgroundImage: `url(${fallbackImageUrl})` } : undefined}
      ></div>
      
      {/* Conditional rendering based on video type */}
      {isVimeo ? (
        <iframe
          ref={iframeRef}
          src={`${videoUrl}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1`}
          className="absolute w-full h-full object-cover"
          allow="autoplay; fullscreen"
          title="Vimeo Background"
          onLoad={handleVideoLoad}
          style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1s ease' }}
          loading="eager"
        ></iframe>
      ) : (
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          playsInline
          muted
          loop
          autoPlay
          poster={fallbackImageUrl}
          onLoadedData={handleVideoLoad}
          style={{ opacity: videoLoaded ? 1 : 0, transition: 'opacity 1s ease' }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {/* Overlay to control video darkness/brightness */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0zaDF2NWgtMXYtNXptNS0yaDF2MWgtMXYtMXptLTEgMmgtNXYtMWg1djF6bS0xLTFoMXYzaC0xdi0zem0tMi0xaDF2MWgtMXYtMXptMi0xaDF2MWgtMXYtMXptLTctOGg0djFoLTR2LTF6bTAgM2gxdi01aC0xdjV6bS0yLTJoLTV2LTFoNXYxem0tMS0xaDF2M2gtMXYtM3ptLTItMWgxdjFoLTF2LTF6bS0xIDFoLTF2LTFoMXYxem0tMyAxMGg0di0xaC00djF6bTAtM2gxdjVoLTF2LTV6bTUgMmgtNXYtMWg1djF6bS0xLTFoMXYzaC0xdi0zem0yLTFoMXYxaC0xdi0xem0yIDFoLTF2LTFoMXYxem0tMyAxMGg0di0xaC00djF6bTAgM2gxdi01aC0xdjV6bS01LTJoLTV2LTFoNXYxem0tMS0xaDF2M2gtMXYtM3ptLTItMWgxdjFoLTF2LTF6bS0xIDFoLTF2LTFoMXYxem0xMyAxNmgxdjFoLTF2LTF6bS0xLTJoLTV2LTFoNXYxem0tMS0xaDF2M2gtMXYtM3ptLTItMWgxdjFoLTF2LTF6bTItMWgxdjFoLTF2LTF6bS03LTloNHYxaC00di0xem0wIDNoMXYtNWgtMXY1em01IDJoLTV2LTFoNXYxem0tMSAxaC0xdi0zaDEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
    </div>
  );
};

export default VideoBackground;
