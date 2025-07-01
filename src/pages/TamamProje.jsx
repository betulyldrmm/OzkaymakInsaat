import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import "./ProjeDevam.css";


import rezidansImg from '../assets/rezidans.jpg';
import rezidans2Img from '../assets/rezidans2.png';
import resim4Img from '../assets/tamam1.jpg';
import resim5Img from '../assets/rez4.jpg';
import Footer from '../components/Footer';

const ProjeTamam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100, 
      delay: 0,
      easing: 'ease-in-out'
    });

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header /><br></br><br></br><br></br><br></br><br></br>
      
      <div className='proje-wrapper'>
        <div 
          className='anaResim' 
          data-aos="fade-up" 
          data-aos-duration="1000"
          style={{backgroundImage: `url(${rezidansImg})`}}
        />
        <div className='yazi-wrapper'>
          <h1 className='tanitim' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            Perola Residence Threesun
            Lüks ve Konforun Yeni Adresi
          </h1>
          <p className='yaziKutu' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            🏡 Modern Mimari, Prestijli Yaşam <br />
            Perola Residence Threesun, şık tasarımı, geniş yaşam alanları ve merkezi konumuyla<br></br> modern şehir hayatını yeniden tanımlıyor. 
            <br></br> Geniş peyzaj alanları ve sosyal donatılarıyla hem konforlu hem de prestijli bir yaşam sunuyor.
          </p>
        </div>
      </div>
      
      <div className='proje-wrapper reverse'>
        <div 
          className='resim2' 
          data-aos="fade-up" 
          data-aos-duration="2000"
          style={{backgroundImage: `url(${rezidans2Img})`}}
        />
        <div className='yazi-wrapper'>
          <h2 className='tanitim' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            📍 Lokasyon Avantajı
          </h2>
          <ul className='yaziKutu' data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <li>Kirazlı Metro İstasyonu'na birkaç dakika uzaklıkta</li>
            <li>E-5 ve TEM bağlantı yollarına kolay erişim</li>
            <li>Okullar, sağlık merkezleri ve alışveriş noktalarına yakın konum</li>
          </ul>
        </div>
      </div>
      
      <div className='proje-wrapper'>
        <div 
          className='resim3' 
          data-aos="fade-up" 
          data-aos-duration="1000"
          style={{backgroundImage: `url(${rezidansImg})`}}
        />
        <div className='yazi-wrapper'>
          <h1 className='tanitim' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            🌿

Sosyal Olanaklar ve Yeşil Alanlar
          </h1>
          <p className='yaziKutu' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <li> Perola Residence Threesun, sakinlerine lüks bir yaşam sunan birçok olanakla donatılmıştır:</li>

<li>Açık ve kapalı yüzme havuzları</li>

<li>Fitness merkezi ve spa alanı</li>

<li>Çocuk oyun alanları ve yürüyüş parkurları</li>

<li>Kapalı otopark ve 7/24 güvenlik hizmeti</li>
          </p>
        </div>
      </div>
      
      <div className='proje-wrapper reverse'>
        <div 
          className='resim4' 
          data-aos="fade-up" 
          data-aos-duration="1000"
          style={{backgroundImage: `url(${resim4Img})`}}
        />
        <div className='yazi-wrapper'>
          <h1 className='tanitim' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            🏗 Yüksek Kalite Standartları
          </h1>
          <p className='yaziKutu' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            Deprem yönetmeliğine uygun olarak inşa edilen<br></br>
             Perola Residence Threesun, yüksek kaliteli<br></br>
              malzemeler ve modern mühendislik çözümleriyle güvenli bir yaşam sunar.
          </p>
        </div>
      </div>
      
      <div className='proje-wrapper'>
        <div 
          className='resim5' 
          data-aos="fade-up" 
          data-aos-duration="1000"
          style={{backgroundImage: `url(${resim5Img})`}}
        />
        <div className='yazi-wrapper'>
          <h1 className='tanitim' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            📈 Yatırım İçin Büyük Fırsat
          </h1>
          <p className='yaziKutu' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            Stratejik konumu ve sunduğu ayrıcalıklarla yüksek yatırım getirisi vaat eden<br>
            </br> Perola Residence Threesun, hem oturum hem de 
            <br></br>yatırım için ideal bir seçenek sunuyor.
           </p>
        </div>
      </div>

      
     <Footer></Footer>
    </>
  );
};

export default ProjeTamam;