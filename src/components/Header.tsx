import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useTranslation();
  const nav = t?.nav || { home: 'Home', about: 'About', experience: 'Experience', skills: 'Skills', projects: 'Projects', contact: 'Contact', connect: "Let's Connect" };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
            <span className="text-black font-black text-sm tracking-tighter">MN</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-white font-semibold text-sm">Miguel Nwafor</div>
            <div className="text-gray-400 text-xs">Technology, Product & AI</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-gray-400">
          <a href="#home" className="hover:text-white transition-colors">{nav.home}</a>
          <a href="#about" className="hover:text-white transition-colors">{nav.about}</a>
          <a href="#experience" className="hover:text-white transition-colors">{nav.experience}</a>
          <a href="#skills" className="hover:text-white transition-colors">{nav.skills}</a>
          <a href="#projects" className="hover:text-white transition-colors">{nav.projects}</a>
          <a href="#contact" className="hover:text-white transition-colors">{nav.contact}</a>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 border border-white/10 rounded-full px-3 py-1.5">
            <button type="button" onClick={() => setLang('pt')} className={lang === 'pt' ? 'text-white text-sm' : 'text-gray-500 hover:text-gray-300 text-sm'}>🇧🇷 PT</button>
            <span className="text-gray-600 text-xs">|</span>
            <button type="button" onClick={() => setLang('en')} className={lang === 'en' ? 'text-white text-sm' : 'text-gray-500 hover:text-gray-300 text-sm'}>🇺🇸 EN</button>
          </div>
          <a href="#contact" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
            {nav.connect} →
          </a>
        </div>

        <button type="button" className="lg:hidden text-white text-xl" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-black/90 px-6 py-4 flex flex-col gap-1">
          {(['home','about','experience','skills','projects','contact'] as const).map((key) => (
            <a key={key} href={'#' + key} className="py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>
              {nav[key]}
            </a>
          ))}
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10">
            <button type="button" onClick={() => { setLang('pt'); setOpen(false); }} className={lang === 'pt' ? 'text-white text-sm' : 'text-gray-500 text-sm'}>🇧🇷 PT</button>
            <span className="text-gray-600">|</span>
            <button type="button" onClick={() => { setLang('en'); setOpen(false); }} className={lang === 'en' ? 'text-white text-sm' : 'text-gray-500 text-sm'}>🇺🇸 EN</button>
          </div>
          <a href="#contact" onClick={() => setOpen(false)} className="mt-3 text-center bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
            {nav.connect}
          </a>
        </div>
      )}
    </header>
  );
}
