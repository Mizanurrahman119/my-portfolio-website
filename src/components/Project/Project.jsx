import React from "react";
import "./Project.css";

import IMG_1 from "../../assets/project-1.jpg";
import IMG_2 from "../../assets/project-2.jpg";
import IMG_3 from "../../assets/project-3.png";
import IMG_4 from "../../assets/project-4.jpg";
import IMG_5 from "../../assets/project-5.jpg";
import IMG_6 from "../../assets/project-6.png";

const Project = () => {
  const data = [
    {
      id: 1,
      image: IMG_1,
      title: "Motor bike sales center",
      github: "https://github.com/Mizanurrahman119/motor-bike-sales--client-site-",
      demo: "https://bike-sales-center.web.app/",
    },
    {
      id: 2,
      image: IMG_2,
      title: "Tourist sport traveling",
      github: "https://github.com/Mizanurrahman119/tourist-spots-traveling-client-site",
      demo: "https://tourist-spots-traveling.web.app/",
    },
    {
      id: 3,
      image: IMG_3,
      title: "Digital Health Care Clinic",
      github: "https://github.com/Mizanurrahman119/digital-health-care-clinic",
      demo: "https://react-website-with-authentic.web.app/",
    },
    {
      id: 4,
      image: IMG_4,
      title: "Doctors portal",
      github: "https://github.com/Mizanurrahman119/my-doctor-portal-website--client-site-",
      demo: "https://doctors-portal-project-3c0cf.web.app/",
    },
    {
      id: 5,
      image: IMG_5,
      title: "Car servicing center",
      github: "https://github.com/Mizanurrahman119/Car-Servicing-Center",
      demo: "https://car-servicing-center.web.app/",
    },
    {
      id: 6,
      image: IMG_6,
      title: "Movies and shows",
      github: "https://github.com/Mizanurrahman119/Movie-poster-website-with-react-redux",
      demo: "https://movies-and-shows-app.firebaseapp.com/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item__image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item__cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
