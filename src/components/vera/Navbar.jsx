import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Главная', to: '/' },
  { label: 'Обо мне', to: '/o-mne' },
  { label: 'Все услуги', to: '/uslugi' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Контакты', to: '/kontakty' },
];

const TG = 'https://t.me/Vera_vladimerovna';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(9,6,4,0.97)' : 'rgba(9,6,4,0.55)',
        backdropFilter: 'blur(8px)',
        borderBottom: scrolled ? '1px solid rgba(232,102,23,0.25)' : '1px solid rgba(232,102,23,0.12)',
      }}
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="font-lobster transition-opacity hover:opacity-80" style={{ color: 'var(--accent-bright)', fontSize: '28px' }}>
            Вера Владимировна
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.to === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-montserrat text-xs font-semibold uppercase tracking-widest transition-colors hover:opacity-80"
                  style={{
                    color: isActive ? 'var(--accent)' : 'var(--text-beige)',
                    letterSpacing: '0.15em',
                    borderBottom: isActive ? '1px solid var(--accent)' : '1px solid transparent',
                    paddingBottom: '2px',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={TG}
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-xs font-semibold px-4 py-2 rounded transition-all hover:opacity-80"
              style={{ border: '1px solid var(--accent)', color: 'var(--accent)', letterSpacing: '0.1em' }}
            >
              Написать ▾
            </a>
            <a
              href={TG}
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-xs font-bold px-4 py-2 rounded transition-all hover:opacity-90"
              style={{ background: 'var(--accent)', color: 'var(--bg-deep)', letterSpacing: '0.05em' }}
            >
              Оставить заявку
            </a>
          </div>
          <button
            className="lg:hidden p-2"
            style={{ color: 'var(--accent)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden"
            style={{ background: 'rgba(9,6,4,0.98)', borderTop: '1px solid rgba(232,102,23,0.2)' }}
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = link.to === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.to);
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="font-montserrat text-sm font-semibold uppercase tracking-widest py-2"
                    style={{
                      color: isActive ? 'var(--accent)' : 'var(--text-beige)',
                      borderBottom: '1px solid rgba(232,102,23,0.1)',
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href={TG}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="font-montserrat text-sm font-bold py-3 text-center rounded"
                  style={{ background: 'var(--accent)', color: 'var(--bg-deep)' }}
                >
                  Оставить заявку
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
