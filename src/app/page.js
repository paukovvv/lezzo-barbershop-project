export default function Home() {
  return (
    <main id="main_page">
      <section id="hero" style={{ 
        backgroundImage: "url('/img/bg.jpg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        <div id="hero_content">
          <h1>Lezzo</h1>
          <p>BARBERSHOP</p>
          <hr />
          <a href="https://forms.gle/VVBrBqzDrmZ9MrGSA" target="_blank" rel="noreferrer">
            <button>Записатись</button>
          </a>
        </div>
      </section>
    </main>
  );
}