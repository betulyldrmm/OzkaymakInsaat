import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Gizlilik = () => {
  return (
    <>
      <Header></Header>
      <br /><br /><br /><br /><br></br><br></br>
      <div style={{ padding: '2.5rem', maxWidth: '900px', margin: 'auto', fontSize: '1.1rem', lineHeight: '1.8', fontFamily: 'Inter, sans-serif' }}>
        <h1 style={{ fontSize: '2rem' }}>Gizlilik Politikası</h1>
        <p><strong>Son Güncelleme:</strong> 26.02.2025</p>

        <p>Özkaymak İnşaat olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğini korumayı taahhüt ediyoruz. Bu gizlilik politikası, kişisel verilerinizin nasıl toplandığını, işlendiğini ve korunduğunu açıklar.</p>

        <h2 style={{ fontSize: '1.5rem' }}>1. Toplanan Bilgiler</h2>
        <ul>
          <li><strong>Kişisel Bilgiler:</strong> Ad, soyad, e-posta adresi, telefon numarası vb.</li>
          <li><strong>Otomatik Toplanan Bilgiler:</strong> IP adresi, tarayıcı bilgileri, çerezler ve site kullanım verileri.</li>
          <li><strong>Hizmet Kullanımı Bilgileri:</strong> Talepler, formlar ve geri bildirimler.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem' }}>2. Bilgilerin Kullanımı</h2>
        <ul>
          <li>Hizmet sağlama ve müşteri desteği</li>
          <li>Kampanya ve proje önerileri sunma</li>
          <li>Site deneyimini iyileştirme</li>
          <li>Yasal yükümlülüklere uyum</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem' }}>3. Çerezler (Cookies) ve Takip Teknolojileri</h2>
        <p>Çerezler, tarayıcınız tarafından saklanan küçük dosyalardır ve kişisel bilgilerinize erişim sağlamazlar. Tarayıcı ayarlarından devre dışı bırakabilirsiniz.</p>

        <h2 style={{ fontSize: '1.5rem' }}>4. Üçüncü Taraflarla Paylaşım</h2>
        <ul>
          <li>Yasal gerekliliklerle resmi makamlar</li>
          <li>İş ortaklarıyla sınırlı bilgi paylaşımı</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem' }}>5. Verilerin Korunması</h2>
        <p>Kişisel verileriniz şifreleme ve güvenlik duvarları ile korunur.</p>

        <h2 style={{ fontSize: '1.5rem' }}>6. Kullanıcı Hakları</h2>
        <ul>
          <li>✔️ Bilgilendirilme hakkı</li>
          <li>✔️ Erişim hakkı</li>
          <li>✔️ Düzeltme hakkı</li>
          <li>✔️ Silme hakkı</li>
          <li>✔️ İtiraz hakkı</li>
        </ul>
        <p>Haklarınız için [İletişim Bilgileri] bölümüne başvurabilirsiniz.</p>

        <h2 style={{ fontSize: '1.5rem' }}>7. Gizlilik Politikası Güncellemeleri</h2>
        <p>Bu politika zamanla güncellenebilir. Güncellemeleri bu sayfadan takip edebilirsiniz.</p>

        <h2 style={{ fontSize: '1.5rem' }}>8. İletişim Bilgileri</h2>
        <p>Her türlü soru ve talep için bizimle iletişime geçebilirsiniz.</p>
      </div>
      <Footer />
    </>
  );
};

export default Gizlilik;
