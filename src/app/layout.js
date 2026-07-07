'use client';

import './globals.css';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="uk">
      <body>
        {/* HEADER */}
        <header>
          <Link href="/">
            <Image 
              src="/img/logo.png" 
              id="logo" 
              alt="Логотип Lezzo" 
              width={150} 
              height={160} 
              priority 
            />
          </Link>
          <button id="menuBtn" onClick={() => setIsMenuOpen(true)}>
            Меню <span></span>
          </button>
        </header>

        <div id="menu" style={{ display: isMenuOpen ? 'block' : 'none' }}>
          <div id="overlay" onClick={() => setIsMenuOpen(false)}></div>
          <div id="sideMenu">
            <button id="closeBtn" onClick={() => setIsMenuOpen(false)}>Закрити ×</button>
            <h2>Навігація</h2>
            <hr />
            <ul>
              <li><Link href="/" onClick={() => setIsMenuOpen(false)}>Головна</Link></li>
              <li><Link href="/services" onClick={() => setIsMenuOpen(false)}>Послуги та ціни</Link></li>
              <li><a href="https://forms.gle/VVBrBqzDrmZ9MrGSA" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>Онлайн-запис</a></li>
              <li><Link href="/contact" onClick={() => setIsMenuOpen(false)}>Контакти</Link></li>
            </ul>
          </div>
        </div>

        {/* MAIN CONTENT */}
        {children}

        {/* FOOTER */}
        <footer>
          <div className="container">
            <div className="item">
              <h2 id="foot_title">Lezzo</h2>
              <p id="pre_title">Барбершоп Lezzo пропонує якісні чоловічі стрижки, моделювання бороди та комфортний простір, де поєднуються стиль і традиції.</p>
              <hr />
              <h2 id="foot_title">Соціальні мережі</h2>
              <div id="social">
                <ul>
                  <li><a href="https://vt.tiktok.com/ZSCvDEoXA/" target="_blank" rel="noreferrer"><img src="/img/tik-tok.png" alt="TikTok" /></a></li>
                  <li><a href="https://www.instagram.com/lezzo.barber.room/" target="_blank" rel="noreferrer"><img src="/img/instagram.png" alt="Instagram" /></a></li>
                  <li><a href="https://t.me/matveipaukov" target="_blank" rel="noreferrer"><img src="/img/telegram.png" alt="Telegram" /></a></li>
                </ul>
              </div>
            </div>
            
            <div className="item">
              <h2>Сторінки</h2>
              <ul>
                <li><Link href="/">Головна</Link></li>
                <li><Link href="/services">Послуги та ціни</Link></li>
                <li><a href="https://forms.gle/VVBrBqzDrmZ9MrGSA" target="_blank" rel="noreferrer">Онлайн-запис</a></li>
                <li><Link href="/contact">Контакти</Link></li>
              </ul>
            </div>
            
            <div className="item">
              <h2>Контакти</h2>
              <ul>
                <li><a href="https://www.google.com.ua/maps/place/Lezzo+Barbershop/@50.5037985,30.4362584,17z" target="_blank" rel="noreferrer">Україна, м. Київ, вул. Наталії Ужвій, 4/1, 04108</a></li>
                <li><a href="tel:+380674797641">+380 67 479 76 41</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}