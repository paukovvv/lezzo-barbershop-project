export const metadata = {
    title: 'Lezzo Barbershop | Контакти',
    description: 'Знайдіть барбершоп Lezzo у Києві на Виноградарі. Наша адреса, телефон, графік роботи та зручна інтерактивна карта для побудови маршруту.',
  };
  
  export default function Contact() {
    return (
      <main id="contact_us_page">
        <section id="contact_intro">
          <div className="contact_text">
            <h1>Контакти</h1>
            <div className="line"></div>
            <span>
              Запишіться на візит, задайте питання<br />
              або знайдіть нас у Києві.
            </span>
          </div>
        </section>
  
        <section id="hero_contact">
          <div className="item_cont">
            {/* Надійне вбудовування карти Google за назвою та адресою */}
            <iframe 
              src="https://maps.google.com/maps?q=Lezzo%20Barbershop,%20%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F%20%D0%9D%D0%B0%D1%82%D0%B0%D0%BB%D1%96%D1%97%20%D0%A3%D0%B6%D0%B2%D1%96%D0%B9,%204/1,%20%D0%9A%D0%B8%D1%96%D0%B2&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="item_cont">
            <div className="details">
              <h2 className="cont_title">Контактна інформація</h2>
  
              <div className="text">
                <img src="/img/point.png" alt="Адреса" />
                <div>
                  <h3 className="sub_title">Адреса</h3>
                  <p>Україна, м. Київ, вулиця Наталії Ужвій, 4/1, 04108</p>
                </div>
              </div>
              <hr />
  
              <div className="text">
                 <img src="/img/phone.png" alt="Телефон" />
                <div>
                  <h3 className="sub_title">Телефон</h3>
                  <p>+380 67 479 76 41</p>
                </div>
              </div>
              <hr />
  
              <div className="text">
                 <img src="/img/email.png" alt="Email" />
                <div>
                  <h3 className="sub_title">Email</h3>
                  <p>lezzobarbershop@gmail.com</p>
                </div>
              </div>
              <hr />
  
              <div className="text">
                <img src="/img/clock.png" alt="Графік роботи" />
                <div>
                  <h3 className="sub_title">Графік роботи</h3>
                  <p>Пн – Нд: 9:00 – 21:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }