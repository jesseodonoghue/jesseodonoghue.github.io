import React, { useState } from "react";
import PortfolioCard from "../components/PortfolioCard";
import projectArray from "../projects.json";

function Portfolio() {
  const [projects] = useState(projectArray);

  return (
    <section className="container">
      <article className="row">
        <div className="col-md-12">

          {/* Info Card */}
          <div className="card">
            <div className="card-body">
                
              {/* Card Header */}
              <div className="row">
                <div className="col-md-12">
                  <h2 className="card-title">My Projects</h2>
                  <hr className="card-subtitle mb-2 text-muted"></hr>
                </div>
              </div>

              {/* Card Body */}
              <div className="card-text">
                <div className="row">

                  {/* Map each project to a card component */}
                  {projects.map(project => (
                    <PortfolioCard 
                      img={project.img}
                      url={project.url}
                      title={project.title}
                      description={project.description}
                    />
                  ))}
                </div>
              </div>
            </div>                
          </div>
        </div>
      </article>
    </section>
  );
}

export default Portfolio;