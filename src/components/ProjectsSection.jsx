import { FaBolt, FaLocationDot, FaBriefcase } from "react-icons/fa6";
export default function ProjectsSection() {
  const blurAmount = 4; // 🔥 blur control (0–10 px)
  const dimOpacity = 0.7; // 🔥 brightness control (0–1)

  const projects = [
    {
      tag: "Educational EDIT",
      views: "186k+",
      video:
        "https://res.cloudinary.com/dggc1f62t/video/upload/f_auto,q_auto/reel1_kp06zs.mp4",
      link: "https://www.instagram.com/reel/C9-GL6gPsNs/",
    },
    {
      tag: "Trader's EDIT",
      views: "126k+",
      video:
        "https://res.cloudinary.com/dggc1f62t/video/upload/reel2_zyiqly.mp4",
      link: "https://www.instagram.com/reel/C8rov1zye9B/?igsh=MWI5bnJ1d3czcjk0dg==",
    },
    ,
    {
      tag: "Doctor's EDIT",
      views: "10.3k+",
      video:
        "https://res.cloudinary.com/dggc1f62t/video/upload/f_auto,q_auto/reel3_vbq5rp.mp4",
      link: "https://www.instagram.com/reel/DWbdK0fiIPN/",
    },
  ];

  return (
    <section className="w-full py-24 relative">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* LEFT SIDE */}
          <div className="lg:col-span-1">
            <p className="text-sm text-purple-400 mb-4 tracking-wider flex items-center gap-2">
              <FaBriefcase className="text-purple-400" />
              FEATURED WORK
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Projects that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
                deliver results.
              </span>
            </h2>

            <p className="mt-6 text-gray-400 text-sm leading-relaxed">
              Real projects. Real impact. Here's how I help brands turn ideas
              into content that performs.
            </p>

            {/* STATS */}
            <div className="mt-10 p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
              <div className="grid grid-cols-3 text-center gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400">
                    300k+
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">Total Views</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-400">
                    250%
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">Retention</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-400">30+</h3>
                  <p className="text-xs text-gray-400 mt-1">Clients</p>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <a
              href="https://drive.google.com/drive/folders/1ngk4aMMEA_ybt83agiTgRwLzatlVP__U?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white hover:scale-105 transition inline-block"
            >
              View All Projects →
            </a>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
            {projects.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl overflow-hidden border border-white/5 hover:border-purple-500/40 transition block"
              >
                {/* VIDEO */}
                <div className="relative h-full overflow-hidden">
                  <video
                    src={item.video}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    style={{
                      filter: `blur(${blurAmount}px) brightness(${dimOpacity})`,
                    }}
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition"></div>

                  {/* TAG */}
                  <span className="absolute bottom-3 left-3 text-xs px-3 py-1 bg-black/60 rounded-full text-purple-300">
                    {item.tag}
                  </span>

                  {/* VIEWS */}
                  <span className="absolute top-3 left-3 text-xs px-3 py-1 bg-black/60 rounded-full text-white">
                    👁 {item.views}
                  </span>

                  {/* WATCH BUTTON */}
                  <span className="absolute bottom-3 right-3 text-xs px-3 py-1 bg-black/60 rounded-full text-white group-hover:bg-purple-500 transition">
                    Watch Full Reel →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
