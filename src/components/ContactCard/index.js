import React from "react";

function ContactCard () {
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
                  <h2 className="card-title">Contact Me</h2>
                  <hr className="card-subtitle mb-2 text-muted"></hr>
                </div>
              </div>

              {/* Card Body */}
              <div className="card-text">
                <div className="row">
                                
                  {/* Contact Form */}                                
                  <div className="col-md-12">
                    <form>
                      <div className="form-group">
                        <label for="InputName1">Name</label>
                        <input type="text" className="form-control" id="InputName1"></input>
                      </div>
                        <div className="form-group">
                          <label for="InputEmail1">Email address</label>
                          <input type="email" className="form-control" id="InputEmail1"></input>
                        </div>

                        <div className="form-group">
                          <label for="FormControlTextarea1">Your Message</label>
                          <textarea className="form-control" id="FormControlTextarea1" rows="3"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" id="submit-button">Submit</button>
                    </form>
                  </div>                                
                </div>
              </div>
            </div>                    
          </div>
        </div>
      </article>
    </section>
  )
}

export default ContactCard;