import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {

  render() {
    return (
      <>
        {/* <!-- The content of your page would go here. --> */}

        <footer className="footer-distributed">

          <div className="footer-left">
              {/* <img src="img/logo.png"/> */}
            <h3><span>Poplar Power</span></h3>

            <p className="footer-links">
              <a href="/">Home</a>
              |
              <a href="/">Blog</a>
              |
              <a href="/poplarpower/about">About</a>
            </p>

            <p className="footer-company-name">© 2021.</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
                <p><span>No 5, telephone avenue, fine road</span>
                Lagos, Nigeria</p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>081723923902</p>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <p><a href="mailto:support@eduonix.com">support@poplarpower.com</a></p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
            <div className="footer-icons">
              <a href="/"><i className="fa fa-facebook"></i></a>
              <a href="/"><i className="fa fa-twitter"></i></a>
              <a href="/"><i className="fa fa-instagram"></i></a>
              <a href="/"><i className="fa fa-linkedin"></i></a>
              <a href="/"><i className="fa fa-youtube"></i></a>
            </div>
          </div>
        </footer>
      </>
    )
  }
}

export default Footer;