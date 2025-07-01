import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cerez = () => {
  return (
    <>
      <Header />
      <br /><br /><br /><br /><br></br><br></br>
      <div style={{ padding: '2.5rem', maxWidth: '900px', margin: 'auto', fontSize: '1.1rem', lineHeight: '1.8', fontFamily: 'Inter, sans-serif' }}>
        <h1 style={{ fontSize: '2rem' }}>Çerez Politikası</h1>
        <p><strong>Son Güncelleme:</strong> 26.02.2025</p>

        <p>Özkaymak İnşaat olarak, web sitemizi ziyaret ettiğinizde deneyiminizi iyileştirmek ve hizmet kalitesini artırmak amacıyla çerezleri kullanıyoruz.</p>

        <h2 style={{ fontSize: '1.5rem' }}>1. Çerez Nedir?</h2>
        <p>Çerezler, web siteleri tarafından tarayıcınıza yerleştirilen küçük metin dosyalarıdır. Sizi tanımaya ve tercihlerinizi hatırlamaya yardımcı olur.</p>

        <h2 style={{ fontSize: '1.5rem' }}>2. Hangi Tür Çerezleri Kullanıyoruz?</h2>
        <ul>
          <li>✅ <strong>Zorunlu Çerezler:</strong> Temel site işlevleri için gereklidir.</li>
          <li>🎯 <strong>Performans ve Analitik:</strong> Site trafiği ve kullanım analizi sağlar.</li>
          <li>🎯 <strong>Reklam ve Hedefleme:</strong> Size özel içerikler ve reklamlar sunar.</li>
          <li>🔧 <strong>İşlevsel:</strong> Kullanıcı adı, dil gibi tercihlerinizi hatırlar.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem' }}>3. Çerezleri Nasıl Yönetebilirsiniz?</h2>
        <p>Tarayıcı ayarları üzerinden çerezleri kontrol edebilirsiniz. Ancak bazı özellikler devre dışı kalabilir.</p>
        <ul>
          <li>Chrome – Ayarları değiştir</li>
          <li>Firefox – Ayarları değiştir</li>
          <li>Safari – Ayarları değiştir</li>
          <li>Edge – Ayarları değiştir</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem' }}>4. Üçüncü Taraf Çerezleri</h2>
        <p>Google Analytics ve Meta Piksel gibi hizmet sağlayıcılarla entegre çerezler kullanılabilir.</p>

        <h2 style={{ fontSize: '1.5rem' }}>5. Çerez Politikasında Değişiklikler</h2>
        <p>Politikamız güncellenebilir, değişiklikler bu sayfadan paylaşılır.</p>

        <h2 style={{ fontSize: '1.5rem' }}>6. İletişim Bilgileri</h2>
        <p>Her türlü soru ve talep için bizimle iletişime geçebilirsiniz.</p>
      </div>
      <Footer />
    </>
  );
};

export default Cerez;
