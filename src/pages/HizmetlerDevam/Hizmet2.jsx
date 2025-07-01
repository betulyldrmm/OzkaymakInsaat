import React from 'react';
import './Hizmet.css';

import santiye1 from '../../assets/insaatt1.jpg';
import santiye2 from '../../assets/santiye2.jpg';
import insaatt3 from '../../assets/insaatt3.jpg';
import insaatt4 from '../../assets/insaatt4.jpg';
import insaatt5 from '../../assets/insaatt5.jpg';
import insaatt6 from '../../assets/insaatt6.jpg';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const services = [
  { id: 1, image: santiye1, },
  { id: 2, image: santiye2, },
  { id: 3, image: insaatt3, },
  { id: 4, image: insaatt4 ,},
  { id: 5, image: insaatt5 ,},
  { id: 6, image: insaatt6, },
];

const Hizmet2 = () => {
  return (
    <>
      <Header />
      <div className="servicess-section">
        <h2 className="servicess-title">Hizmetlerimiz</h2>
        <div className="servicess-grid">
          {services.map((service) => (
            <div key={service.id} className="services-card">
              <img src={service.image} alt={service.title} className="services-image" />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Hizmet2;
