import { useRef } from "react";

const videos = [
  {
    id: 1,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Client Growth Reel",
    views: "2.3M views",
  },
  {
    id: 2,
    src: "https://www.w3schools.com/html/movie.mp4",
    title: "Ad Editing Project",
    views: "1.1M views",
  },
];

export default function Reels() {
  const containerRef = useRef();

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory"
    >
      {videos.map((video) => (
        <div
          key={video.id}
          className="h-screen w-full snap-start relative"
        >
          {/* VIDEO */}
          <video
            src={video.src}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />

          {/* OVERLAY */}
          <div className="absolute bottom-10 left-5">
            <h2 className="text-xl font-semibold">{video.title}</h2>
            <p className="text-sm text-gray-300">{video.views}</p>
          </div>
        </div>
      ))}
    </div>
  );
}