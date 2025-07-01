import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import "./ProjeDevam.css";
import kirazli6 from '../assets/kirazli6.jpg';
import kirazli1Img from '../assets/kirazli1.jpg';
import kirazliImg from '../assets/kirazli.jpg';
import kiraz from '../assets/kiraz.jpg';
import kirazli4Img from '../assets/kirazli4.jpg';
import Footer from '../components/Footer';

const ProjeDevam = () => {
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
      <Header />
      <br /><br /><br /><br /><br />
      
      <div className='proje-wrapper'>
        <div 
          className='anaResim' 
          data-aos="fade-up" 
          data-aos-duration="1000"
          style={{backgroundImage: `url(${kirazli1Img})`}}
        />
        <div className='yazi-wrapper'>
          <h1 className='tanitim' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            Kirazlı Metro Evleri
            Şehrin Kalbinde Prestijli Bir Yaşam🏡
          </h1>
          <p className='yaziKutu' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            Modern Yaşam, Merkezi Konum <br />
            Kirazlı Metro Evleri, konforlu ve ulaşımı kolay bir yaşam sunan,<br />
            şehrin en değerli lokasyonlarından birinde yükseliyor. <br />
            Kirazlı Metro İstasyonu'na yürüme mesafesinde yer alan proje, <br />
            E-5 ve TEM otoyollarına kolay erişim sağlayarak İstanbul'un her noktasına hızlı ulaşım imkanı sunuyor.
          </p>
        </div>
      </div>
      
      <div className='proje-wrapper reverse'>
        <div 
          className='resim2' 
          data-aos="fade-up" 
          data-aos-duration="2000"
          style={{backgroundImage: `url(${kirazliImg})`}}
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
          style={{backgroundImage: `url(${kirazli6})`}}
        />
        <div className='yazi-wrapper'>
          <h1 className='tanitim' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            🌿 Sosyal Olanaklar Ve Yeşil Alanlar
          </h1>
          <p className='yaziKutu' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            Kirazlı Metro Evleri, sadece konforlu daireleriyle değil, sosyal yaşamı destekleyen geniş olanaklarıyla da öne çıkıyor. 
            Peyzaj alanları ve yürüyüş yolları, açık ve kapalı yüzme havuzları, fitness merkezi, 
            sauna ve spor alanları, çocuk oyun alanları, 7/24 güvenlik ve kapalı otopark gibi birçok olanağa sahip.
          </p>
        </div>
      </div>
      
      <div className='proje-wrapper reverse'>
        <div 
          className='resim4' 
          data-aos="fade-up" 
          data-aos-duration="1000"
          style={{backgroundImage: `url(${kiraz})`}}
        />
        <div className='yazi-wrapper'>
          <h1 className='tanitim' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            🏗 Yüksek Kalite Standartları
          </h1>
          <p className='yaziKutu' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            Deprem yönetmeliğine uygun olarak inşa edilen Kirazlı Metro Evleri, 
            modern mimari ve dayanıklı malzemelerle inşa edilerek güvenli ve uzun ömürlü bir yaşam sunuyor.
          </p>
        </div>
      </div>
      
      <div className='proje-wrapper'>
        <div 
          className='resim5' 
          data-aos="fade-up" 
          data-aos-duration="1000"
          style={{backgroundImage: `url(${kirazli4Img})`}}
        />
        <div className='yazi-wrapper'>
          <h1 className='tanitim' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            📈 Yatırım İçin Büyük Fırsat
          </h1>
          <p className='yaziKutu' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            Kirazlı bölgesi, her geçen gün değer kazanan lokasyonlardan biri olup, 
            Kirazlı Metro Evleri yüksek yatırım getirisi ve güçlü prim potansiyeli ile yatırımcılar için cazip bir seçenek sunuyor.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjeDevam;