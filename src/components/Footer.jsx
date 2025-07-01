import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    phone: '',
    address: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8npguob',
      'template_pb5mu7a',
      form.current,
      'ttHTvRzgVhHvWTWm7'
    )
      .then(() => {
        alert("Mesajınız başarıyla gönderildi!");
        setFormData({
          from_name: '',
          reply_to: '',
          phone: '',
          address: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        alert("Bir hata oluştu: " + error.text);
      });
  };

  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="left-section">
          <div className="title-section">
            <h2 className="main-title">Yeni Projenizi</h2>
            <h2 className="main-title">Birlikte Yapalım</h2>
          </div>
          <div className="consultation-text">
            <p>Evde ücretsiz konsültasyon için</p>
            <p>formu doldurun veya bizi arayın.</p>
          </div>
          <div className="contact-info">
            <p className="address">15 Temmuz Mahallesi Koçman Caddesi Demirkol Plaza A-B Blok</p>
            <p className="address">No:54 Bağcılar/İstanbul</p>
            <p className="phone">(212) 652 29 29</p>
          </div>
        </div>

        <div className="right-section">
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group full-width">
              <input type="text" name="from_name" placeholder="Ad Soyad *" value={formData.from_name} onChange={handleInputChange} required />
            </div>
            <div className="form-group full-width">
              <input type="email" name="reply_to" placeholder="E-posta *" value={formData.reply_to} onChange={handleInputChange} required />
            </div>
            <div className="form-group full-width">
              <input type="tel" name="phone" placeholder="Telefon" value={formData.phone} onChange={handleInputChange} />
            </div>
            <div className="form-group full-width">
              <input type="text" name="address" placeholder="Adres" value={formData.address} onChange={handleInputChange} />
            </div>
            <div className="form-group full-width">
              <input type="text" name="subject" placeholder="Konu" value={formData.subject} onChange={handleInputChange} />
            </div>
            <div className="form-group full-width">
              <textarea name="message" placeholder="Mesajınızı buraya yazın..." value={formData.message} onChange={handleInputChange} rows="4"></textarea>
            </div>
            <button type="submit" className="submit-button">Gönder</button>
          </form>
        </div>
      </div>

      {/* Yasal metin ve linkler */}
      <div className="footer-legal">
        <p>© 2025 Özkaymak İnşaat. Tüm hakları saklıdır.</p>
        <div className="footer-links">
          <Link to="/gizlilik">Gizlilik Politikası</Link>
          <span>|</span>
          <Link to="/cerez">Çerez Politikası</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
