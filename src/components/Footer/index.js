import React from 'react';
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="text-center">
          <span><i className="fa fa-copyright" aria-label="Copyright Symbol"></i> 2020, Jesse O'Donoghue</span>          
          <span className="github"><a href="https://github.com/jesseodonoghue" target="_blank" rel="noopener noreferrer" className="btn btn-sm" role="button" aria-pressed="true"><i className="fa fa-github" aria-label="Github"></i></a></span>
          <span className="linkedin"><a href="https://www.linkedin.com/in/jesse-o-donoghue-618980110/" target="_blank" rel="noopener noreferrer" className="btn btn-sm" role="button" aria-pressed="true"><i className="fa fa-linkedin" aria-label="LinkedIn"></i></a></span>
          <span className="resume"><a href="/resume/ODonoghue_Resume.pdf" download className="btn btn-sm" role="button" aria-pressed="true"><i className="fa fa-file-text-o" aria-label="Resume Download"></i></a></span>
      </div>
    </footer>
  )
}

export default Footer;