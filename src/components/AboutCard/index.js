import React from "react";

function AboutCard() {
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
                  <h2 className="card-title">About Me</h2>
                  <hr className="card-subtitle mb-2 text-muted"></hr>
                </div>
              </div>

              {/* Card Body */}
              <div className="card-text">
                <div className="row">
                  <div className="col-md-4">                    
                    <img src="/img/headshot.jpg" alt="Headshot" className="img-fluid"></img>
                  </div>

                  <div className="col-md-8 pr-5">
                    <p>I have been interested in computers and programming all of my life. My uncle gave me my first computer at age 7: a Commodore 64. Before I knew it I was reading books and magazines learning how to program in BASIC. In college I majored in Computer Science with a focus on Networking. I graduated with an Associates Degree in Computer Science.</p>

                    <p>I was born and raised in the Finger Lakes region of New York state. I have lived in Massachusetts, Connecticut, Illinois, and Kentucky. I currently reside in New Bern, North Carolina with my lovely wife and two wonderful children.</p>

                    <p>I have always been interested in learning to design and program web sites, and the University of North Carolina's Full Stack Boot Camp seemed like a perfect fit. I am looking forward to the challenges ahead on my journey to becoming a Junior Developer.</p>
                  </div>
                </div>
              </div>
            </div>                
          </div>
        </div>
      </article>
    </section>
  );
}

export default AboutCard;