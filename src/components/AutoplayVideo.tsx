import { useEffect, useRef } from "react";

interface AutoplayVideoProps {
  src: string;
  className?: string;
}

const AutoplayVideo = ({ src, className = "" }: AutoplayVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      controls
      preload="none"
      className={className}
    />
  );
};

export default AutoplayVideo;
