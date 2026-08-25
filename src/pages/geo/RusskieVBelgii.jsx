import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const TG = 'https://t.me/Vera_vladimerovna';

export default function RusskieVBelgii() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Ясновидящая для русских в Бельгии — Вера Владимировна</title>
        <meta name="description" content="Онлайн-консультация ясновидящей для русскоязычных в Бельгии. 35 лет практики. Таро, ясновидение, диагностика ситуации." />
        <link rel="canonical" href="https://veravladimirovna.com/russkie-v-belgii" />
        <meta property="og:title" content="Ясновидящая для русских в Бельгии — Вера Владимировна" />
        <meta property="og:description" content="Онлайн-консультация ясновидящей для русскоязычных в Бельгии. 35 лет практики." />
        <meta property="og:url" content="https://veravladimirovna.com/russkie-v-belgii" />
        <meta property="og:image" content="https://veravladimirovna.com/images/hero/vera-hero-banner.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ясновидящая для русских в Бельгии — Вера Владимировна" />
        <meta name="twitter:description" content="Онлайн-консультация ясновидящей для русскоязычных в Бельгии. 35 лет практики." />
      </Helmet>
      <noscript>
        Вера Владимировна — ясновидящая онлайн для русскоязычных в Бельгии. 35 лет практики, потомственный дар. Таро, ясновидение, диагностика ситуации, снятие негативных влияний. Работает дистанционно с клиентами по всей Европе. Конфиденциально, без давления.
      </noscript>
      <Navbar />
      <section className="pt-32 pb-16 px-4" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-montserrat font-semibold text-xs uppercase mb-4" style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}>
              ★ БЕЛЬГИЯ
            </p>
            <h1 className="font-bebas leading-none mb-4" style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 54px)' }}>
              ЯСНОВИДЯЩАЯ ОНЛАЙН<br />ДЛЯ РУССКИХ В БЕЛЬГИИ
            </h1>
            <p className="font-lobster mb-8" style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}>
              Брюссель, Антверпен — где бы вы ни были, разговор начинается с одного сообщения.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-[900px] mx-auto space-y-5 font-lato text-base leading-relaxed" style={{ color: 'var(--text-beige)', fontWeight: 300 }}>
          <p>Бельгия — страна перекрёстков, где встречаются языки, культуры и судьбы. Брюссель и Антверпен полны международной жизни, но именно в этой смеси легко потерять ощущение, что тебя понимают по-настоящему — без перевода, без упрощения, на родном языке и с пониманием контекста, из которого вы уехали.</p>
          <p>Вера Владимировна работает с клиентами из разных стран Европы уже много лет. Через ясновидение и Таро она видит вашу ситуацию — в отношениях, в работе, в семье — и говорит честно, что происходит и чего реально ожидать. Без запугивания, без давления, с уважением к вашему времени и вашей истории.</p>
          <p>Работа проходит полностью онлайн — через Telegram или WhatsApp. Напишите, когда будете готовы обсудить, что происходит.</p>
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
