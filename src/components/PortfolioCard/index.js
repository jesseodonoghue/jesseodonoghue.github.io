import React from "react";
import "./style.css";

function PortfolioCard({ img, url, title, description }) {
  return (
    <div class="col-md-6">                            
      <div class="project">
        <a href={url} target="_blank" rel="noopener noreferrer"><img src={img} alt={title} class="img-fluid"></img></a>
        <p><span className="bold">App Repo:</span> <a href={url} target="_blank" rel="noopener noreferrer">{title}</a></p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;