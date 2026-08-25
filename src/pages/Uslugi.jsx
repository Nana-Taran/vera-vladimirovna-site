import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';
import ServiceCardPremium from '@/components/vera/ServiceCardPremium';

const TG = 'https://t.me/Vera_vladimerovna';

const services = [
  // ── Ряд 1 ──
  {
    slug: '/yasnovidenie',
    cardImage: '/images/services/yasnovidenie-potomstvennoe.webp',
    imageSrc: '/images/services/yasnovidenie-potomstvennoe.webp',
    imagePosition: '72% center',
    eyebrow: 'ДУХОВНАЯ ПРАКТИКА',
    eyebrowIcon: 'eye',
    titleLine1: 'ПОТОМСТВЕННОЕ',
    titleLine2: 'ЯСНОВИДЕНИЕ',
    ribbon: 'ПРЯМОЙ ВЗГЛЯД НА СИТУАЦИЮ',
    description: 'Прямой взгляд на ситуацию — прошлое, настоящее и к чему ведёт происходящее. Без карт, без гаданий наугад.',
  },
  {
    slug: '/taro',
    cardImage: '/images/services/taro-i-diagnostika.webp',
    imageSrc: '/images/services/taro-i-diagnostika.webp',
    imagePosition: '60% center',
    eyebrow: 'ТОЧНЫЙ РАСКЛАД',
    eyebrowIcon: 'star',
    titleLine1: 'ТАРО И',
    titleLine2: 'ДИАГНОСТИКА',
    ribbon: 'ОТВЕТ НА ЛЮБОЙ ВОПРОС',
    description: 'Глубокий расклад на конкретный вопрос — отношения, работа, выбор, будущее. Чёткие ответы и рекомендации.',
  },
  {
    slug: '/gadanie',
    cardImage: '/images/services/gadanie-vse-vidy.webp',
    imageSrc: '/images/services/gadanie-vse-vidy.webp',
    imagePosition: '55% center',
    eyebrow: 'ТРАДИЦИОННЫЕ ПРАКТИКИ',
    eyebrowIcon: 'moon',
    titleLine1: 'ВСЕ ВИДЫ',
    titleLine2: 'ГАДАНИЯ',
    ribbon: 'ЧЁТКИЙ ОТВЕТ НА ВАШ ВОПРОС',
    description: 'Традиционные практики для чёткого ответа — будет ли, как лучше поступить, что происходит на самом деле.',
  },
  {
    slug: '/snyatie-negativa',
    cardImage: '/images/services/snyatie-negativa.webp',
    imageSrc: '/images/services/snyatie-negativa.webp',
    imagePosition: '60% center',
    eyebrow: 'ОЧИЩЕНИЕ И ЗАЩИТА',
    eyebrowIcon: 'zap',
    titleLine1: 'СНЯТИЕ',
    titleLine2: 'НЕГАТИВА',
    ribbon: 'ОЧИЩЕНИЕ · ЗАЩИТА · СПОКОЙСТВИЕ',
    description: 'Диагностика и работа по снятию негативных влияний. Сначала смотрю — есть ли воздействие. Потом предлагаю работу.',
  },
  {
    slug: '/lyubovnaya-magiya',
    cardImage: '/images/services/lyubovnaya-magiya.webp',
    imageSrc: '/images/services/lyubovnaya-magiya.webp',
    imagePosition: '65% center',
    eyebrow: 'ОТНОШЕНИЯ И ЧУВСТВА',
    eyebrowIcon: 'heart',
    titleLine1: 'ЛЮБОВНАЯ',
    titleLine2: 'МАГИЯ',
    ribbon: 'ГАРМОНИЯ В ОТНОШЕНИЯХ',
    description: 'Работа с ситуацией в паре — гармонизация, восстановление связи, помощь при расставании. Каждая ситуация индивидуальна.',
  },
  {
    slug: '/online-konsultaciya',
    cardImage: '/images/services/onlayn-konsultatsiya.webp',
    imageSrc: '/images/services/onlayn-konsultatsiya.webp',
    imagePosition: '60% center',
    eyebrow: 'ДИСТАНЦИОННАЯ РАБОТА',
    eyebrowIcon: 'wifi',
    titleLine1: 'ОНЛАЙН-',
    titleLine2: 'КОНСУЛЬТАЦИЯ',
    ribbon: 'ПОМОЩЬ, ГДЕ БЫ ВЫ НИ БЫЛИ',
    description: 'Вся работа онлайн — Telegram или WhatsApp. Полная конфиденциальность. Из любой страны мира.',
  },
  // ── Ряд 2 ──
  {
    slug: '/yasnovidenie',
    cardImage: '/images/services/diagnostika-situatsii.webp',
    imageSrc: '/images/services/diagnostika-situatsii.webp',
    imagePosition: '30% center',
    eyebrow: 'РАЗБОР СИТУАЦИИ',
    eyebrowIcon: 'eye',
    titleLine1: 'ДИАГНОСТИКА',
    titleLine2: 'СИТУАЦИИ',
    ribbon: 'УВИДЕТЬ ПРИЧИНУ ПРОИСХОДЯЩЕГО',
    description: 'Когда что-то происходит, но непонятна причина — Вера смотрит и объясняет что стоит за этим на самом деле.',
  },
  {
    slug: '/taro',
    cardImage: '/images/services/taro-na-otnosheniya.webp',
    imageSrc: '/images/services/taro-na-otnosheniya.webp',
    imagePosition: '40% top',
    eyebrow: 'РАСКЛАД НА ОТНОШЕНИЯ',
    eyebrowIcon: 'star',
    titleLine1: 'ТАРО НА',
    titleLine2: 'ОТНОШЕНИЯ',
    ribbon: 'ЧТО ДУМАЕТ ДРУГОЙ ЧЕЛОВЕК',
    description: 'Как другой человек думает и чувствует, какие намерения, куда идут отношения. Расклад на пару или конкретный вопрос.',
  },
  {
    slug: '/snyatie-negativa',
    cardImage: '/images/services/zashchita-i-obereg.webp',
    imageSrc: '/images/services/zashchita-i-obereg.webp',
    imagePosition: '40% center',
    eyebrow: 'ЛИЧНАЯ ЗАЩИТА',
    eyebrowIcon: 'shield',
    titleLine1: 'ЗАЩИТА И',
    titleLine2: 'ОБЕРЕГ',
    ribbon: 'ДИАГНОСТИКА И ЗАЩИТА',
    description: 'Если есть ощущение постороннего влияния, чужой зависти или повторяющихся трудностей — диагностика и работа по защите.',
  },
  {
    slug: '/lyubovnaya-magiya',
    cardImage: '/images/services/posle-rasstavaniya.webp',
    imageSrc: '/images/services/posle-rasstavaniya.webp',
    imagePosition: '40% center',
    eyebrow: 'СЛОЖНЫЕ СИТУАЦИИ',
    eyebrowIcon: 'heart',
    titleLine1: 'ПОСЛЕ',
    titleLine2: 'РАССТАВАНИЯ',
    ribbon: 'ОТПУСТИТЬ ИЛИ ВОССТАНОВИТЬ',
    description: 'Помочь отпустить или разобраться — стоит ли восстанавливать. Что происходит с другой стороны. Без ложных надежд.',
  },
  {
    slug: '/gadanie',
    cardImage: '/images/services/chto-proishodit-v-pare.webp',
    imageSrc: '/images/services/chto-proishodit-v-pare.webp',
    imagePosition: '40% top',
    eyebrow: 'РАБОТА С ПАРОЙ',
    eyebrowIcon: 'compass',
    titleLine1: 'ЧТО ПРОИСХОДИТ',
    titleLine2: 'В ПАРЕ',
    ribbon: 'УВИДЕТЬ РЕАЛЬНУЮ КАРТИНУ',
    description: 'Когда человек замолчал, отдалился или ведёт себя непонятно — важно сначала увидеть реальную картину.',
  },
  {
    slug: '/ierusalim',
    cardImage: '/images/services/stena-placha-ierusalim.webp',
    imageSrc: '/images/services/stena-placha-ierusalim.webp',
    imagePosition: '50% 20%',
    eyebrow: 'ДУХОВНАЯ ПРАКТИКА',
    eyebrowIcon: 'eye',
    titleLine1: 'СТЕНА ПЛАЧА',
    titleLine2: 'ИЕРУСАЛИМ',
    ribbon: 'МОЛИТВЕННАЯ РАБОТА',
    description: 'Вера регулярно бывает в Иерусалиме. Клиенты могут попросить включить их ситуацию в молитвенную практику у Стены Плача.',
  },
];

