import React from "react";
import "./Experience.css";
import {BsLayersFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Expeience</h2>
      <div className="container expeience__container">
        <div className="expeience__frontend">
          <h3>Frontend Devlopment</h3>
          <div className="expeaince__content">
            <article className="expeaince__details">
              <BsLayersFill className="expeaince__details__icon" />
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="expeaince__details">
              <BsLayersFill className="expeaince__details__icon" />
             <div>
             <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="expeaince__details">
              <BsLayersFill className="expeaince__details__icon" />
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="expeaince__details">
              <BsLayersFill className="expeaince__details__icon" />
              <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="expeaince__details">
              <BsLayersFill className="expeaince__details__icon" />
              <div>
              <h4>Tailwind</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="expeaince__details">
              <BsLayersFill className="expeaince__details__icon" />
              <div>
              <h4>React js</h4>
              <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
        {/* end Frontend */}
        <div className="expeience__backend">
        <h3>Backend Devlopment</h3>
        <div className="expeaince__content">
          <article className="expeaince__details">
            <BsLayersFill className="expeaince__details__icon" />
            <div>
            <h4>Node js</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>
          <article className="expeaince__details">
            <BsLayersFill className="expeaince__details__icon" />
            <div>
            <h4>MongoDB</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>
          <article className="expeaince__details">
          <BsLayersFill className="expeaince__details__icon" />
            <div>
            <h4>Express js</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="expeaince__details">
            <BsLayersFill className="expeaince__details__icon" />
            <div>
            <h4>MySQL</h4>
            <small className="text-light">Basic</small>
            </div>
          </article>
          <article className="expeaince__details">
            <BsLayersFill className="expeaince__details__icon" />
            <div>
            <h4>Heroku</h4>
            <small className="text-light">Experience</small>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
