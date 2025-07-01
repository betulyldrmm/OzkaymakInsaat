import React, { useEffect } from 'react';
import './Insaat.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import insaat1 from '../../assets/insaat1.jpg';
import insaat2 from '../../assets/insaat2.jpg';
import insaat3 from '../../assets/insaat3.jpg';
import santiye2 from '../../assets/santiye2.jpg';

const Insaat = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />

      <section className="hero4">
        <div className="hero-text4"  data-aos="fade-up">
          <h1>İNŞAAT</h1>
          <p>GÜVENLİ MODERN YAPILAR</p>
        </div>
      </section>

      <section className="intro-text4" data-aos="fade-up" data-aos-delay="200">
        <p>
          <h1>ÖZKAYMAK İNŞAAT</h1>
          Özkaymak İnşaat olarak, güvenilir, sağlam ve modern yapılar inşa ederek sektörün öncü firmalarından biri olmayı sürdürüyoruz.
        </p>
      </section>

      <section className="content-section4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
        <div className="text-box4">
          <p>
            İnsan odaklı tasarımlarımızla, semt kültürüne uygun, huzurlu yaşam alanları sunuyoruz.
          </p>
        </div>
        <div
          className="image-box4"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          <img src={insaat1} alt="Kumaş" />
        </div>
      </section>

      <section className="content-section4 reverse4">
        <div className="text-box4">
          <p>
            ✔️ Sözleşmelere %100 bağlılık ve zamanında teslimat<br />
            ✔️ Paydaşlarımıza ve müşterilerimize duyduğumuz sorumluluk bilinci
          </p>
        </div>
        <div className="image-box4" data-aos="fade-up">
          <img src={insaat2} alt="inşaat" />
        </div>
      </section>

      <section className="content-section4">
        <div className="text-box4">
          <p>
            ✔️ Kaliteli malzeme ve işçilik<br />
            ✔️ Teknolojiye ve yeniliğe açık mühendislik çözümleri
          </p>
        </div>
        <div className="image-box4" data-aos="fade-up">
          <img src={santiye2} alt="Makine" />
        </div>
      </section>

      <section className="content-section4 reverse4">
        <div className="text-box4">
          <h2>Adres</h2>
          <p>
            📍 Adres: Kirazlı Mah. Mevlana Cad. – Kirazlı / İstanbul<br />
            📞 Telefon: 0 212 052 29 29<br />
            🏡 Sağlam, güvenilir ve modern yapılar için Özkaymak İnşaat! ✨
          </p>
        </div>
        <div className="image-box4" data-aos="fade-up">
          <img src={insaat3} alt="Makine" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Insaat;