export default function Uslugi() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Все услуги — Вера Владимировна, ясновидящая</title>
        <meta
          name="description"
          content="Ясновидение, Таро, гадание, снятие негатива, любовная магия, диагностика ситуации — онлайн. Вера Владимировна, 35 лет практики, клиенты из 12+ стран."
        />
        <link rel="canonical" href="https://veravladimirovna.com/uslugi" />
        <meta property="og:title" content="Все услуги — Вера Владимировна" />
        <meta property="og:description" content="12 услуг: ясновидение, таро, гадание, снятие негатива, любовная магия, онлайн-консультация и другие. Онлайн, конфиденциально." />
        <meta property="og:url" content="https://veravladimirovna.com/uslugi" />
        <meta property="og:image" content="https://veravladimirovna.com/images/hero/vera-hero-banner.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Все услуги — Вера Владимировна" />
        <meta name="twitter:description" content="12 услуг: ясновидение, таро, гадание, снятие негатива, любовная магия, онлайн-консультация и другие. Онлайн, конфиденциально." />
      </Helmet>

      <noscript>
        Вера Владимировна — ясновидящая с 35-летним опытом. На этой странице собраны все 12 услуг: ясновидение, таро, гадание, снятие негатива, любовная магия, онлайн-консультация, диагностика ситуации, таро на отношения, защита и оберег, помощь после расставания, анализ отношений в паре, молитвенная практика у Стены Плача в Иерусалиме. Работает онлайн с русскоязычными клиентами по всему миру.
      </noscript>

      <Navbar />

      {/* Hero-заголовок */}
      <section className="pt-32 pb-14 px-6 md:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'var(--bg-deep)' }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(169,67,14,0.22) 0%, transparent 65%)' }}
        />
        <div className="w-full mx-auto relative z-10" style={{ maxWidth: '1600px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="font-montserrat font-semibold text-xs uppercase mb-4" style={{ color: 'var(--accent)', letterSpacing: '0.2em' }}>
              ★ ВСЕ НАПРАВЛЕНИЯ РАБОТЫ
            </p>
            <h1 className="font-bebas leading-none mb-4" style={{ color: 'var(--text-white)', fontSize: 'clamp(36px, 5vw, 72px)' }}>
              ЧЕМ МОЖЕТ ПОМОЧЬ<br />ВЕРА ВЛАДИМИРОВНА
            </h1>
            <p className="font-lato text-base leading-relaxed" style={{ color: 'var(--text-beige)', fontWeight: 300, maxWidth: '600px' }}>
              Ясновидение, Таро, гадание, снятие негатива, любовная магия и онлайн-консультации.
              35 лет практики. Работает с клиентами из 12+ стран — только онлайн.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Сетка 12 карточек */}
      <section id="grid" className="py-24 px-6 md:px-8 lg:px-12 relative overflow-hidden" style={{ background: 'var(--text-white)' }}>
        {/* Glow 1 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 130% 90% at 88% 100%,
            rgba(195,72,8,0.75) 0%, rgba(215,88,12,0.52) 20%,
            rgba(230,100,20,0.28) 42%, rgba(232,102,23,0.10) 62%, transparent 78%)`,
          zIndex: 0,
        }} />
        {/* Glow 2 */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse 95% 80% at 78% 85%,
            rgba(210,85,10,0.48) 0%, rgba(225,100,18,0.28) 30%,
            rgba(232,102,23,0.10) 58%, transparent 75%)`,
          zIndex: 0,
        }} />

        <div className="w-full mx-auto relative z-10" style={{ maxWidth: '1600px' }}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                className="h-full"
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
              >
                <ServiceCardPremium
                  showTopSlot={true}
                  topImageSrc={svc.cardImage || null}
                  imageSrc={svc.imageSrc}
                  imageAlt={svc.titleLine1 + ' ' + (svc.titleLine2 || '')}
                  imagePosition={svc.imagePosition}
                  eyebrow={svc.eyebrow}
                  eyebrowIcon={svc.eyebrowIcon}
                  titleLine1={svc.titleLine1}
                  titleLine2={svc.titleLine2}
                  ribbon={svc.ribbon}
                  description={svc.description}
                  alignContent={true}
                  footer={
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <a
                        href={TG}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="vera-liquid-button"
                        style={{
                          display: 'block', textAlign: 'center',
                          background: 'var(--accent)', color: 'var(--bg-deep)',
                          fontFamily: '"Montserrat", sans-serif', fontSize: '9px',
                          fontWeight: 700, letterSpacing: '0.07em',
                          padding: '8px 6px', borderRadius: '6px',
                          textDecoration: 'none',
                        }}
                      >
                        НАПИСАТЬ ВЕРЕ →
                      </a>
                      <Link
                        to={svc.slug}
                        className="vera-liquid-button"
                        style={{
                          display: 'block', textAlign: 'center',
                          border: '1px solid rgba(231,119,30,0.45)',
                          color: 'var(--accent)',
                          fontFamily: '"Montserrat", sans-serif', fontSize: '9px',
                          fontWeight: 600, letterSpacing: '0.07em',
                          padding: '7px 6px', borderRadius: '6px',
                          textDecoration: 'none',
                        }}
                      >
                        Узнать больше
                      </Link>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 text-center overflow-hidden" style={{ background: 'var(--bg-dark)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(169,67,14,0.3) 0%, transparent 65%)' }} />
        <motion.div
          className="max-w-[700px] mx-auto relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-bebas leading-none mb-3" style={{ color: 'var(--text-white)', fontSize: 'clamp(36px, 5.5vw, 62px)' }}>
            НЕ ЗНАЕТЕ С ЧЕГО НАЧАТЬ?
          </h2>
          <p className="font-lobster mb-10" style={{ color: 'var(--accent)', fontSize: 'clamp(22px, 3.5vw, 38px)', lineHeight: 1.3 }}>
            Просто напишите — Вера сама определит формат.
          </p>
          <a
            href={TG} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-montserrat font-bold text-sm px-8 py-4 rounded-xl transition-all hover:opacity-90"
            style={{ background: 'var(--accent)', color: 'var(--bg-deep)', letterSpacing: '0.08em' }}
          >
            Написать в Telegram →
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
