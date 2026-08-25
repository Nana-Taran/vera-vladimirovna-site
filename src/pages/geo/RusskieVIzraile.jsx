import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const TG = 'https://t.me/Vera_vladimerovna';

export default function RusskieVIzraile() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Ясновидящая для русских в Израиле — Вера Владимировна</title>
        <meta name="description" content="Онлайн-консультация ясновидящей для русскоязычных в Израиле. 35 лет практики. Молитвенная работа у Стены Плача в Иерусалиме." />
        <link rel="canonical" href="https://veravladimirovna.com/russkie-v-izraile" />
        <meta property="og:title" content="Ясновидящая для русских в Израиле — Вера Владимировна" />
        <meta property="og:description" content="Онлайн-консультация ясновидящей для русскоязычных в Израиле. 35 лет практики." />
        <meta property="og:url" content="https://veravladimirovna.com/russkie-v-izraile" />
        <meta property="og:image" content="https://veravladimirovna.com/images/hero/vera-hero-banner.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ясновидящая для русских в Израиле — Вера Владимировна" />
        <meta name="twitter:description" content="Онлайн-консультация ясновидящей для русскоязычных в Израиле. 35 лет практики." />
      </Helmet>
      <noscript>
        Вера Владимировна — ясновидящая онлайн для русскоязычных в Израиле. 35 лет практики, потомственный дар. Регулярно бывает у Стены Плача в Иерусалиме и ведёт там молитвенную практику за своих клиентов. Таро, ясновидение, помощь в отношениях. Конфиденциально, без давления.
      </noscript>
      <Navbar />
      <section className="pt-32 pb-16 px-4" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-montserrat font-semibold text-xs uppercase mb-4" style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}>
              ★ ИЗРАИЛЬ
            </p>
            <h1 className="font-bebas leading-none mb-4" style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 54px)' }}>
              ЯСНОВИДЯЩАЯ ОНЛАЙН<br />ДЛЯ РУССКИХ В ИЗРАИЛЕ
            </h1>
            <p className="font-lobster mb-8" style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}>
              Земля, которая для Веры значит особенно много — рядом со Стеной Плача.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-[900px] mx-auto space-y-5 font-lato text-base leading-relaxed" style={{ color: 'var(--text-beige)', fontWeight: 300 }}>
          <p>Израиль занимает особое место в работе Веры Владимировны — она регулярно бывает у Стены Плача в Иерусалиме и ведёт там молитвенную практику за своих клиентов. Для русскоязычных жителей Израиля это не абстрактный образ, а часть повседневной реальности — и Вера понимает эту связь как никто другой.</p>
          <p>35 лет практики, потомственное ясновидение и работа с картами Таро — Вера смотрит вашу ситуацию честно и без прикрас, будь то вопросы отношений, важных решений или ощущения, что что-то не так. Клиенты из Израиля могут попросить включить свою ситуацию в её молитвенную практику у Стены Плача — это доступно всем, кто обращается.</p>
          <p>Напишите в Telegram или WhatsApp — расскажите, что происходит, и получите честный, тёплый ответ.</p>
          <div className="pt-6">
            <a href={TG} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-montserrat font-bold text-sm px-6 py-3 rounded-xl transition-all hover:opacity-90"
              style={{ background: 'var(--accent)', color: 'var(--bg-deep)', letterSpacing: '0.08em' }}>
              Написать в Telegram →
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
