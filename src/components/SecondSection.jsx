import { FaYoutube } from "react-icons/fa";
import { FaBolt, FaLocationDot, FaBriefcase } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { FaVideo, FaChartLine, FaEye, FaUsers, FaRocket } from "react-icons/fa";
import { MdOutlineDesignServices, MdWork } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri";

export default function SecondSection() {
  const projects = [
    {
      id: 1,
      type: "YouTube",
      video: "https://www.youtube.com/embed/0CzauNF0_Wg",
      title: "Bigg Boss Business Study",
    },
    {
      id: 2,
      type: "YouTube",
      video: "https://www.youtube.com/embed/iWfunSNoxp4",
      title: "Healthcare Podcast",
    },
    {
      id: 3,
      type: "YouTube",
      video: "https://www.youtube.com/embed/gHkYXThBt_M",
      title: "Spiritual Channel Video",
    },
  ];

  const [counts, setCounts] = useState({
    views: 0,
    clients: 0,
    engagement: 0,
    projects: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 },
    );

    if (projectRef.current) observer.observe(projectRef.current);

    return () => observer.disconnect();
  }, []);

  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const projectRef = useRef(null);
  const sectionRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          startCounting();
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    const duration = 1800;
    const startTime = Date.now();

    const animate = () => {
      let progress = (Date.now() - startTime) / duration;
      progress = Math.min(progress, 1);

      // 🔥 ease-out curve (magic here)
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        views: Math.floor(ease * 300), // 0 → 300
        clients: Math.floor(ease * 30), // 0 → 30
        engagement: Math.floor(ease * 300),
        projects: Math.floor(ease * 100),
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    animate();
  };

  return (
    <section className="w-full pt-16 pb-24">
      {/* TOP */}
      <div className="flex flex-col lg:flex-row gap-6 mb-16">
        {/* LEFT */}
        <div className="max-w-xl">
          <p className="text-sm text-purple-400 mb-4 tracking-wider flex items-center gap-2">
            <FaBolt className="text-purple-400" />
            WHAT I DO
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Content that connects.
            <br />
            Strategy that scales.
          </h2>

          <p className="mt-6 text-gray-400">
            We combine creative editing with data-backed strategy to create
            content that doesn’t just look good — it performs and grows your
            brand.
          </p>

          <button className="mt-8 px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition">
            Explore My Services →
          </button>
        </div>

        {/* CARDS (3 ONLY) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-8xl ml-auto">
          {[
            {
              title: "Video Editing",
              icon: <FaVideo />,
              points: ["Retention-focused edits", "Optimized engagement"],
            },
            {
              title: "Social Media Management",
              icon: <RiLightbulbFlashLine />,
              points: ["Consistent posting", "Growth execution"],
            },
            {
              title: "Content Strategy",
              icon: <FaChartLine />,
              points: ["Content roadmap", "Shoot planning"],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 w-full h-[260px] rounded-xl bg-white/5 border border-white/10 backdrop-blur hover:border-purple-500/40 hover:-translate-y-1 transition flex flex-col justify-between"
            >
              {/* TOP */}
              <div className="flex items-start gap-3 mb-4">
                <div className="text-purple-400 text-lg mt-[2px]">
                  {item.icon}
                </div>

                <h3 className="text-lg font-semibold leading-snug tracking-tight max-w-[180px]">
                  {item.title}
                </h3>
              </div>

              {/* BULLETS */}
              <ul className="space-y-3 text-[16px] text-gray-300 leading-7">
                {item.points.map((point, idx) => (
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-[2px]">•</span>
                    <span className="whitespace-normal break-words">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div
        ref={sectionRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur mb-20"
      >
        {[
          {
            value: counts.views,
            label: "Views Generated",
            suffix: "k+",
            icon: <FaEye />,
          },
          {
            value: counts.clients,
            label: "Happy Clients",
            suffix: "+",
            icon: <FaUsers />,
          },
          {
            value: counts.engagement,
            label: "Engagement Boost",
            suffix: "%",
            icon: <FaRocket />,
          },
          {
            value: counts.projects,
            label: "Projects Completed",
            suffix: "+",
            icon: <MdWork />,
          },
        ].map((item, i) => (
          <div key={i} className="text-center flex flex-col items-center gap-2">
            <div className="text-purple-400 text-lg">{item.icon}</div>

            <h3 className="text-2xl font-semibold text-purple-400">
              {item.value}
              {item.suffix}
            </h3>

            <p className="text-sm text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>

      {/* PROJECTS */}
      <div>
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Content that delivers results
          </h2>

          <button className="hidden md:block text-purple-400 hover:underline">
            View All →
          </button>
        </div>

        <div ref={projectRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/40 transition"
            >
              <div className="h-56 bg-black overflow-hidden relative">
                {item.type === "YouTube" ? (
                  <iframe
                    src={`${item.video}?controls=1&modestbranding=1&rel=0`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={item.video}
                    controls
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-3">
                <h3 className="font-medium">{item.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-400 py-2">
                  <FaYoutube className="text-red-500 text-base" />
                  <span>YouTube</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
