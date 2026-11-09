import MotionFade from "../components/MotionFade";
import { useTranslation } from "../hooks/useTranslation";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="w-full px-6">
      <div className="max-w-7xl mx-auto">
        <MotionFade>
          <div className="text-center py-10">
            <h2 className="text-3xl font-bold text-white mb-4">{t.contact_page.title}</h2>
            <p className="text-lg text-gray-300 mb-6">
              Entre em contato para que possamos desenvolver projetos de tecnologia, engenharia de software, produtos digitais e IA aplicada.
            </p>
            <a
              href="mailto:miguel@miguelnwafor.com.br"
              className="inline-block px-10 py-4 rounded-full border border-purple-500 text-purple-400 text-base font-semibold hover:bg-purple-500/10 transition-colors"
            >
              {t.contact_page.cta} → miguel@miguelnwafor.com.br
            </a>
          </div>
        </MotionFade>
      </div>
    </div>
  );
}
