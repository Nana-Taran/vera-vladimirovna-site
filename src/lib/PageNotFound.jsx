import { Helmet } from 'react-helmet-async';

export default function PageNotFound() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-deep)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
      <Helmet>
        <title>Страница не найдена — Вера Владимировна</title>
        <meta name="description" content="Страница не найдена. Перейдите на главную страницу сайта Веры Владимировны." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <p className="font-bebas" style={{ fontSize: '120px', color: 'var(--accent)', lineHeight: 1, margin: 0 }}>404</p>
      <h1 className="font-lato" style={{ color: 'var(--text-beige)', fontSize: '18px', margin: 0 }}>Страница не найдена</h1>
      <a href="/" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--accent)', fontSize: '14px', letterSpacing: '0.1em' }}>← На главную</a>
    </div>
  );
}
