import { HiSparkles } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
export default function Hero() {
  const videos = [
    "https://res.cloudinary.com/dggc1f62t/video/upload/f_auto,q_auto:low/hero-video_bpcmdf.mp4",

    "https://res.cloudinary.com/dggc1f62t/video/upload/f_auto,q_auto/sample1_rhl0rj.mp4",

    "https://res.cloudinary.com/dggc1f62t/video/upload/f_auto,q_auto/sample2_hh7wqj.mp4",

    "https://res.cloudinary.com/dggc1f62t/video/upload/f_auto,q_auto/sample3_cvcn8h.mp4",
  ];

  const blurAmount = 3; // px → यहीं से control कर
  const dimOpacity = 1; // 0–1 → dark feel control

  const videoRefs = useRef([]);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % videos.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  /* 🎬 FORCE VIDEO PLAY (YAHAN DAALNA HAI) */
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true;
        video.play().catch(() => {});
      }
    });
  }, []);

  return (
    <section className="w-full pt-24 pb-12 flex flex-col lg:flex-row items-center justify-between gap-16">
      {/* LEFT */}
      <div className="max-w-xl">
        <p className="text-sm text-purple-400 mb-4 tracking-wider flex items-center gap-2">
          <HiSparkles className="text-purple-400 text-sm animate-pulse" />
          CONTENT STRATEGY & VIDEO EDITING
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          We create content{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            that performs.
          </span>
        </h1>

        <p className="mt-6 text-gray-400">
          Strategy + editing built for reach, retention & results.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4 flex-wrap">
          {/* VIEW MY WORK */}
          <a
            href="https://drive.google.com/drive/folders/1ngk4aMMEA_ybt83agiTgRwLzatlVP__U?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-lg hover:scale-105 transition inline-flex items-center justify-center"
          >
            View My Work →
          </a>

          {/* WHATSAPP */}
          <a
            href={`https://wa.me/919336002651?text=${encodeURIComponent(
              "Hi, I saw your portfolio and want to discuss a project",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition inline-flex items-center justify-center text-white"
          >
            Let’s Work Together →
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Trusted by 50+ brands • Millions of views delivered
        </p>
      </div>

      {/* RIGHT */}
      <div
        className="relative w-full max-w-xl h-[360px] flex justify-center items-center overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to left, transparent, black 25%, black 75%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 20%, black 20%, transparent)",
        }}
      >
        {/* glow */}
        <div className="absolute w-80 h-80 bg-purple-600/40 blur-[120px] rounded-full"></div>

        {/* TRACK */}
        <div
          className="flex gap-6 animate-slide"
          style={{
            width: `${videos.length * 200}px`,
          }}
        >
          {[...videos, ...videos].map((video, i) => (
            <div
              key={i}
              className="w-34 h-80 rounded-xl overflow-hidden flex-shrink-0"
            >
              <video
                src={video}
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-full object-cover"
                style={{
                  filter: `blur(${blurAmount}px) brightness(${dimOpacity})`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
