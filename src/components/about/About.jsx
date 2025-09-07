import React from 'react';
import './about.css'; // About komponenti uchun uslublar faylini import qilamiz

// Ikonkalarni SVG sifatida import qilish yoki ishlatish
const WebsiteIcon = () => <svg fill="currentColor" viewBox="0 0 20 20">...</svg>; // SVG kodingizni shu yerga qo'ying
const AppIcon = () => <svg fill="currentColor" viewBox="0 0 20 20">...</svg>;
const UiUxIcon = () => <svg fill="currentColor" viewBox="0 0 20 20">...</svg>;
const PhotoIcon = () => <svg fill="currentColor" viewBox="0 0 20 20">...</svg>;


const About = ({ data }) => {
  // ID bo'yicha ikonkani tanlash funksiyasi
  const getIconById = (id) => {
    switch (id) {
      case 1:
        return <WebsiteIcon />;
      case 2:
        return <AppIcon />;
      case 3:
        return <UiUxIcon />;
      case 4:
        return <PhotoIcon />;
      default:
        return null;
    }
  };

  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <p className="our-services">OUR SERVICES</p>
          <h2>WHAT WE DO?</h2>
          <p className="lorem-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <button className="view-all-btn">VIEW ALL</button>
        </div>
        <div className="services-grid">
          {data.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                {/* Ikonkani ID orqali chaqiramiz */}
                {getIconById(service.id)}
              </div>
              <h1 className='icon'>{service.icon}</h1>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
