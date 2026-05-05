import MotionFade from "../components/MotionFade";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  return (
    <div id="contact" className="w-full py-32 bg-black text-gray-300">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <MotionFade>
          <SectionTitle title="Contact" />

          <p className="text-lg mb-8">
            Let’s work together to build something cinematic and intelligent.
          </p>

          <a
            href="mailto:miguel@mfn.dev"
            className="inline-block px-10 py-4 rounded-xl border border-purple-500 text-purple-400 text-lg hover:bg-purple-500/10 transition"
          >
            Send Email
          </a>
        </MotionFade>
      </div>
    </div>
  );
}