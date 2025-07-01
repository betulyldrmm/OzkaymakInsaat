import React, { useEffect } from 'react';
import './giyim.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import kumas from '../../assets/kumas2.jpg';
import kumas1 from '../../assets/kumas3.jpg';
import kumas4 from '../../assets/kumas4.jpg';

const Giyim = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />

      <section className="her2">
        <div className="her-text2" data-aos="fade-up">
          <h1>GİYİMLİK KUMAŞ</h1>
          <p>MODA VE KALİTENİN ADRESİ</p>
        </div>
      </section>

      <section className="intro-text2" data-aos="fade-up" data-aos-delay="200">
        <p>
          Özkaymak Grup, moda dünyasındaki en yeni trendleri yakından takip eden uzman pazarlama
          ve satın alma ekibiyle, yenilikçi ve yaratıcı kumaş çözümleri sunarak sektörde fark yaratmaya devam ediyor.
        </p>
      </section>

      <section className="content-section2" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
        <div className="text-box2">
          <h2>Yenilikçi Tasarımlar</h2>
          <p>
            Tasarımlarımızı oluştururken giyim sektörünün farklı ihtiyaçlarını göz önünde bulunduruyor ve viskon,
            polyester, pamuk gibi üstün kaliteli kumaş türleri ile sektöre yön veriyoruz.
          </p>
        </div>
        <div className="image-box2" data-aos="fade-up">
          <img src={kumas} alt="Kumaş" />
        </div>
      </section>

      <section className="content-section2 reverse2" data-aos="fade-up">
        <div className="text-box2">
         
          <p>
            Ceket, pantolon, etek, mont, tayt ve yağmurluk gibi geniş kullanım alanlarına hitap eden fonksiyonel
            kumaşlarımız, kalite ve şıklığı bir araya getiriyor.
          </p>
        </div>
        <div className="image-box2" data-aos="fade-up">
          <img src={kumas1} alt="Kumaş 2" />
        </div>
      </section>

      <section className="content-section2" data-aos="fade-up">
        <div className="text-box2">
          <h2>Kalite & Güven</h2>
          <p>
            Önde gelen tekstil markaları ve üreticileriyle iş birliği yaparak, sektöre yüksek standartlarda kumaş tedariği sağlıyoruz.
            Moda ve kaliteyi buluşturan özel kumaş koleksiyonlarımızla fark yaratmaya devam ediyoruz!
          </p>
        </div>
        <div className="image-box2" data-aos="fade-up">
          <img src={kumas4} alt="Makine" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Giyim;
