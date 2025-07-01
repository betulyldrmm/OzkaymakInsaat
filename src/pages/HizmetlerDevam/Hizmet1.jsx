import React from 'react';
import './Hizmet.css';

import hizmet1 from '../../assets/hizmet1.jpg';
import hizmet2 from '../../assets/hizmet2.jpg';
import hizmet3 from '../../assets/hizmet3.jpg';
import hizmet4 from '../../assets/hizmet4.jpg';
import hizmet5 from '../../assets/hizmet5.jpg';
import hizmet6 from '../../assets/hizmet6.jpg';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const services = [
  { id: 1, image: hizmet1, },
  { id: 2, image: hizmet2,  },
  { id: 3, image: hizmet3,  },
  { id: 4, image: hizmet4, },
  { id: 5, image: hizmet5,  },
  { id: 6, image: hizmet6, },
];

const Hizmet1 = () => {
  return (
    <>
      <Header />
      <div className="servicess-section">
        <h2 className="servicess-title">Hizmetlerimiz</h2>
        <div className="servicess-grid">
          {services.map((service) => (
            <div key={service.id} className="services-card">
              <img
                src={service.image}
                alt={service.title}
                className="services-image"
                loading="lazy"
              />
             
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hizmet1;
