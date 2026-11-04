import MotionFade from "../components/MotionFade";
import { useTranslation } from "../hooks/useTranslation";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="w-full px-6">
      <div className="max-w-7xl mx-auto">
        <MotionFade>
          <div className="text-center py-10">
            <h2 className="text-3xl font-bold text-white mb-4">{t.contact.title}</h2>
            <a
              href="mailto:miguel@miguelnwafor.com.br"
              className="inline-block px-10 py-4 rounded-full border border-purple-500 text-purple-400 text-base font-semibold hover:bg-purple-500/10 transition-colors"
            >
              {t.contact.cta} → miguel@miguelnwafor.com.br
            </a>
          </div>
        </MotionFade>
      </div>
    </div>
  );
}
