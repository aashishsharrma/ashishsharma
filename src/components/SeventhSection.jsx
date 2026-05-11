import { TrendingUp } from "lucide-react";
import {
  Rocket,
  Zap,
  Smartphone,
  Target,
  MessageCircle,
  ShieldCheck,
  Calendar,
} from "lucide-react";

export default function SeventhSection() {
  return (
    <section className="w-full py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* TAG */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/[0.08] bg-white/[0.04] text-sm text-purple-300 mb-8">
          <Rocket className="w-4 h-4" />
          LET'S WORK TOGETHER
        </div>

        {/* HEADING */}
        <h2 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">
          Let’s turn your content into <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            attention-grabbing videos.
          </span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          If you're serious about growth, consistency, and results —
          <span className="text-purple-400">
            {" "}
            Ready to grow your content? <br /> Let’s start today.
          </span>
        </p>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* CARD */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-left hover:bg-white/[0.05] transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/20 mb-4">
              <Zap className="text-purple-400" />
            </div>
            <h3 className="text-lg font-medium text-white">Fast Delivery</h3>
            <p className="text-gray-400 text-sm mt-2">
              Quick turnaround without compromising on quality.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-left hover:bg-white/[0.05] transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/20 mb-4">
              <Smartphone className="text-purple-400" />
            </div>
            <h3 className="text-lg font-medium text-white">
              Platform Optimized
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Edits tailored for YouTube, Facebook, Instagram & more.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-left hover:bg-white/[0.05] transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/20 mb-4">
              <Target className="text-purple-400" />
            </div>
            <h3 className="text-lg font-medium text-white">Results Focused</h3>
            <p className="text-gray-400 text-sm mt-2">
              Story-driven edits that increase engagement & results.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10">
          {/* BUTTON 1 */}
          <a
            href={`https://wa.me/919336002651?text=${encodeURIComponent(
              "Hi, I saw your portfolio and want to discuss a project",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-lg shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:scale-105 transition"
          >
            <Rocket className="w-5 h-5" />
            Start a Project →
          </a>

          {/* BUTTON 2 */}
          <a
            href={`https://wa.me/919336002651?text=${encodeURIComponent(
              "Hi, I saw your portfolio and want to discuss a project",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
          >
            <MessageCircle className="w-5 h-5 text-purple-400" />
            Chat on WhatsApp
          </a>
        </div>

        {/* TRUST */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-left items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/100?img=11"
                className="w-10 h-10 rounded-full border-2 border-[#0b0b1f]"
              />
              <img
                src="https://i.pravatar.cc/100?img=12"
                className="w-10 h-10 rounded-full border-2 border-[#0b0b1f]"
              />
              <img
                src="https://i.pravatar.cc/100?img=13"
                className="w-10 h-10 rounded-full border-2 border-[#0b0b1f]"
              />
            </div>
            <div>
              <p className="text-white text-sm font-medium">
                50+ happy clients
              </p>
              <p className="text-yellow-400 text-xs">★★★★★ 4.9/5 rating</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ShieldCheck className="text-purple-400" />
            <div>
              <p className="text-white text-sm font-medium">
                Reliable & Professional
              </p>
              <p className="text-gray-400 text-xs">
                Clear communication. On-time delivery.
              </p>
            </div>
          </div>

          {/* ✅ ONLY FIX APPLIED HERE */}
          <div className="flex items-center gap-4 ">
            <TrendingUp className="text-purple-400" />
            <div>
              <p className="text-white text-sm font-medium">
                Performance-driven content
              </p>
              <p className="text-gray-400 text-xs">
                Edits built to maximize engagement & retention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
