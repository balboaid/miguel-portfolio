import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useTranslation();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/experience', label: t.nav.experience },
    { path: '/skills', label: t.nav.skills },
    { path: '/projects', label: t.nav.projects },
    { path: '/testimonials', label: t.nav.testimonials },
    { path: '/contact', label: t.nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  const btnClass = (active: boolean) =>
    'flex items-center gap-1.5 text-sm font-medium transition-colors ' +
    (active ? 'text-white' : 'text-gray-500 hover:text-gray-300');

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
            <span className="text-black font-black text-sm tracking-tighter">MN</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="text-white font-semibold text-sm">Miguel Nwafor</div>
            <div className="text-gray-400 text-xs">Technology, Product & AI</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-gray-400">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-white transition-colors ${isActive(item.path) ? 'text-white border-b border-purple-500 pb-1' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 border border-white/10 rounded-full px-3 py-1.5">
            <button type="button" onClick={() => setLang('pt')} className={btnClass(lang === 'pt')} aria-pressed={lang === 'pt'}>🇧🇷 PT</button>
            <span className="text-gray-600 text-xs">|</span>
            <button type="button" onClick={() => setLang('en')} className={btnClass(lang === 'en')} aria-pressed={lang === 'en'}>🇺🇸 EN</button>
          </div>
          <Link to="/contact" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
            {t.nav.connect} →
          </Link>
        </div>

        <button type="button" className="lg:hidden text-white text-xl w-8 h-8 flex items-center justify-center" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/5 bg-black/90 px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10">
            <button type="button" onClick={() => { setLang('pt'); setOpen(false); }} className={btnClass(lang === 'pt')}><span>🇧🇷</span> PT</button>
            <span className="text-gray-600">|</span>
            <button type="button" onClick={() => { setLang('en'); setOpen(false); }} className={btnClass(lang === 'en')}><span>🇺🇸</span> EN</button>
          </div>
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-3 text-center bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
            {t.nav.connect}
          </Link>
        </div>
      )}
    </header>
  );
}