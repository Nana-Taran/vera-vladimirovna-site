export default function PageNotFound() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-deep)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
      <p style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '120px', color: 'var(--accent)', lineHeight: 1, margin: 0 }}>404</p>
      <p style={{ fontFamily: 'Lato, sans-serif', color: 'var(--text-beige)', fontSize: '18px' }}>Страница не найдена</p>
      <a href="/" style={{ fontFamily: 'Montserrat, sans-serif', color: 'var(--accent)', fontSize: '14px', letterSpacing: '0.1em' }}>← На главную</a>
    </div>
  );
}
