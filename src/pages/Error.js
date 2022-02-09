import React from 'react'
import errorImg from '../assets/img/404-image.png'
import logoText from '../assets/img/logo-text.png'

const Error = () => {
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logoText} alt="Petrolida Logo"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span classNameName="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto text-center">
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Event</a>
              <a className="nav-link" href="#">FAQ</a>
              <a className="nav-link" href="#">Contact</a>
              <a className="nav-link sign-in mx-auto mt-3 mt-lg-0 ms-lg-3" href="">Sign in</a>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- End of Navbar --> */}

      {/* <!-- Error 404 --> */}
      <section id="error-404" className="h-full d-flex flex-column align-items-center justify-content-center">
        <div className="container text-center">
          <img src={errorImg} alt="404" className="error-img"/>
          <h1 className="error-title h4">Oops!, Something went wrong</h1>
          <p className="error-desc body2">The page your are looking for is not available</p>
          <a href="" className="error-button">Go Back</a>
        </div>
      </section>
      {/* <!-- End of Error 404 --> */}
    </div>
  )
};

export default Error;
