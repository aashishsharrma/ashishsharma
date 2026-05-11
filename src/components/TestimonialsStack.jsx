import { useState } from "react";
import { Heart } from "lucide-react";
import {
  MessageSquare,
  Star,
  Smile,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const reviews = [
  { id: 1, image: "/reviews/review1.png" },
  { id: 2, image: "/reviews/review2.png" },
  { id: 3, image: "/reviews/review3.png" },
];

export default function TestimonialsStackPro() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="w-full relative overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center">
          {/* LEFT */}
          <div>
            <p className="flex items-center gap-2 text-purple-400 text-sm tracking-wider mb-4">
              <Heart className="w-4 h-4 text-purple-400 fill-purple-400" />
              CLIENT LOVE
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
              Real words from <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                real people.
              </span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-md">
              Screenshots of genuine WhatsApp messages from clients <br /> who
              loved working together.
            </p>

            {/* STATS */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <MessageSquare className="text-purple-400 w-6 h-6" />
                <div>
                  <p className="text-white text-lg font-medium">30+</p>
                  <p className="text-gray-400 text-sm">Happy Clients</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Star className="text-purple-400 w-6 h-6" />
                <div>
                  <p className="text-white text-lg font-medium">4.9/5</p>
                  <p className="text-gray-400 text-sm">Average Rating</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Smile className="text-purple-400 w-6 h-6" />
                <div>
                  <p className="text-white text-lg font-medium">100%</p>
                  <p className="text-gray-400 text-sm">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/919336002651?text=${encodeURIComponent(
                "Hi, I saw your portfolio and want to discuss a project",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-lg hover:scale-105 transition inline-block"
            >
              Work Together →
            </a>
          </div>

          {/* RIGHT STACK */}
          <div className="relative flex justify-center items-center h-[220px] overflow-visible">
            {reviews.map((item, i) => {
              const position = (i - index + reviews.length) % reviews.length;

              return (
                <div
                  key={item.id}
                  onClick={next}
                  className={`
          absolute cursor-pointer transition-all duration-500 ease-in-out
          ${position === 0 ? "z-30 scale-100 rotate-0 opacity-100" : ""}
          ${position === 1 ? "z-20 scale-95 translate-x-6 translate-y-6 rotate-[-6deg] opacity-70" : ""}
          ${position === 2 ? "z-10 scale-90 translate-x-12 translate-y-12 rotate-[6deg] opacity-50" : ""}
          ${position > 2 ? "opacity-0" : ""}
        `}
                >
                  <div className="w-[350px] md:w-[450px] lg:w-[600px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur shadow-[0_0_80px_rgba(168,85,247,0.25)]">
                    <img
                      src={item.image}
                      alt="review"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              );
            })}

            {/* LEFT ARROW (CENTERED) */}
            <button
              onClick={prev}
              className="absolute left-1/2 -translate-x-[360px] md:-translate-x-[460px] lg:-translate-x-[390px] top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>

            {/* RIGHT ARROW (CENTERED) */}
            <button
              onClick={next}
              className="absolute left-1/2 translate-x-[360px] md:translate-x-[460px] lg:translate-x-[345px] top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
