import MotionFade from "../components/MotionFade";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <div id="about" className="w-full py-32 bg-black text-gray-300">
      <div className="max-w-5xl mx-auto px-6">
        <MotionFade>
          <SectionTitle title="About Me" />

          <p className="text-lg leading-relaxed mb-6">
            I am Miguel Fredman Nwafor, a Creative Technologist and High End Digital Builder
            with more than 20 years of experience creating digital products, motion visuals,
            web architecture, and high performance interfaces that connect technology and aesthetics.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Throughout my career I worked with leading companies such as Google, Red Bull,
            Shell, Ambev, XP Investments, and many others across Latin America, the US,
            Australia, and Europe.
          </p>

          <p className="text-lg leading-relaxed">
            Today I combine strategy, engineering, and cinematographic design to build modern
            experiences that elevate brands worldwide.
          </p>
        </MotionFade>
      </div>
    </div>
  );
}