import { FaBolt, FaLocationDot, FaBriefcase } from "react-icons/fa6";
export default function ThirdSection() {
  return (
    <section className="w-full relative">
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="mb-16 max-w-xl">
          <p className="text-sm text-purple-400 tracking-wider mb-4 flex items-center gap-2">
            <FaLocationDot className="text-purple-400" />
            MY JOURNEY
          </p>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            From phone editing <br />
            to pro level skills.
          </h2>

          <p className="mt-6 text-gray-400">
            Started with basic mobile editing and evolved into a full
            professional workflow with storytelling, color, audio and AI.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* LINE */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent"></div>

          <div className="space-y-16">
            {/* 2023 */}
            <div className="flex items-start gap-10">
              <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black border border-purple-500 text-sm font-semibold">
                2023
              </div>

              <div className="flex-1 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
                <h3 className="text-xl font-medium mb-3">
                  Started Editing on Phone
                </h3>

                <p className="text-gray-400 mb-4">
                  Learned basics using InShot. Built foundation with simple
                  edits.
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                  <span>Cutting</span>
                  <span>•</span>
                  <span>Text</span>
                  <span>•</span>
                  <span>Music Sync</span>
                  <span>•</span>
                  <span>Transitions</span>
                </div>
              </div>
            </div>

            {/* 2025 */}
            <div className="flex items-start gap-10">
              <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black border border-purple-500 text-sm font-semibold">
                2025
              </div>

              <div className="flex-1 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
                <h3 className="text-xl font-medium mb-3">
                  Skill Growth & Creative Control
                </h3>

                <p className="text-gray-400 mb-4">
                  Focused on storytelling, color grading and engaging edits.
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                  <span>Storytelling</span>
                  <span>•</span>
                  <span>Color</span>
                  <span>•</span>
                  <span>Audio</span>
                  <span>•</span>
                  <span>Pacing</span>
                  <span>•</span>
                  <span>Hooks</span>
                </div>
              </div>
            </div>

            {/* 2026 */}
            <div className="flex items-start gap-10">
              <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black border border-purple-500 text-sm font-semibold">
                2026
              </div>

              <div className="flex-1 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
                <h3 className="text-xl font-medium mb-3">
                  Professional Editing (Premiere Pro)
                </h3>

                <p className="text-gray-400 mb-4">
                  Shifted to pro workflow with advanced editing and AI tools.
                </p>

                <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                  <span>Multi-layer Editing</span>
                  <span>•</span>
                  <span>Advanced Cuts</span>
                  <span>•</span>
                  <span>AI Tools</span>
                  <span>•</span>
                  <span>Export Workflow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
