import React from 'react';
import '../assets/css/main.scss'
import 'animate.css'

import logo from '../assets/img/home/logo-petrolida-desktop.svg'

const Home = () => {
  return (
    <div>
      {/* <!-- nav --> */}
      <nav>
        <div className="container d-flex align-items-center justify-content-between">
          <a href="/" id="logo-petrolida">
            <img src={logo} alt="Logo Petrolida" />
          </a>
          <ul className="d-flex animate__animated" id="list-link-nav">
            <li><a href="">About</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="" className="sign-in">Sign in</a></li>
          </ul>
          <button className="d-block d-md-none btn shadow-none" id="btn-nav"><img src="../assets/img/home/hamb-nav.svg" alt="Button Navigation" id="img-btn-nav"/></button>
        </div>
      </nav>
      {/* <!-- /end nav --> */}

      {/* <!-- hero --> */}
      <section id="hero" className="d-flex align-items-center text-center mt-3 mt-md-0 position-relative">
        <div className="position-absolute" id="floatingHero1"></div>
        <div className="position-absolute" id="floatingHero2"></div>
        <div className="container text-white">
          <h1 className="mb-3 mb-md-5 fw-bold">Utilizing <span className="text-green">sustainable</span> ideas & innovations to reinforce the <span className="text-green">future</span> of <span className="text-green">energy</span> industry</h1>
          <p className="fw-light mb-5">Explore and disclose innovation regarding today’s energy challenges through providing them a chance to achieve substantial and competitive experiences to advance their excellence.</p>
          <div className="d-md-flex justify-content-center">
            <a href="#" className="d-none d-md-block btn-hero-first">Learn More</a>
            <a href="#" className="d-block btn-hero-second">Register</a>
            <a href="#" className="d-block d-md-none btn-hero-third">Learn More</a>
          </div>
        </div>
      </section>
      {/* <!-- /hero --> */}

      {/* <!-- video --> */}
      <section id="video" className="mt-5 mt-md-0 position-relative">
        <div className="position-absolute" id="floatingVideo1"></div>
        <div className="position-absolute" id="floatingVideo2"></div>
        <div className="container text-white">
          <iframe w src="https://www.youtube.com/embed/zSHrk151CbE" title="YouTube video player" allowfullscreen className="mb-4"></iframe>
          <p className="text-green mb-3">Know About Petrolida</p>
          <div className="d-flex justify-content-between container-content-video">
            <div className="left-video">
              <h2 className="fw-bold">Petroleum<br/>Integrated Days</h2>
            </div>
            <div className="right-video">
              <a href="#" className="text-decoration-none text-white" target="_blank">
                <p className="fw-light mb-3">Petroleum Integrated Days (Petrolida) is the biggest annual event held by SPE ITS Student Chapter. This year’s series will be the 10th annual event.</p>
                <p>Read More <img src="../assets/img/home/long-arrow-right.svg" alt="Icon"/></p>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /video --> */}

      {/* <!-- competitions --> */}
      <section id="competitions" className="pt-5">
        <div className="container text-white pt-5">
          {/* <!-- header --> */}
          <div className="header text-center w-50 mx-auto mb-5">
            <p className="text-green">Competitions</p>
            <h2 className="mb-5 fw-bold">7 Competitions Events</h2>
            <p>Meet other participants, let’s show your ideas, innovations and abilities to Petrolida 2022</p>
          </div>
          {/* <!-- /end header --> */}
          {/* <!-- content --> */}
          <div className="container-content-competitions row">
            <div className="p-3 col-12 col-lg-3">
              <a href="#" className="card-competitions">
                <h3>Oil Rig Design</h3>
                <p>Designing a semi-submersible platform for a specific offshore oil field</p>
                <p className="read-more">Read More <img src="../assets/img/home/long-arrow-right.svg" alt="Icon"/></p>
              </a>
            </div>
            <div className="p-3 col-12 col-lg-3">
              <a href="#" className="card-competitions">
                <h3>Fracturing Fluid Design</h3>
                <p>Create the optimal capability of fracture fluid related to the given case</p>
                <p className="read-more">Read More <img src="../assets/img/home/long-arrow-right.svg" alt="Icon"/></p>
              </a>
            </div>
            <div className="p-3 col-12 col-lg-3">
              <a href="#" className="card-competitions">
                <h3>Petrosmart</h3>
                <p>Challenge their knowledge by answering questions about oil and gas industry</p>
                <p className="read-more">Read More <img src="../assets/img/home/long-arrow-right.svg" alt="Icon"/></p>
              </a>
            </div>
            <div className="p-3 col-12 col-lg-3">
              <a href="#" className="card-competitions">
                <h3>Paper</h3>
                <p>Challenge their knowledge to enchance scientific new innovation research</p>
                <p className="read-more">Read More <img src="../assets/img/home/long-arrow-right.svg" alt="Icon"/></p>
              </a>
            </div>
            <div className="p-3 col-12 col-lg-3">
              <a href="#" className="card-competitions">
                <h3>Stock Trading</h3>
                <p>Obtain the highest profit from online trading and give arguments about Indonesia stock market</p>
                <p className="read-more">Read More <img src="../assets/img/home/long-arrow-right.svg" alt="Icon"/></p>
              </a>
            </div>
            <div className="p-3 col-12 col-lg-3">
              <a href="#" className="card-competitions">
                <h3>Business Case</h3>
                <p>Find a solution to a problem real business case paint point</p>
                <p className="read-more">Read More <img src="../assets/img/home/long-arrow-right.svg" alt="Icon"/></p>
              </a>
            </div>
            <div className="p-3 col-12 col-lg-3">
              <a href="#" className="card-competitions">
                <h3>Case Study</h3>
                <p>Find the best solution for the given case problems related to the oil and gas industry</p>
                <p className="read-more">Read More <img src="../assets/img/home/long-arrow-right.svg" alt="Icon"/></p>
              </a>
            </div>
          </div>
          {/* <!-- /end content --> */}
        </div>
      </section>
      {/* <!-- /end competitions --> */}

      {/* <!-- non-competitions --> */}
      <section id="non-competitions" className="pt-5 mb-5">
        <div className="container text-white pt-5">
          <p className="text-green mb-3">Non-Competitions</p>
          <div className="d-flex justify-content-between container-non-competitions mb-5">
            <h2 className="mb-3">Sharing, Inspiring,<br/>Networking</h2>
            <p>Don’t miss the ultimate opportunity to meet and interact with great speakers on Petrolida Career Talks, explore the city of Surabaya virtually, and Awarding Night.</p>
          </div>
          {/* <!-- carousel --> */}
          <div id="carouselExampleControls" className="carousel slide w-50 mx-auto" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <a href="">
                  <img src="../assets/img/home/slider/slider_entrepreneurship.png" className="img-fluid d-block mx-auto" alt="Slider Image"/>
                </a>
              </div>
              <div className="carousel-item">
                <a href="">
                  <img src="../assets/img/home/slider/slide_oil_gas.png" className="img-fluid d-block mx-auto" alt="Slider Image"/>
                </a>
              </div>
              <div className="carousel-item">
                <a href="">
                  <img src="../assets/img/home/slider/slider_technology.png" className="img-fluid d-block mx-auto" alt="Slider Image"/>
                </a>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <i className="fas fa-arrow-left"></i>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          {/* <!-- /end carousel --> */}
        </div>
      </section>
      {/* <!-- /end non-competitions --> */}

      {/* <!-- testimonials --> */}
      <section id="testimonials" className="d-flex align-items-center mt-5">
        <div className="background w-100 p-5">
          <div className="container text-white position-relative">
            <p className="text-green mb-3">Testimonials</p>
            <h2 className="mb-3">What They Say<br/>About Us</h2>
            <p>For convincing you who still confused to decide, let's hear<br/> what they say about journey of being Petrolida's</p>
            <button className="btn shadow-none text-dark rounded-circle" id="btn-left-testi"><i className="fas fa-arrow-left"></i></button>
            <button className="btn shadow-none text-white rounded-circle" id="btn-right-testi"><i className="fas fa-arrow-right"></i></button>
            <video src="videos/po_2021.mp4" poster="poster/poster_po_2021.png" controls width="330" height="330" preload="metadata" id="video-testi"></video>
          </div>
        </div>
      </section>
      {/* <!-- /end testimonials --> */}

      {/* <!-- cta --> */}
      <section id="cta">
        <div className="container text-center text-white w-50">
          <h2 className="mb-4 fw-bold">Don't Forget to Register!</h2>
          <p className="mb-4">Don’t miss the ultimate opportunity to showcase your ideas and innovation in reinforcing the a future of our energy industry</p>
          <button>Register</button>
        </div>
      </section>
      {/* <!-- /end cta --> */}

      {/* <!-- sponsors & supporting partners --> */}
      <section id="sponsors" className="pt-5">
        <div className="container pt-5 text-center text-white">
          <h2 className="mb-5 fw-bold">Sponsors & Supporting Partners</h2>
          <img src="../assets/img/home/sponsors.svg" alt="Sponsors & Supporting Partners" className="img-fluid mt-3 d-none d-md-block"/>
          <div className="row d-md-none">
            <div className="col-6">
              <img src="../assets/img/home/sponsor-satuan/pertamina.png" alt="Sponsors dan Supporting"/>
            </div>
            <div className="col-6">
              <img src="../assets/img/home/sponsor-satuan/exxon_mobil.png" alt="Sponsors dan Supporting"/>
            </div>
            <div className="col-6">
              <img src="../assets/img/home/sponsor-satuan/dana.png" alt="Sponsors dan Supporting"/>
            </div>
            <div className="col-6">
              <img src="../assets/img/home/sponsor-satuan/pln.png" alt="Sponsors dan Supporting"/>
            </div>
            <div className="col-6">
              <img src="../assets/img/home/sponsor-satuan/pertamina_cepu.png" alt="Sponsors dan Supporting"/>
            </div>
            <div className="col-6">
              <img src="../assets/img/home/sponsor-satuan/cimb_niaga.png" alt="Sponsors dan Supporting"/>
            </div>
            <div className="col-6">
              <img src="../assets/img/home/sponsor-satuan/pt_krakatau.png" alt="Sponsors dan Supporting"/>
            </div>
            <div className="col-6">
              <img src="../assets/img/home/sponsor-satuan/pertamina_phe.png" alt="Sponsors dan Supporting"/>
            </div>
            <div className="col-6">
              <img src="../assets/img/home/sponsor-satuan/cicil.png" alt="Sponsors dan Supporting"/>
            </div>
            <div className="col-6">
              <img src="../assets/img/home/sponsor-satuan/skkm_migas.png" alt="Sponsors dan Supporting"/>
            </div>
            <div className="col-6">
              <img src="../assets/img/home/sponsor-satuan/blok_cepu.png" alt="Sponsors dan Supporting"/>
            </div>
            <div className="col-6">
              <img src="../assets/img/home/sponsor-satuan/medco_energi.png" alt="Sponsors dan Supporting"/>
            </div>
            <div className="col-6">
              <img src="../assets/img/home/sponsor-satuan/bki.png" alt="Sponsors dan Supporting"/>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /end sponsors & supporting partners --> */}

      {/* <!-- footer --> */}
      <footer className="pt-5">
        <div className="container pt-5 text-white">
          <h1>Footer</h1>
        </div>
      </footer>
      {/* <!-- /end footer --> */}
    </div>
  )
};

export default Home;
