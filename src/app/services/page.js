'use client';

import { useState } from 'react';

export default function Services() {
  // Стейт для керування активним табом
  const [activeTab, setActiveTab] = useState('hair');

  return (
    <main id="services_page">
      <section id="services_hero" style={{ backgroundImage: "url('/img_Paukov/IMG_7426.JPG')" }}>
        <div className="glass_container">
          <section className="glass_header">
            <h1>Послуги та ціни</h1>
            <hr className="short_hr" />
          </section>

          {/* Таби перемикання */}
          <div className="services_tabs">
            <button 
              className={`tab_btn ${activeTab === 'hair' ? 'active' : ''}`} 
              onClick={() => setActiveTab('hair')}
            >
              Волосся
            </button>
            <button 
              className={`tab_btn ${activeTab === 'beard' ? 'active' : ''}`} 
              onClick={() => setActiveTab('beard')}
            >
              Борода
            </button>
            <button 
              className={`tab_btn ${activeTab === 'combos' ? 'active' : ''}`} 
              onClick={() => setActiveTab('combos')}
            >
              Комплекси
            </button>
          </div>

          {/* Контент табу: Волосся (Hair) */}
          <div className={`tab_content ${activeTab === 'hair' ? 'active' : ''}`} style={{ display: activeTab === 'hair' ? 'block' : 'none' }}>
            <div className="price_item">
              <div className="price_header">
                <div className="price_info">
                  <h3>Чоловіча стрижка</h3>
                  <p>Професійна стрижка ножицями та машинкою.</p>
                </div>
                <div className="price_value">950 ₴</div>
              </div>
              <div className="price_details">
                <p>Кожна стрижка в LEZZO — це мистецтво! Барбер віртуозно володіє ножицями та машинкою, створюючи вам неповторний образ.</p>
                <a href="https://forms.gle/VVBrBqzDrmZ9MrGSA" target="_blank" rel="noreferrer">
                  <button className="book_btn">Записатись</button>
                </a>
              </div>
            </div>

            <div className="price_item">
              <div className="price_header">
                <div className="price_info">
                  <h3>Камуфлювання голови</h3>
                  <p>Приховування сивини та відновлення кольору.</p>
                </div>
                <div className="price_value">550 ₴</div>
              </div>
              <div className="price_details">
                <p>Фарба American Crew зафарбовує до 100% сивого волосся, відновлює природний відтінок і тримається до 24 процедур миття.</p>
                <a href="https://forms.gle/VVBrBqzDrmZ9MrGSA" target="_blank" rel="noreferrer">
                  <button className="book_btn">Записатись</button>
                </a>
              </div>
            </div>

            <div className="price_item">
              <div className="price_header">
                <div className="price_info">
                  <h3>Дитяча стрижка</h3>
                  <p>Стрижка для юних джентльменів.</p>
                </div>
                <div className="price_value">1000 ₴</div>
              </div>
              <div className="price_details">
                <p>Якісна стрижка для хлопців від 10 до 12 років. У разі необхідності батьки можуть залишити дитину на 60 хвилин для обслуговування під наглядом.</p>
                <a href="https://forms.gle/VVBrBqzDrmZ9MrGSA" target="_blank" rel="noreferrer">
                  <button className="book_btn">Записатись</button>
                </a>
              </div>
            </div>
          </div>

          {/* Контент табу: Борода (Beard) */}
          <div className={`tab_content ${activeTab === 'beard' ? 'active' : ''}`} style={{ display: activeTab === 'beard' ? 'block' : 'none' }}>
            <div className="price_item">
              <div className="price_header">
                <div className="price_info">
                  <h3>Моделювання бороди</h3>
                  <p>Підбір ідеальної форми бороди та вусів.</p>
                </div>
                <div className="price_value">550 ₴</div>
              </div>
              <div className="price_details">
                <p>Барбери підберуть для вас ідеальні образи бороди і вусів, які підкреслять вашу індивідуальність і замаскують недоліки.</p>
                <a href="https://forms.gle/VVBrBqzDrmZ9MrGSA" target="_blank" rel="noreferrer">
                  <button className="book_btn">Записатись</button>
                </a>
              </div>
            </div>

            <div className="price_item">
              <div className="price_header">
                <div className="price_info">
                  <h3>Гоління обличчя</h3>
                  <p>Брутальна щетина або ідеально гладка шкіра.</p>
                </div>
                <div className="price_value">350 ₴</div>
              </div>
              <div className="price_details">
                <p>Брутальна щетина або ідеально гладка шкіра – вирішувати вам. Наша задача – безпечна косметика та сучасні інструменти.</p>
                <a href="https://forms.gle/VVBrBqzDrmZ9MrGSA" target="_blank" rel="noreferrer">
                  <button className="book_btn">Записатись</button>
                </a>
              </div>
            </div>

            <div className="price_item">
              <div className="price_header">
                <div className="price_info">
                  <h3>Камуфлювання бороди</h3>
                  <p>Фарбування та тонування сивини на бороді.</p>
                </div>
                <div className="price_value">450 ₴</div>
              </div>
              <div className="price_details">
                <p>Система фарбування American Crew працює також для камуфляжу бороди та вусів з різним ступенем покриття: 25-100%.</p>
                <a href="https://forms.gle/VVBrBqzDrmZ9MrGSA" target="_blank" rel="noreferrer">
                  <button className="book_btn">Записатись</button>
                </a>
              </div>
            </div>
          </div>

          {/* Контент табу: Комплекси (Combos) */}
          <div className={`tab_content ${activeTab === 'combos' ? 'active' : ''}`} style={{ display: activeTab === 'combos' ? 'block' : 'none' }}>
            <div className="price_item">
              <div className="price_header">
                <div className="price_info">
                  <h3>Стрижка + Борода</h3>
                  <p>Повний комплекс для вашого стилю.</p>
                </div>
                <div className="price_value">1350 ₴</div>
              </div>
              <div className="price_details">
                <p>Один із найпопулярніших варіантів зачісок під бороду — це коротка чоловіча стрижка з бородою середньої довжини.</p>
                <a href="https://forms.gle/VVBrBqzDrmZ9MrGSA" target="_blank" rel="noreferrer">
                  <button className="book_btn">Записатись</button>
                </a>
              </div>
            </div>

            <div className="price_item">
              <div className="price_header">
                <div className="price_info">
                  <h3>Стрижка «Батько + син»</h3>
                  <p>Спільний візит для двох поколінь.</p>
                </div>
                <div className="price_value">1850 ₴</div>
              </div>
              <div className="price_details">
                <p>Чудовий спосіб провести час разом із користю. Для хлопця віком до 10 років, який може знаходитись та комфортно себе почувати лише з дорослим.</p>
                <a href="https://forms.gle/VVBrBqzDrmZ9MrGSA" target="_blank" rel="noreferrer">
                  <button className="book_btn">Записатись</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}