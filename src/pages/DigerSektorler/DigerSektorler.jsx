import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './DigerSektorler.css'
import kiyafet from '../../assets/kumas4.jpg'
import insaat from '../../assets/insaat.jpg'
import doseme from '../../assets/doseme.jpg' 
import resepsiyon from '../../assets/resepsiyon.jpg' 

const DigerSektorler = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: true,
    });
  }, []);

  const scrollToNextSection = (e) => {
    e.preventDefault();
    const target = document.querySelector("#next-section");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <a href="#next-section" className="scroll-down-arrow" onClick={scrollToNextSection}>
        <span className="arrow"></span>
      </a>

      <div className='anaResim1'>
        <div className='ilkYazi'>
          <h1>DİĞER SEKTÖRLERDE BİZ</h1>
          <h3>ÖZKAYMAK İNŞAAT</h3>
          <a
            href="https://www.byfabric.com.tr/kurumsal/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '1.5rem',
              marginTop: '1.5rem',
              color: '#ffffff',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            ByFabric web sayfası
          </a>
        </div>
      </div>

      <div className='yazi' id="next-section">
        <p>
          Özkaymak Grup, inşaat, tekstil, gıda ve turizm sektörlerinde güçlü yatırımlarıyla faaliyet göstermektedir.
          Kalite, güven ve yenilikçi yaklaşımıyla her sektörde fark yaratarak müşteri memnuniyetini en üst seviyeye
          çıkarmayı hedeflemektedir.
        </p>
      </div>

      <div className='kategoriler' data-aos='fade-up' data-aos-delay='200' data-aos-duration='800'>
        <img src={doseme} alt='Tekstil ve Döşemelik Kumaş' />
        <div className='yazi2'>
          <h3><span className="kategori-numara">01|<br></br></span> TEKSTİL | DÖŞEME KUMAŞ</h3>
          <p>
            Özkaymak Grup, yenilikçi tasarımlar ve üstün kalite anlayışıyla tekstil ve döşemelik kumaş sektöründe fark yaratıyor.
            Dayanıklı, şık ve fonksiyonel kumaş seçenekleri ile ev ve ticari mekanlarınıza değer katıyoruz.
          </p>
        </div>
      </div>

      <div className='kategoriler2' data-aos='fade-up' data-aos-delay='400' data-aos-duration='800'>
        <img src={kiyafet} alt='tekstil giyim kumaş' />
        <div className='yazi2'>
          <h3><span className="kategori-numara">02|</span> TEKSTİL | GİYİMLİK KUMAŞ</h3>
          <p>
            Özkaymak Grup, yüksek kalite standartlarında üretilen giyimlik kumaşlarıyla tekstil sektörüne yenilikçi çözümler sunuyor. 
            Şık, konforlu ve dayanıklı kumaş seçenekleriyle, modaya yön veren tasarımlar için ideal tercihiniz!
          </p>
        </div>
      </div>

      <div className='kategoriler' data-aos='fade-up' data-aos-delay='600' data-aos-duration='800'>
        <img src={resepsiyon} alt='Turizm Sektörü' />
        <div className='yazi2'>
          <h3><span className="kategori-numara">03|</span> TURİZM & OTEL</h3>
          <p>
            Özkaymak Grup, turizm ve otelcilik sektöründe sunduğu üstün hizmet anlayışıyla misafirlerine konforlu ve keyifli bir konaklama deneyimi sunuyor.
            Modern tasarımlar, kusursuz hizmet ve merkezi konumlarla unutulmaz anlar yaşayın!
          </p>
        </div>
      </div>

      <div className='kategoriler2' data-aos='fade-up' data-aos-delay='800' data-aos-duration='800'>
        <img src={insaat} alt='İnşaat Sektörü' />
        <div className='yazi2'>
          <h3><span className="kategori-numara">04|</span> İNŞAAT SEKTÖRÜ</h3>
          <p>
            Özkaymak Grup, modern, güvenli ve estetik yapılar inşa ederek yaşam alanlarını yeniden şekillendiriyor. 
            Yenilikçi mimari anlayış, yüksek kalite standartları ve sürdürülebilir çözümler ile geleceğe değer katıyoruz.
          </p>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default DigerSektorler;
