import React from 'react';
import './Hizmet.css';

import insaatt1 from '../../assets/insaatt1.jpg';
import insaatt2 from '../../assets/insaatt2.jpg';
import santiye3 from '../../assets/santiye3.jpg';
import santiye4 from '../../assets/santiye4.jpg';
import santiye5 from '../../assets/santiye5.jpg';
import santiye6 from '../../assets/santiye6.jpg';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const services = [
  { id: 1, image: insaatt1,  },
  { id: 2, image: insaatt2, },
  { id: 3, image: santiye3, },
  { id: 4, image: santiye4,},
  { id: 5, image: santiye5, },
  { id: 6, image: santiye6, },
];

const Hizmet3 = () => {
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
              />
              <h3>{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Hizmet3;
