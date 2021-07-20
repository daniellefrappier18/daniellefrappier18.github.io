import './App.scss';
import HomeBg from './img/danielle_frappier_bg.jpg';
import Profile from './img/profile.jpg';
import Resume from './img/resume.jpg';
import Portfolio from './img/portfolio.jpg';
import Contact from './img/contact.jpg';

function App() {
  return (
    <div className="App">
      <div id="preloader">
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="homepage row">
        <div className="introduction col-lg-7">
          <img src={HomeBg} />
          <div className="mask">
          </div>
          <div className="intro-content p-3">
            <h1>Hi there!<br/> My name is <span>Danielle</span></h1>
            <h2>Front End Developer</h2>
          </div>
        </div>
        <div className="menu col-lg-5 ml-0 pl-0">
          <div className="profile">
            <img src={Profile} />
            <div className="mask"></div>
            <div className="heading text-white p-3">
              <h2>PR<span>O</span>FILE</h2>
              <h3>Some words about me.</h3>
            </div>
          </div>
          <div className="resume">
            <img src={Resume} />
            <div className="mask"></div>
            Resume goes here
          </div>
          <div className="portfolio">
            <img src={Portfolio} />
            <div className="mask"></div>
            Portfolio goes here
          </div>
          <div className="contact">
            <img src={Contact} />
            <div className="mask"></div>
            Contact goes here
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;
