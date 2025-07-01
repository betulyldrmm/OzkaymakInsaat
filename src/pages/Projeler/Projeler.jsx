
import React, { useEffect, useState } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './Projeler.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


import turizm3 from '../../assets/turizm3.jpg';
import kirazli from '../../assets/kirazli.jpg';
import rezidans from '../../assets/rezidans.jpg';

import parmada1 from '../../assets/parmada1.jpg';
import parmada2 from '../../assets/parmada2.jpg';
import parmada3 from '../../assets/parmada3.jpg';
import parmada4 from '../../assets/parmada4.jpg';

import resim5 from '../../assets/resim5.png';
import kirazli4 from '../../assets/kirazli4.jpg';
import kirazlı from '../../assets/kirazlı.png';
import kirazliii from '../../assets/kirazliii.png';

import rez1 from '../../assets/rez1.jpg';
import rez2 from '../../assets/rez2.jpg';
import rez3 from '../../assets/rez3.jpg';
import rezidans2 from '../../assets/rezidans2.png';

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projectTitle, setProjectTitle] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      id: 1,
      title: "PROJE 1 - KİRAZLI METRO EVLERİ",
      description: "\ud83c\udfe1 Şehrin Merkezinde Konforlu Yaşam Kirazlı Metro Evleri, modern mimarisi, ulaşım avantajları ve zengin sosyal olanaklarıyla prestijli bir yaşam sunuyor.",
      image: kirazli,
      extraImages: [resim5, kirazliii, kirazlı, kirazli4],
      status: "Devam Ediyor"
    },
    {
      id: 2,
      title: "PROJE 2 - PARMADA HOTEL",
      description: "\ud83c\udfe1 Parmada Hotel, modern tasarımı, merkezi konumu ve üstün hizmet anlayışıyla misafirlerine benzersiz bir konaklama deneyimi sunuyor.",
      image: turizm3,
      extraImages: [parmada1, parmada2, parmada3, parmada4],
      status: "Tamamlandı"
    },
    {
      id: 3,
      title: "PROJE 3 - PEROLA REZİDANCE THREESUN",
      description: "\ud83c\udfe1 Modern Yaşamın Yeni Merkezi Perola Threesun, estetik mimarisi, geniş yeşil alanları ve lüks detaylarıyla konforu yeniden tanımlıyor.",
      image: rezidans,
      extraImages: [rez1, rez2, rez3, rezidans2],
      status: "Tamamlandı"
    }
  ];

  const openModal = (images, title, index = 0) => {
    setCurrentImages(images);
    setProjectTitle(title);
    setCurrentImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImages([]);
    setCurrentImageIndex(0);
    setProjectTitle('');
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!modalOpen) return;
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowRight') nextImage();
      else if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [modalOpen, currentImages.length]);

  return (
    <>
      <Header />
      <a href="#ortayazi" className="scroll-down-arrow">
        <span className="arrow"></span>
      </a>
      <div className="hero-sectio">
        <div className="hero-content">
          <h1>PROJELERİMİZ</h1>
          <p>ÖZKAYMAK İNŞAAT</p>
        </div>
      </div>

      <div className='ortayazi' id="ortayazi">
        <h2>🏗️ KALİTELİ YAŞAM ALANLARI</h2>
        <p>
          Özkaymak İnşaat olarak konut, ticari alan ve karma projeler geliştirerek
          sadece bugünün değil geleceğin de ihtiyaçlarına uygun yapılar tasarlıyoruz.
        </p>
      </div>

      <div className="card-container">
        {projects.map((project, index) => (
          <div key={project.id} className="card" data-aos="fade-up">
            <div className="card-top">
              <img src={project.image} alt={project.title} className="card-img" loading="lazy" />
              <div className="card-text">
                <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
            <div className="extra-images">
              {project.extraImages.map((img, imgIndex) => (
                <img 
                  key={imgIndex} 
                  src={img} 
                  alt={`${project.title} - ${imgIndex + 1}`} 
                  className="extra-img" 
                  loading="lazy"
                  onClick={() => openModal(project.extraImages, project.title, imgIndex)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <button className="modal-nav modal-prev" onClick={prevImage}>‹</button>
            <img 
              src={currentImages[currentImageIndex]} 
              alt={`${projectTitle} - ${currentImageIndex + 1}`}
              className="modal-image"
            />
            <button className="modal-nav modal-next" onClick={nextImage}>›</button>
            <div className="modal-counter">
              {currentImageIndex + 1} / {currentImages.length}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Projects;
