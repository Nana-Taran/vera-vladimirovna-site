import { Send, Phone, MessageSquare, Camera } from 'lucide-react';

const navLinks = [
  { label: 'Услуги', href: '#services' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

const socials = [
  { icon: <Camera size={18} />, href: '#', label: 'Instagram' },
  { icon: <Send size={18} />, href: '#', label: 'Telegram' },
  { icon: <Phone size={18} />, href: '#', label: 'WhatsApp' },
  { icon: <MessageSquare size={18} />, href: '#', label: 'Viber' },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.77 1.53V6.77a4.85 4.85 0 01-1-.08z" />
      </svg>
    ),
    href: '#',
    label: 'TikTok',
  },
];

export default function Footer() {
  return (
    <footer
      className="relative py-12 px-4"
      style={{
        background: 'var(--bg-deep)',
        borderTop: '1px solid rgba(232,102,23,0.15)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="font-lobster text-2xl mb-3" style={{ color: 'var(--accent)' }}>
              Вера Владимировна
            </div>
            <p className="font-lato text-sm leading-relaxed" style={{ color: 'var(--text-beige)', fontWeight: 300, maxWidth: '220px' }}>
              Ясновидящая · Таролог · Экстрасенс
              <br />
              35 лет практики · 12 стран
            </p>
          </div>
          <div>
            <p className="font-montserrat font-semibold text-xs uppercase mb-4" style={{ color: 'var(--accent)', letterSpacing: '0.15em' }}>
              Навигация
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-montserrat text-sm transition-colors hover:opacity-80" style={{ color: 'var(--text-beige)' }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-montserrat font-semibold text-xs uppercase mb-4" style={{ color: 'var(--accent)', letterSpacing: '0.15em' }}>
              Мессенджеры
            </p>
            <div className="flex gap-3 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                  style={{ border: '1px solid rgba(232,102,23,0.3)', color: 'var(--text-beige)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(232,102,23,0.1)' }}>
          <p className="font-lato text-xs" style={{ color: 'var(--text-beige)', fontWeight: 300 }}>
            © 2026 Вера Владимировна · Все права защищены
          </p>
          <a href="/privacy" className="font-lato text-xs transition-colors hover:opacity-80" style={{ color: 'var(--text-beige)', fontWeight: 300 }}>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
