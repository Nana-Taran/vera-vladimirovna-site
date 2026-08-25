import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

const TG = 'https://t.me/Vera_vladimerovna';

export default function RusskieVAvstralii() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Ясновидящая для русских в Австралии — Вера Владимировна</title>
        <meta name="description" content="Онлайн-консультация ясновидящей для русскоязычных в Австралии. 35 лет практики. Таро, ясновидение, честный взгляд на ситуацию." />
        <link rel="canonical" href="https://veravladimirovna.com/russkie-v-avstralii" />
        <meta property="og:title" content="Ясновидящая для русских в Австралии — Вера Владимировна" />
        <meta property="og:description" content="Онлайн-консультация ясновидящей для русскоязычных в Австралии. 35 лет практики." />
        <meta property="og:url" content="https://veravladimirovna.com/russkie-v-avstralii" />
        <meta property="og:image" content="https://veravladimirovna.com/images/hero/vera-hero-banner.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ясновидящая для русских в Австралии — Вера Владимировна" />
        <meta name="twitter:description" content="Онлайн-консультация ясновидящей для русскоязычных в Австралии. 35 лет практики." />
      </Helmet>
      <noscript>
        Вера Владимировна — ясновидящая онлайн для русскоязычных в Австралии. 35 лет практики, потомственный дар. Таро, ясновидение, помощь в отношениях, снятие негативных влияний. Работает дистанционно, независимо от разницы часовых поясов. Конфиденциально, без давления.
      </noscript>
      <Navbar />
      <section className="pt-32 pb-16 px-4" style={{ background: 'var(--bg-deep)' }}>
        <div className="max-w-[900px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-montserrat font-semibold text-xs uppercase mb-4" style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}>
              ★ АВСТРАЛИЯ
            </p>
            <h1 className="font-bebas leading-none mb-4" style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 54px)' }}>
              ЯСНОВИДЯЩАЯ ОНЛАЙН<br />ДЛЯ РУССКИХ В АВСТРАЛИИ
            </h1>
            <p className="font-lobster mb-8" style={{ color: 'var(--accent)', fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3 }}>
              Сидней, Мельбурн или любой другой город — разница во времени не мешает разговору.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-16 px-4" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-[900px] mx-auto space-y-5 font-lato text-base leading-relaxed" style={{ color: 'var(--text-beige)', fontWeight: 300 }}>
          <p>Австралия — это разница в 7-11 часов почти со всем русскоязычным миром, что само по себе создаёт ощущение оторванности. Сидней и Мельбурн полны новых возможностей, но старые вопросы — про отношения, про решения, про то, что творится в жизни — никуда не исчезают вместе с переездом. Иногда наоборот, становятся острее в тишине нового дома.</p>
          <p>Вера Владимировна работает с клиентами по всему миру именно потому, что расстояние не влияет на глубину работы. Через ясновидение и Таро она видит вашу ситуацию так же ясно, как если бы вы были рядом — прошлое, настоящее и то, к чему всё идёт. 35 лет практики и потомственный дар позволяют ей говорить честно, без общих фраз и без давления.</p>
          <p>Достаточно написать в удобное для вас время — Вера подстроится под разницу часовых поясов и ответит обстоятельно, когда вы будете готовы прочитать.</p>
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
