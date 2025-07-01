import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './iletisim.css';

const Iletisim = () => {
  return (
    <>
      <Header />
<br></br><br></br><br></br>
      <section className="iletisim-section">
    
        <div className="iletisim-container">
          <div className="iletisim-bilgi">
            <h1>İLETİŞİM</h1>
            <p><strong>Adres:</strong> 15 Temmuz Mah. Koçman Cad. Demirkol Plaza A-B Blok No:54 Bağcılar/İstanbul</p>
            <p><strong>Telefon:</strong> <a href="tel:+902123456789">+90 212 345 67 89</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@ozkaymakinsaat.com">info@ozkaymakinsaat.com</a></p>
          </div>

          <div className="iletisim-harita">
            <iframe
              title="Konum"
              src="https://www.google.com/maps?q=15+Temmuz+Mahallesi+Koçman+Caddesi+Demirkol+Plaza+No:54+Bağcılar+İstanbul&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Iletisim;
