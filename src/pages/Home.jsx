import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/vera/Navbar';
import Hero from '@/components/vera/Hero';
import IconStrip from '@/components/vera/IconStrip';
import WhenToReach from '@/components/vera/WhenToReach';
import HowAndServices from '@/components/vera/HowAndServices';
import About from '@/components/vera/About';
import VideoSection from '@/components/vera/VideoSection';
import Reviews from '@/components/vera/Reviews';
import Certificates from '@/components/vera/Certificates';
import HowNotToMistake from '@/components/vera/HowNotToMistake';
import FAQ from '@/components/vera/FAQ';
import FinalCTA from '@/components/vera/FinalCTA';
import Footer from '@/components/vera/Footer';

export default function Home() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Вера Владимировна — ясновидящая онлайн</title>
        <meta name="description" content="Онлайн-консультация Веры Владимировны. Таро, гадание, диагностика ситуации и разбор личного вопроса. Работаю с диаспорой по всему миру." />
        <link rel="canonical" href="https://veravladimirovna.com/" />
        <meta property="og:title" content="Вера Владимировна — ясновидящая онлайн" />
        <meta property="og:description" content="Онлайн-консультация Веры Владимировны. Таро, гадание, диагностика ситуации и разбор личного вопроса." />
        <meta property="og:url" content="https://veravladimirovna.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://veravladimirovna.com/images/hero/vera-hero-banner.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Вера Владимировна — ясновидящая онлайн" />
        <meta name="twitter:description" content="Онлайн-консультация ясновидящей Веры Владимировны." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Вера Владимировна",
          "url": "https://veravladimirovna.com/",
          "inLanguage": "ru"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Вера Владимировна",
          "url": "https://veravladimirovna.com/",
          "image": "https://veravladimirovna.com/images/hero/vera-hero-banner.webp",
          "jobTitle": "Ясновидящая, таролог",
          "knowsAbout": ["Ясновидение", "Таро", "Гадание", "Диагностика ситуации", "Онлайн-консультации"],
          "sameAs": ["https://t.me/Vera_vladimerovna"]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Вера Владимировна",
          "url": "https://veravladimirovna.com/",
          "image": "https://veravladimirovna.com/images/hero/vera-hero-banner.webp",
          "areaServed": "Worldwide",
          "availableLanguage": ["ru"],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "url": "https://t.me/Vera_vladimerovna",
            "availableLanguage": "Russian"
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Как проходит онлайн-консультация?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Клиент пишет в Telegram, WhatsApp или Viber, описывает ситуацию своими словами, после чего Вера Владимировна проводит индивидуальный разбор и предлагает подходящий формат работы."
              }
            },
            {
              "@type": "Question",
              "name": "Можно ли обратиться из другой страны?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Да. Консультации проходят дистанционно, поэтому обратиться можно из любой страны."
              }
            },
            {
              "@type": "Question",
              "name": "Есть ли гарантии результата?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Нет. Вера Владимировна не даёт гарантий результата и сначала разбирает ситуацию индивидуально."
              }
            }
          ]
        })}</script>
      </Helmet>
      <Navbar />
      <Hero />
      <IconStrip />
      <VideoSection />
      <WhenToReach />
      <HowAndServices />
      <About />
      <Reviews />
      <Certificates />
      <HowNotToMistake />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
