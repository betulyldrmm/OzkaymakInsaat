import React, { useEffect } from 'react';
import './Turizm.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import turizmm from '../../assets/turizmm.jpg';
import parmada2 from '../../assets/parmada2.jpg';
import turizm from '../../assets/turizm.jpg';
import parmada3 from '../../assets/parmada3.jpg';

const Turizm = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />

      <section className="hero3">
        <div className="hero-text3" data-aos="fade-up">
          <h1>TURİZM &amp; OTEL</h1>
          <p>KONFOR VE MİSAFİRPERVERLİĞİN BULUŞTUĞU NOKTA</p>
        </div>
      </section>

      <section className="intro-text3" data-aos="fade-up" data-aos-delay="100">
        <h1>PARMADA HOTEL</h1>
        <p>
          Parmada Hotel, geleneksel Türk misafirperverliğini modern konaklama anlayışıyla birleştirerek konforlu,
          güvenilir ve kaliteli bir deneyim sunuyor.
        </p>
      </section>

      <section className="content-section3" data-aos="fade-up" data-aos-delay="200">
        <div className="text-box3">
          <h2>PARMADA HOTEL</h2>
          <p>
            Parmada Hotel, geleneksel Türk misafirperverliğini modern konaklama anlayışıyla birleştirerek
            konforlu, güvenilir ve kaliteli bir deneyim sunuyor.
          </p>
        </div>
        <div className="image-box3" data-aos="fade-up" data-aos-delay="300">
          <img src={turizmm} alt="Kumaş" loading="lazy" />
        </div>
      </section>

      <section className="content-section3 reverse3" data-aos="fade-up" data-aos-delay="400">
        <div className="text-box3">
          <p>
            2014 yılında dinamik ve tecrübeli bir ekip tarafından kurulan otelimiz, misafirlerine güleryüzlü,
            samimi ve profesyonel bir hizmet sunmayı ilke edinmiştir. Konforlu odalar, merkezi konum ve
            üstün hizmet anlayışımızla seyahatinizi unutulmaz kılıyoruz.
          </p>
        </div>
        <div className="image-box3" data-aos="fade-up" data-aos-delay="500">
          <img src={parmada2} alt="Kumaş 2" loading="lazy" />
        </div>
      </section>

      <section className="content-section3" data-aos="fade-up" data-aos-delay="600">
        <div className="text-box3">
          <h2>Parmada Turizm Acentası</h2>
          <p>
            Türkiye’nin uluslararası ve ulusal kurumlarına özel seyahat çözümleri sunan Parmada Turizm
            Acentası, benzersiz destinasyonlar, özel lezzet deneyimleri ve titizlikle hazırlanmış motivasyon
            gezileriyle seyahatlerinizi kusursuz hale getiriyor.
          </p>
        </div>
        <div className="image-box3" data-aos="fade-up" data-aos-delay="700">
          <img src={turizm} alt="Makine" loading="lazy" />
        </div>
      </section>

      <section className="content-section3 reverse3" data-aos="fade-up" data-aos-delay="800">
        <div className="text-box3">
          <h2>Adres</h2>
          <p>
            📍 Adres: Kemalpaşa Mah. Ordu Cad. No:74 / Laleli - İstanbul
            <br />
            📞 Telefon: 0212 526 80 30
            <br />
            ✈️ Özel seyahat ve konaklama deneyimleri için bizimle iletişime geçin! ✨
          </p>
        </div>
        <div className="image-box3" data-aos="fade-up" data-aos-delay="900">
          <img src={parmada3} alt="otel" loading="lazy" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Turizm;
