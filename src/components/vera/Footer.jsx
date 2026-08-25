import { Send, Phone, MessageSquare } from 'lucide-react';

const navLinks = [
  { label: 'Услуги', href: '/#services' },
  { label: 'Обо мне', href: '/#about' },
  { label: 'Отзывы', href: '/#reviews' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Контакты', href: '/#contacts' },
];

const socials = [
  { icon: <Send size={18} />, href: 'https://t.me/Vera_vladimerovna', label: 'Telegram' },
  { icon: <Phone size={18} />, href: 'https://wa.me/995558314030', label: 'WhatsApp' },
  { icon: <MessageSquare size={18} />, href: 'viber://chat?number=%2B995558314030', label: 'Viber' },
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
      <div className="max-w-[1400px] mx-auto">
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
                  data-form-location="footer"
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
        <div className="mt-4 text-center" style={{ borderTop: '1px solid rgba(232,102,23,0.06)', paddingTop: '12px' }}>
          <p className="font-lato text-xs" style={{ color: 'rgba(200,180,160,0.35)', fontWeight: 300 }}>
            Сайт разработан агентством{' '}
            <a
              href="https://t.me/nana_taran"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-70"
              style={{ color: 'rgba(200,180,160,0.45)', textDecoration: 'underline', textUnderlineOffset: '2px' }}
            >
              NANO · Nana Taran
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
