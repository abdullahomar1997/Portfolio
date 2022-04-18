import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Taiyaki",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17723547-Taiyaki",
  },

  {
    id: 2,
    image: IMG2,
    title: "Nature",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17723547-Taiyaki",
  },

  {
    id: 3,
    image: IMG3,
    title: "Froggy",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17723547-Taiyaki",
  },

  {
    id: 4,
    image: IMG4,
    title: "Sun & moon",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17723547-Taiyaki",
  },

  {
    id: 5,
    image: IMG5,
    title: "Pen Tool Patch ",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17723547-Taiyaki",
  },

  {
    id: 6,
    image: IMG6,
    title: "Tiger",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17723547-Taiyaki",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>

      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
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

export default Portfolio;
