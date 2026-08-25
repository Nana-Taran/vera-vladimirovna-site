import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/vera/Navbar';
import Footer from '@/components/vera/Footer';

export default function Privacy() {
  return (
    <div style={{ background: 'var(--bg-deep)', minHeight: '100vh' }}>
      <Helmet>
        <title>Политика конфиденциальности — Вера Владимировна</title>
        <meta name="description" content="Политика конфиденциальности сайта Веры Владимировны. Как мы обрабатываем и защищаем ваши данные." />
        <link rel="canonical" href="https://veravladimirovna.com/privacy" />
      </Helmet>

      <Navbar />

      <section className="pt-32 pb-24 px-4">
        <div className="max-w-[900px] mx-auto">
          <h1
            className="font-bebas leading-none mb-10"
            style={{ color: 'var(--text-white)', fontSize: 'clamp(32px, 5vw, 52px)' }}
          >
            ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
          </h1>

          <div
            className="space-y-8 font-lato text-base leading-relaxed"
            style={{ color: 'var(--text-beige)', fontWeight: 300 }}
          >
            <div>
              <p className="mb-2" style={{ color: 'var(--text-white)', fontWeight: 400 }}>Дата последнего обновления: 30 июля 2026 г.</p>
              <p>Настоящая Политика конфиденциальности описывает, как сайт veravladimirovna.com («Сайт») собирает, использует и защищает информацию, которую вы предоставляете при использовании Сайта.</p>
            </div>

            <div>
              <h2 className="font-bebas mb-3" style={{ color: 'var(--text-white)', fontSize: '24px', letterSpacing: '0.05em' }}>1. КАКИЕ ДАННЫЕ МЫ СОБИРАЕМ</h2>
              <p>При обращении через форму на сайте или мессенджеры (Telegram, WhatsApp, Viber) вы можете предоставить:</p>
              <ul className="mt-3 space-y-2 list-none">
                {['Имя (необязательно)', 'Контактные данные: номер телефона или имя пользователя в мессенджере', 'Описание вашей ситуации или вопроса'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span style={{ color: 'var(--accent)' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">Мы не запрашиваем документы, удостоверяющие личность, и не требуем регистрации на сайте.</p>
            </div>

            <div>
              <h2 className="font-bebas mb-3" style={{ color: 'var(--text-white)', fontSize: '24px', letterSpacing: '0.05em' }}>2. КАК МЫ ИСПОЛЬЗУЕМ ВАШИ ДАННЫЕ</h2>
              <p>Предоставленная вами информация используется исключительно для:</p>
              <ul className="mt-3 space-y-2 list-none">
                {[
                  'Ответа на ваш запрос и проведения консультации',
                  'Связи с вами через выбранный мессенджер',
                  'Улучшения качества работы',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span style={{ color: 'var(--accent)' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">Мы не передаём ваши данные третьим лицам, не используем их в маркетинговых рассылках без вашего согласия.</p>
            </div>

            <div>
              <h2 className="font-bebas mb-3" style={{ color: 'var(--text-white)', fontSize: '24px', letterSpacing: '0.05em' }}>3. КОНФИДЕНЦИАЛЬНОСТЬ</h2>
              <p>Всё, что вы сообщаете в рамках консультации, остаётся строго конфиденциальным. Никакие детали ваших ситуаций, имена или личные данные не публикуются без вашего явного согласия.</p>
            </div>

            <div>
              <h2 className="font-bebas mb-3" style={{ color: 'var(--text-white)', fontSize: '24px', letterSpacing: '0.05em' }}>4. ХАРАКТЕР КОНСУЛЬТАЦИИ</h2>
              <p>Консультации Веры Владимировны относятся к эзотерическим и духовным практикам. Они не являются медицинской, психологической, юридической или финансовой услугой и не заменяют обращение к профильному специалисту.</p>
            </div>

            <div>
              <h2 className="font-bebas mb-3" style={{ color: 'var(--text-white)', fontSize: '24px', letterSpacing: '0.05em' }}>5. COOKIES И АНАЛИТИКА</h2>
              <p>Сайт может использовать стандартные технологии (cookies, аналитические скрипты) для улучшения работы. Эти данные анонимны и не позволяют идентифицировать вас лично. Продолжая использовать сайт, вы соглашаетесь с использованием cookies.</p>
            </div>

            <div>
              <h2 className="font-bebas mb-3" style={{ color: 'var(--text-white)', fontSize: '24px', letterSpacing: '0.05em' }}>6. ВАШИ ПРАВА</h2>
              <p>Вы вправе в любой момент:</p>
              <ul className="mt-3 space-y-2 list-none">
                {[
                  'Запросить удаление ваших данных',
                  'Запросить уточнение или исправление контактной информации',
                  'Отказаться от дальнейшей переписки',
                  'Задать вопрос об обработке ваших данных',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span style={{ color: 'var(--accent)' }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3">Для этого напишите напрямую в Telegram: <a href="https://t.me/Vera_vladimerovna" style={{ color: 'var(--accent)' }}>@Vera_vladimerovna</a></p>
            </div>

            <div>
              <h2 className="font-bebas mb-3" style={{ color: 'var(--text-white)', fontSize: '24px', letterSpacing: '0.05em' }}>7. ИЗМЕНЕНИЯ В ПОЛИТИКЕ</h2>
              <p>Мы можем обновлять данную политику. Актуальная версия всегда доступна на этой странице.</p>
            </div>

            <div style={{ borderTop: '1px solid rgba(232,102,23,0.2)', paddingTop: '24px' }}>
              <p>По всем вопросам: <a href="https://t.me/Vera_vladimerovna" style={{ color: 'var(--accent)' }}>Telegram @Vera_vladimerovna</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
