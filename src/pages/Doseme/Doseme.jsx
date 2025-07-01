import React, { useEffect } from 'react';
import './doseme.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import kumas from '../../assets/kumas.jpg';
import kumas1 from '../../assets/kumas1.jpg';
import makine from '../../assets/makine.jpg';

const Doseme = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  return (
    <>
      <Header />

      <section className="dosemelik-hero1">
        <div className="dosemelik-hero-text1" data-aos="fade-up">
          <h1>DÖŞEMELİK KUMAŞ</h1>
          <p>KONFOR, ŞIKLIK VE KALİTE BİR ARADA</p>
        </div>
      </section>

      <section className="intro-text1" data-aos="fade-up" data-aos-delay="200">
        <p>
          Özkaymak Grup, 2016 yılında By Fabric markasıyla döşemelik kumaş sektörüne adım atarak kısa sürede sektördeki başarısını kanıtlamıştır.
        </p>
      </section>

      <section className="content-section1" data-aos="fade-up" data-aos-delay="300">
        <div className="text-box1">
          <h2>Yenilikçi Tasarımlar</h2>
          <p>
            %100 ithal ürünleri ile Türkiye'de endüstriyel ve kurumsal firmalara yüksek kaliteli döşemelik kumaşlar sunarken, birçok ülkeye transit ticaret yaparak küresel pazarda güçlü bir yer edinmiştir.
          </p>
        </div>
        <div className="image-box1" data-aos="fade-up" data-aos-delay="400">
          <img src={kumas} alt="Yenilikçi döşemelik kumaş tasarımları" loading="lazy" />
        </div>
      </section>

      <section className="content-section1 reverse1" data-aos="fade-up" data-aos-delay="200">
        <div className="text-box1">
          <h2>Sektör Lideri</h2>
          <p>
            By Fabric, yenilikçi tasarımlar, moda yaratan renk ve desen seçenekleriyle döşemelik kumaş sektörüne yön veriyor.
            Şıklık ve konforu bir araya getiren kumaşlarımız, yaşam alanlarınıza estetik ve dayanıklılığı getiriyor.
          </p>
        </div>
        <div className="image-box1" data-aos="fade-up" data-aos-delay="300">
          <img src={kumas1} alt="Premium kaliteli döşemelik kumaşlar" loading="lazy" />
        </div>
      </section>

      <section className="content-section1" data-aos="fade-up" data-aos-delay="200">
        <div className="text-box1">
          <h2>Kalite & Güven</h2>
          <p>
            Aylık 2 milyon metreyi aşan kumaş ticaretimiz, geniş stok kapasitemiz ve sürekli tedarik gücümüz sayesinde By Fabric markasını sektörde öncü konuma taşımaktadır.
            Yaşam alanlarınıza kaliteyi ve zarafeti getiren döşemelik kumaş çözümlerimizle tanışın!
          </p>
        </div>
        <div className="image-box1" data-aos="fade-up" data-aos-delay="300">
          <img src={makine} alt="Modern üretim teknolojisi ve kalite kontrol" loading="lazy" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Doseme;
