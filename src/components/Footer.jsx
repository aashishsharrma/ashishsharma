import { FiMessageCircle } from "react-icons/fi";
import {
  Phone,
  Mail,
  Clock,
  Rocket,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto ">

        {/* TOP CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur mb-12">
          <div>
            <h3 className="text-xl md:text-2xl text-white font-semibold">
              Let’s create content that stands out.
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Get real strategies, editing tips & growth insights.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://wa.me/919336002651"
              target="_blank"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white flex items-center gap-2 hover:scale-105 transition"
            >
              <Rocket className="w-4 h-4" />
              Get Free Strategy →
            </a>
          </div>
        </div>

        {/* MAIN */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Prysmatic <span className="text-purple-400">Media</span>
            </h2>

            <p className="text-gray-400 mt-4 text-sm">
              We create engaging, story-driven edits that help creators
              and brands grow faster.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">

              {/* YOUTUBE */}
              <a className="p-2 bg-white/10 rounded-full hover:bg-white/20">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.7 3.5 12 3.5 12 3.5s-7.7 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.7.6 9.4.6 9.4.6s7.7 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a className="p-2 bg-white/10 rounded-full hover:bg-white/20">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5C18.01 4 20 5.99 20 7.75v8.5c0 1.76-1.99 3.75-3.75 3.75h-8.5C5.99 20 4 18.01 4 16.25v-8.5C4 5.99 5.99 4 7.75 4zm8.75 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
              </a>

              {/* LINKEDIN */}
              <a className="p-2 bg-white/10 rounded-full hover:bg-white/20">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM.22 8h4.52v12H.22V8zM7.73 8h4.33v1.64h.06c.6-1.14 2.07-2.34 4.27-2.34 4.56 0 5.4 3 5.4 6.9V20h-4.52v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V20H7.73V8z"/>
                </svg>
              </a>

              {/* FACEBOOK */}
              <a className="p-2 bg-white/10 rounded-full hover:bg-white/20">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9v-2.9h2.6V9.4c0-2.6 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5v1.8h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Work</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-medium mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>YouTube Editing</li>
              <li>Short Form Editing</li>
              <li>Reels & TikToks</li>
              <li>Podcast Editing</li>
              <li>Color Grading</li>
              <li>Audio Enhancement</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-medium mb-4">Let’s Connect</h4>

            <div className="space-y-4 text-gray-400 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="text-purple-400 w-4 h-4" />
                <span>9336002651</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-purple-400 w-4 h-4" />
                <span>aashishsharrma.in@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FiMessageCircle className="text-purple-400 w-4 h-4" />
                <span>Ready to Work Together</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <p>© 2026 Prysmatic Media. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}