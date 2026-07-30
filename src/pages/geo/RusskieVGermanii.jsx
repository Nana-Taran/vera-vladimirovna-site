import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const TG = 'https://t.me/Vera_vladimerovna';

export default function RusskieVGermanii() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Ясновидящая для русских в Германии — Вера Владимировна</title>
        <meta name="description" content="Онлайн-консультация ясновидящей для русскоязычных в Германии. 35 лет практики. Таро, ясновидение, помощь в отношениях. Конфиденциально." />
        <link rel="canonical" href="https://veravladimirovna.com/russkie-v-germanii" />
        <meta property="og:title" content="Ясновидящая для русских в Германии — Вера Владимировна" />
        <meta property="og:description" content="Онлайн-консультация ясновидящей для русскоязычных в Германии. 35 лет практики." />
        <meta property="og:url" content="https://veravladimirovna.com/russkie-v-germanii" />
        <meta property="og:image" content="https://veravladimirovna.com/images/og-vera.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ясновидящая для русских в Германии — Вера Владимировна" />
        <meta name="twitter:description" content="Онлайн-консультация ясновидящей для русскоязычных в Германии. 35 лет практики." />
      </Helmet>
      <noscript>
        Вера Владимировна — ясновидящая онлайн для русскоязычных в Германии. 35 лет практики, потомственный дар. Таро, ясновидение, помощь в отношениях, снятие негативных влияний. Работает дистанционно с клиентами по всей Европе. Конфиденциально, без давления.
      </noscript>
      <Navbar />
      <section className="pt-32 pb-16 px-4" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-montserrat font-semibold text-xs uppercase mb-4" style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}>
              ★ ГЕРМАНИЯ
            </p>
            <h1 className="font-bebas leading-none mb-4" style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 54px)' }}>
              ЯСНОВИДЯЩАЯ ОНЛАЙН<br />ДЛЯ РУССКИХ В ГЕРМАНИИ
            </h1>
            <p className="font-lobster mb-8" style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}>
              Вера Владимировна работает с вами — где бы вы ни находились.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-[900px] mx-auto space-y-5 font-lato text-base leading-relaxed" style={{ color: 'var(--text-beige)', fontWeight: 300 }}>
          <p>Германия — дом для самой большой русскоязычной диаспоры в Европе. Берлин, Мюнхен, Франкфурт и десятки других городов давно стали местом, где живут тысячи людей, для которых родной язык остался родным, даже если всё остальное изменилось. Но именно в этой большой общине легко потеряться с личным вопросом — про отношения, про важное решение, про ощущение, что что-то идёт не так, а объяснить это некому.</p>
          <p>Вера Владимировна работает онлайн с русскоязычными клиентами по всей Германии уже много лет. Через потомственное ясновидение и карты Таро она видит ситуацию целиком — прошлое, настоящее и то, к чему всё идёт — и говорит об этом честно, без общих фраз и без давления. 35 лет практики и духовная работа у Стены Плача в Иерусалиме стоят за каждым разбором.</p>
          <p>Расстояние между Германией и остальным миром не имеет значения — вся работа проходит через Telegram или WhatsApp, конфиденциально и в удобном для вас темпе. Напишите — и получите честный взгляд на вашу ситуацию.</p>
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
