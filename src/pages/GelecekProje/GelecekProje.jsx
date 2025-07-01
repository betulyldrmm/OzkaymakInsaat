import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../../components/Header';
import "./GelecekProje.css";
import Footer from '../../components/Footer';

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
      <br></br><br></br><br></br><br></br>
      <div className='proje-wrapper'>
        <div className='anaResim' data-aos="fade-up" data-aos-duration="1000" />
        <div className='yazi-wrapper'>
          <h1 className='tanitim' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              Perola Residence Threesun
          </h1>
          <p className='yaziKutu' data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
        
🏡 Modern Yaşamın Yeni Merkezi
Perola Residence Threesun, estetik mimarisi, geniş yeşil alanları ve lüks detaylarıyla konforu yeniden tanımlıyor
           
          </p>
        </div>
      </div>
      
      <div className='proje-wrapper reverse'>
        <div className='resim2' data-aos="fade-up" data-aos-duration="2000" />
        <div className='yazi-wrapper'>
          <h2 className='tanitim' data-aos="fade-up"  data-aos-delay="200" data-aos-duration="1000">
           Kirazlı Metro Evleri
          </h2>
          <ul className='yaziKutu' data-aos="fade-up" data-aos-delay="100"data-duration="800">
            
🏡 Şehrin Merkezinde Konforlu Yaşam
Kirazlı Metro Evleri, modern mimarisi, ulaşım avantajları ve zengin sosyal olanaklarıyla prestijli bir yaşam sunuyor.
          </ul>
        </div>
      </div>
      
      <div className='proje-wrapper'>
        <div className='resim3' data-aos="fade-up" data-aos-duration="1000" />
        <div className='yazi-wrapper'>
          <h1 className='tanitim' data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
         Parmada Hotel
          </h1>
          <p className='yaziKutu' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            

🏡 Parmada Hotel, modern tasarımı, merkezi konumu ve üstün hizmet anlayışıyla misafirlerine benzersiz bir konaklama deneyimi sunuyor. Rahat odaları, 
lüks detayları ve eksiksiz hizmetleriyle hem iş hem de tatil amaçlı konaklamalar için ideal bir tercih!
          </p>
        </div>
      </div>
      
     
      
 <Footer></Footer>
    </>
  );
};

export default ProjeDevam;
