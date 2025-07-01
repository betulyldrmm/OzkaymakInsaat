import React, { useEffect } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import './Hakkinda.css';
import hak1 from "../../assets/hak1.png";
import hak2 from "../../assets/hak2.png";
import hak3 from "../../assets/hak3.png";
import hak4 from "../../assets/hak4.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const ScrollDownArrow = () => {
  return (
    <a href="#next-section" className="scroll-down-arrow">
      <span className="arrow"></span>
    </a>
  );
};

const Hakkinda = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true 
    });
  }, []);

  return (
    <>
      <Header />
      <div className="hero-sectionn">
        <div className="hero-content">
          <h1>HAKKIMIZDA</h1>
          <p>ÖZKAYMAK İNŞAAT</p>
        </div>
        <ScrollDownArrow />
      </div>

      <div className='ortayazii' id="next-section">
        <h2>📍 KALİTELİ YAŞAM ALANLARI</h2>
        <p>
          Özkaymak İnşaat olarak konut, ticari alan ve karma projeler geliştirerek
          sadece bugünün değil geleceğin de ihtiyaçlarına uygun yapılar tasarlıyoruz.
          Projelerimizde yenilikçi mimari anlayışı, çevre dostu çözümler ve yüksek mühendislik standartlarını temel alarak,
          müşterilerimize konforlu ve güvenli yaşam alanları sunuyoruz. Güven, Kalite ve Yenilikçiliğin Adı

1985 yılında ticaret hayatına adım atan Özkaymak Grup, yıllar içinde farklı sektörlerde edindiği tecrübeyi inşaat sektörüne taşıyarak Özkaymak İnşaat'ı hayata geçirdi. Güvenilir yapılar inşa etme vizyonuyla hareket eden 
firmamız, modern, dayanıklı ve estetik projeleri ile sektörde öncü konuma gelmiştir.
        </p>
      </div>

      <div className="cardd-container">
        <div className="cardd" data-aos="fade-right">
          <img src={hak1} alt="İnşaat öncesi tasarım ve planlama süreci" className="cardd-img" loading="lazy" />
          <div className="cardd-text">
            <h3>İNŞAAT ÖNCESİ TASARIM</h3>
            <p>Özkaymak İnşaat, projelerinizi hayata geçirmeden önce detaylı analizler yaparak estetik ve fonksiyonel tasarımlar oluşturur. Mimarlarımız ve mühendislerimiz, en iyi çözümleri sunmak için titizlikle çalışır.</p>
          </div>
        </div>

        <div className="cardd" data-aos="fade-left">
          <img src={hak2} alt="Tasarım ve inşaat için keşif çalışması" className="cardd-img" loading="lazy" />
          <div className="cardd-text">
            <h3>TASARIM VE İNŞAAT İÇİN KEŞİF ÇALIŞMASI</h3>
            <p>Projeleriniz için yerinde keşif yaparak en uygun inşaat planını oluşturuyoruz. Alan analizi, maliyet optimizasyonu ve proje uyumluluğu gibi süreçlerle, en iyi sonuçları elde etmenizi sağlıyoruz.</p>
          </div>
        </div>
      </div>
      
      <div className="cardd-container">
        <div className="cardd" data-aos="fade-right">
          <img src={hak3} alt="Yerinde konsültasyon ve danışmanlık hizmeti" className="cardd-img" loading="lazy" />
          <div className="cardd-text">
            <h3>YERİNDE KONSÜLTASYONLAR</h3>
            <p>Profesyonel ekibimiz, size özel çözümler sunmak için yerinde danışmanlık hizmeti sağlar. Böylece ihtiyaçlarınıza en uygun mimari ve mühendislik çözümlerini sunarak projelerinizi hayata geçiriyoruz.</p>
          </div>
        </div>

        <div className="cardd" data-aos="fade-left">
          <img src={hak4} alt="Mükemmel son dokunuşlar ve detay işçilik" className="cardd-img" loading="lazy" />
          <div className="cardd-text">
            <h3>MÜKEMMEL SON DOKUNUŞLAR</h3>
            <p>Her projemizde kusursuz detaylara önem veriyoruz. Kaliteli malzemeler ve ustalıkla tamamlanan yapılarımız estetik ve fonksiyonelliği bir araya getirerek yaşam alanlarınıza değer katıyor. Bu açıklamalar, hem kullanıcıların ilgisini çekecek hem de SEO açısından web sitenizin görünürlüğünü artıracaktır. 🚀</p>
          </div>
        </div>
      </div>

      <section className="guven-kalitee">
        <h2>ÖZKAYMAK İNŞAAT İLE GÜVENLİ VE KALİTELİ YAPILAR</h2>
        <p>
          Özkaymak İnşaat olarak, her projemizde yüksek kalite standartlarını esas alıyor, modern mühendislik 
          çözümleri ve dayanıklı malzemeler ile güvenli yapılar inşa ediyoruz. Müşteri memnuniyetini ve 
          sürdürülebilirliği ön planda tutarak, yaşam alanlarınızı konforlu ve uzun ömürlü hale getiriyoruz.
        </p>

        <div className="guven-kalitee-grid">
          <div className="kalite-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Kalite Belgeleri ve Sertifikalar</h3>
            <p>
              Projelerimiz, uluslararası kalite ve güvenlik standartlarına uygun olarak inşa edilmektedir. 
              Kullanılan malzemeler ve işçilik, bağımsız denetim kuruluşları tarafından onaylanmış olup, 
              tüm projelerimiz garanti kapsamında sunulmaktadır.
            </p>
          </div>

          <div className="kalite-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Zamanında Teslim ve Kusursuz İşçilik</h3>
            <p>
              Belirlenen teslim sürelerine sadık kalıyor ve inşaat sürecinde profesyonel ekiplerimizle 
              her aşamayı titizlikle yönetiyoruz. Müşteri beklentilerini en üst düzeyde karşılayacak 
              şekilde planlıyoruz.
            </p>
          </div>

          <div className="kalite-card" data-aos="fade-up" data-aos-delay="300">
            <h3>Müşteri Memnuniyeti ve Destek</h3>
            <p>
              Satış sonrası garanti ve teknik hizmetlerimiz ile müşteri memnuniyetini sürdürülebilir 
              kılıyoruz. Her türlü bakım ve destek taleplerine hızlı çözümler sunuyoruz.
            </p>
          </div>
        </div>

        <div className="guven-footer">
          <p>ÖZKAYMAK İNŞAAT İLE GELECEĞE GÜVENLE BAKIN</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Hakkinda;
