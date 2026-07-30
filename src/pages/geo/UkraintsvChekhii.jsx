import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const TG = 'https://t.me/Vera_vladimerovna';

export default function UkraintsvChekhii() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Ясновидящая для украинцев в Чехии — Вера Владимировна</title>
        <meta name="description" content="Онлайн-консультация ясновидящей для украинцев в Чехии. 35 лет практики. Таро, ясновидение, тёплая поддержка на родном языке." />
        <link rel="canonical" href="https://veravladimirovna.com/ukraintsy-v-chekhii" />
        <meta property="og:title" content="Ясновидящая для украинцев в Чехии — Вера Владимировна" />
        <meta property="og:description" content="Онлайн-консультация ясновидящей для украинцев в Чехии. 35 лет практики." />
        <meta property="og:url" content="https://veravladimirovna.com/ukraintsy-v-chekhii" />
        <meta property="og:image" content="https://veravladimirovna.com/images/og-vera.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ясновидящая для украинцев в Чехии — Вера Владимировна" />
        <meta name="twitter:description" content="Онлайн-консультация ясновидящей для украинцев в Чехии. 35 лет практики." />
      </Helmet>
      <noscript>
        Вера Владимировна — ясновидящая онлайн для украинцев в Чехии. 35 лет практики, потомственный дар. Таро, ясновидение, помощь в отношениях, поддержка в трудный период. Работает дистанционно, тепло и без запугивания. Конфиденциально.
      </noscript>
      <Navbar />
      <section className="pt-32 pb-16 px-4" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-montserrat font-semibold text-xs uppercase mb-4" style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}>
              ★ ЧЕХИЯ
            </p>
            <h1 className="font-bebas leading-none mb-4" style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 54px)' }}>
              ЯСНОВИДЯЩАЯ ОНЛАЙН<br />ДЛЯ УКРАИНЦЕВ В ЧЕХИИ
            </h1>
            <p className="font-lobster mb-8" style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}>
              Прага и большая украинская община — но личный вопрос лучше обсудить один на один.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-[900px] mx-auto space-y-5 font-lato text-base leading-relaxed" style={{ color: 'var(--text-beige)', fontWeight: 300 }}>
          <p>Чехия — один из крупнейших центров украинской диаспоры в Европе, Прага давно стала домом для тысяч семей. Но даже в самой большой общине личные вопросы — про отношения, про важные решения, про тревогу за будущее — остаются личными, и обсудить их откровенно получается не всегда.</p>
          <p>Вера Владимировна работает онлайн с украинцами по всей Европе уже 35 лет. Через ясновидение и карты Таро она смотрит вашу ситуацию честно, без запугивания и без лишних обещаний — с теплом и уважением к тому, что вы пережили.</p>
          <p>Напишите в Telegram или WhatsApp — Вера ответит внимательно, на родном языке.</p>
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
