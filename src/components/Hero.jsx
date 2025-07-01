import React, { useEffect, useState } from 'react';
import ozkaymakTasarim from "../assets/ozkaymakTasarim.jpeg";
import rezidans from "../assets/rezidans.jpg";
import otell from "../assets/parmada2.jpg";
import otel from "../assets/merkez4.jpeg";
import devam1 from "../assets/devam1.jpg";
import tamam1 from "../assets/tamam1.jpg";
import gelecek1 from "../assets/gelecek1.jpg";

import "./Hero.css";
import { Link } from 'react-router-dom';
import { MdAttachMoney, MdVerified } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GiTrophyCup } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';


const images = [otel, rezidans, ozkaymakTasarim, otell];

const projectCategories = [
  { id: 'devam', image: devam1, title: 'Devam Eden Projeler', subtitle: 'Kivem-İş Metro Evleri' },
  { id: 'tamam', image: tamam1, title: 'Tamamlanan Projeler', subtitle: 'Barola Residence' },
  { id: 'gelecek', image: gelecek1, title: 'Gelecek Projeler', subtitle: 'Yakındaki Proje' }
];

const projectData = {
  devam: [
    { img: devam1, title: "METRO EVLERİ", link: "/projeler/devam" }
   
  ],
  tamam: [
    { img: tamam1, title: "REZİDANS PROJESİ", link: "/projeler/tamam" }
  ],
  gelecek: [
    { img: gelecek1, title: "YAKINDAKİ PROJELER", link: "/projeler/gelecek" }
  ]
};

const sektorler = [
  { id: 1, icon: <MdAttachMoney size={48} />, title: 'KOLAY FİNANSMAN', description: 'Özkaymak İnşaat, uygun ödeme planları ve esnek finansman çözümleri sunarak hayalinizdeki eve kolayca sahip olmanızı sağlar..' },
  { id: 2, icon: <HiOutlineUserGroup size={48} />, title: 'ÜCRETSİZ KONSÜLTASYON', description: 'Uzman ekibimiz, ihtiyaçlarınıza en uygun çözümleri sunmak için ücretsiz yerinde danışmanlık hizmeti vermektedir.' },
  { id: 3, icon: <GiTrophyCup size={48} />, title: 'ÖDÜLLÜ HİZMET', description: 'Kalite ve müşteri memnuniyetinde sektörün öncüsüyüz. Ödüllü projelerimizle güvenilir bir hizmet sunuyoruz.' },
  { id: 4, icon: <MdVerified size={48} />, title: 'LİSANSLI VE GARANTİLİ', description: 'Tüm projelerimiz resmi onaylı olup, yüksek kalite standartlarına uygun olarak garanti kapsamındadır.' }
];

const testimonials = [
  { id: 1, text: "Hayalimizdeki eve kavuştuk. Teslim süresi çok iyiydi.", name: "Mehmet K.", rating: 5 },
  { id: 2, text: "Malzeme kalitesi ve tasarım harika. Tavsiye ederim.", name: "Ayşe Y.", rating: 5 },
  { id: 3, text: "Bölgenin en iyi projesi oldu. Çok memnunuz.", name: "Serkan T.", rating: 5 },
  { id: 4, text: "Her aşamada şeffaf yaklaşıldı. Kaliteli hizmet.", name: "Fatma Ç.", rating: 5 }
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial-slider">
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => {
          let position = 'next';
          if (index === activeIndex) position = 'active';
          else if (index === activeIndex - 1 || (activeIndex === 0 && index === testimonials.length - 1)) position = 'prev';
          return (
            <div key={testimonial.id} className={`testimonial-card ${position}`}>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-rating">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="star">⭐</span>
                ))}
              </div>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          );
        })}
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button key={index} className={`dot ${index === activeIndex ? 'active' : ''}`} onClick={() => setActiveIndex(index)} />
        ))}
      </div>
    </div>
  );
};

const HeroSektor = () => {
  return (
    <>
      <h2 className="projects-title">NEDEN BİZ?</h2>
      <div className="projects-containerr">
        <div className="sektorler-container" data-aos="fade-up" data-aos-delay="500" data-aos-duration="700">
          <div className="sektorler-grid">
            {sektorler.map((sektor) => (
              <div key={sektor.id} className="sektor-card visible">
                <div className="sektor-icon"><span className="icon-emoji">{sektor.icon}</span></div>
                <h3 className="sektor-title-text">{sektor.title}</h3>
                <p className="sektor-description">{sektor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ScrollDownArrow = () => {
  return (
    <a href="#next-section" className="scroll-down-arrow">
      <span className="arrow"></span>
    </a>
  );
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    AOS.init({ once: true });
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero-slider">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`slide-${i}`} className={`slide ${i === currentIndex ? 'active' : ''}`} />
        ))}
        <ScrollDownArrow />
      </div>

      <section className="intro" id="next-section">
        <h1>TÜRKİYE'NİN GÜVENİLİR İNŞAAT ŞİRKETİ</h1>
        <h2>ÖZKAYMAK İNŞAAT</h2>
        <p>
          Özkaymak İnşaat, kaliteli yapı projeleri ve yenilikçi çözümleriyle sektörde fark yaratıyor. Güçlü mühendislik anlayışı ve modern tasarım prensipleriyle Türkiye'nin dört bir yanında güvenli ve estetik yapılar inşa ediyoruz. Konut, ticari ve endüstriyel projelerde uzman ekibimizle geleceğin yaşam alanlarını şekillendiriyoruz.
        </p>
      </section>

      <div className="projects-container">
        <h2 className="projects-title">PROJELERİMİZ</h2>
        {!selectedCategory ? (
          <div className="project-categories">
            {projectCategories.map((category) => (
              <div key={category.id} className="project-category" onClick={() => setSelectedCategory(category.id)}>
                <img src={category.image} alt={category.title} />
                <div className="category-overlay">
                  <h3>{category.title}</h3>
                  <p>{category.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="project-details">
            <div className="project-header">
              <h3>{projectCategories.find(cat => cat.id === selectedCategory)?.title}</h3>
              <button className="back-button" onClick={() => setSelectedCategory(null)}>Geri</button>
            </div>
            <div className="project-grid">
              {projectData[selectedCategory].map((project, index) => (
                <div key={index} className="project-item">
                  <img src={project.img} alt={project.title} />
                  <div className="project-info">
                    <h4>{project.title}</h4>
                    <Link to={project.link}><button className="detay-buton">Detaylar</button></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <HeroSektor />

      <h1 className='musteriGorus'>MÜŞTERİLERİMİZİN YORUMLARI</h1>
      <TestimonialSlider />

      
    </>
  );
};

export default Hero;
