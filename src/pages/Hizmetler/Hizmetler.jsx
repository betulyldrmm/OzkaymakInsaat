import React, { useEffect } from 'react';
import './hizmetler.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import insaat11 from '../../assets/insaat11.jpg';
import insaat22 from '../../assets/insaat22.jpg';
import insaat33 from '../../assets/insaat33.jpg';
import { useNavigate } from 'react-router-dom';

const Hizmetler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const scrollArrow = document.querySelector('.scroll-down-arrow');
    if (scrollArrow) {
      scrollArrow.addEventListener('click', (e) => {
        e.preventDefault();
        const nextSection = document.querySelector('.services-sectio');
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }, []);

  const services = [
    {
      id: 1,
      image: insaat11,
      title: "PROJE TASARIMI",
      description: "Mimari projelerinizi hayata geçirmek için detaylı teknik çizimler, 3D modelleme ve yapı ruhsatı süreçlerinde profesyonel destek sunuyoruz.",
      link: "/Hizmet1"
    },
    {
      id: 2,
      image: insaat22,
      title: "YAPI İNŞAATI",
      description: "Temel atımından teslim aşamasına kadar tüm inşaat süreçlerini kaliteli malzeme ve deneyimli ekibimizle gerçekleştiriyoruz.",
      link: "/Hizmet2"
    },
    {
      id: 3,
      image: insaat33,
      title: "ŞANTİYE YÖNETİMİ",
      description: "Şantiye güvenliği, iş programı takibi ve kalite kontrol süreçlerini titizlikle yöneterek projelerinizin zamanında tamamlanmasını sağlıyoruz.",
      link: "/Hizmet3"
    }
  ];

  return (
    <>
      <Header />
      <a href="#next-section" className="scroll-down-arrow">
        <span className="arrow"></span>
      </a>
      <div className='hero-section2'>
        <div className="hero-text">
          <h1>HİZMETLERİMİZ</h1>
          <h2>ÖZKAYMAK İNŞAAT</h2>
          <p>Hayallerinizi gerçekleştirmenize yardımcı olalım...</p>
        </div>
      </div>

      <div className="services-sectio">
        <div className="services-containeer">
          <h2 className="services-title" data-aos="fade-up">Hizmet Alanlarımız</h2>
          <div className="servicess-grid">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="service-card clickable"
                data-aos="fade-up"
                data-aos-delay={index * 200}
                onClick={() => navigate(service.link)}
              >
                <div className="service-image-container">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-card-content">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Hizmetler;