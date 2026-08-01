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
        <meta name="description" content="Онлайн-консультация ясновидящей Веры Владимировны. Таро, гадание, снятие негатива, любовная магия. Работаю с диаспорой по всему миру." />
        <link rel="canonical" href="https://veravladimirovna.com/" />
        <meta property="og:title" content="Вера Владимировна — ясновидящая онлайн" />
        <meta property="og:description" content="Онлайн-консультация ясновидящей Веры Владимировны. Таро, гадание, снятие негатива, любовная магия." />
        <meta property="og:url" content="https://veravladimirovna.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://veravladimirovna.com/images/hero/vera-hero-banner.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Вера Владимировна — ясновидящая онлайн" />
        <meta name="twitter:description" content="Онлайн-консультация ясновидящей Веры Владимировны." />
      </Helmet>
      <Navbar />
      <Hero />
      <IconStrip />
      <WhenToReach />
      <HowAndServices />
      <About />
      <VideoSection />
      <Reviews />
      <Certificates />
      <HowNotToMistake />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
