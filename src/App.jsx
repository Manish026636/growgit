import { useState } from "react";
import '../src/scss/styles.css';
import { useEffect } from 'react';
import Logo from './assets/logo.png'
import Comunity from './assets/community.svg'
import uni1 from './assets/iit kharagpur.svg'
import uni2 from './assets/vit.svg'
import uni3 from './assets/iit delhi.svg'
import uni4 from './assets/iit rrorkee.svg'
import uni5 from './assets/coep pune.svg'
import uni6 from './assets/nit karnataka.svg'
import dummy from './assets/dummy.svg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo" width="30" height="30" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleMenuToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About us</a>
              </li>
            </ul>
            <button className="btn join-community text-white" type="button">Join our community</button>
          </div>
        </div>
      </nav>
      <section className="container mt-5 h-100 mb-5">
        <div className="row d-flex justify-center">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div>
              <h1 className="lpht">Building India's Largest<span className="gradient"> Student Community</span></h1>
              <p className="hdesc">
              Join our revolutionary edtech platform where aspirations converge, and students from every corner of India connect, collaborate, and thrive together.
              </p>
            <a className="btn text-white join-community" href='https://discord.gg/pnjayJbbMJ'>
              Join us 
            </a>  {/* change button to a tag  */}
          </div>
          </div>
          <div className="col-md-6">
            <img src={Comunity} alt="" srcset="" />
          </div>
        </div>
      </section>
      <section className="container d-flex flex-column justify-content-center align-items-center">
          <h2 className="ht-2">
            Student community from
          </h2>
          <div className="headerCard w-50 p-5 column-gap-3">
              <div className="headerCard1 w-100 d-grid "> 
                <div>
                <img src={uni1} alt="" srcset="" style={{width:"100%"}} />

                </div>
                <div>
                <img src={uni2} alt="" srcset="" style={{width:"100%"}} />

                </div>
                <div>
                <img src={uni3} alt="" srcset="" style={{width:"100%"}} />

                </div>
                <div>
                <img src={uni4} alt="" srcset="" style={{width:"100%"}} />

                </div>
                <div>
                <img src={uni5} alt="" srcset="" style={{width:"100%"}} />

                </div>
                <div>
                <img src={uni6} alt="" srcset="" style={{width:"100%"}} />

                </div>

              </div>
          </div>
    

      </section>

      <section className="container mt-5 mb-3">
      <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="lpt2">
            What's in store for you
          </h2>
          <p className="hdesc text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem. Etiam sodales ac felis id interdum.
          </p>
      </div>
      <div className="row mt-5">
        <div className="col-md-4 p-5 d-flex align-items-center flex-column justify-content-center">
          <div className="card-b text-center">
              <div className="d-flex justify-content-center mb-5 mt-3">
                <img src={dummy} style={{width:"80px",height:"80px", objectFit:"cover"}} alt="" srcset="" />
              </div>
              <div className="d-flex flex-column mt-2 justify-content-center">
                  <h3 className="text-white card-t">
                    Build Connections
                  </h3>
                  <p className="hdesc">
                  Network with students, educators, and professionals to foster meaningful collaborations and knowledge sharing
                  </p>
              </div>
           </div>   
        </div>
        <div className="col-md-4  p-5 d-flex align-items-center flex-column justify-content-center">
            <div className="card-b text-center">
                  <div className="d-flex justify-content-center mb-5 mt-3">
                    <img src={dummy} style={{width:"80px",height:"80px", objectFit:"cover"}} alt="" srcset="" />
                  </div>
                  <div className="d-flex flex-column mt-2 justify-content-center">
                      <h3 className="text-white card-t">
                      Explore Internships
                      </h3>
                      <p className="hdesc">
                      Gain real-world experience through exclusive internship opportunities with leading companies
                      </p>
                  </div>
              </div> 

        </div>
        <div className="col-md-4  p-5 d-flex align-items-center flex-column justify-content-center">
            <div className="card-b text-center">
                  <div className="d-flex justify-content-center mb-5 mt-3">
                    <img src={dummy} style={{width:"80px",height:"80px", objectFit:"cover"}} alt="" srcset="" />
                  </div>
                  <div className="d-flex flex-column mt-2 justify-content-center">
                      <h3 className="text-white card-t">
                      Explore Jobs
                      </h3>
                      <p className="hdesc">
                      Access a vast job database, simplifying your job search and launching your dream career seamlessly
                      </p>
                  </div>
              </div> 

        </div>
        <div className="col-md-4  p-5 d-flex align-items-center flex-column justify-content-center">
            <div className="card-b text-center">
                  <div className="d-flex justify-content-center mb-5 mt-3">
                    <img src={dummy} style={{width:"80px",height:"80px", objectFit:"cover"}} alt="" srcset="" />
                  </div>
                  <div className="d-flex flex-column mt-2 justify-content-center">
                      <h3 className="text-white card-t">
                      Gain Mentorship
                      </h3>
                      <p className="hdesc">
                      Receive guidance from experienced mentors to navigate academic and career challenges effectively
                      </p>
                  </div>
              </div> 

        </div>
        <div className="col-md-4  p-5 d-flex align-items-center flex-column justify-content-center">
            <div className="card-b text-center">
                  <div className="d-flex justify-content-center mb-5 mt-3">
                    <img src={dummy} style={{width:"80px",height:"80px", objectFit:"cover"}} alt="" srcset="" />
                  </div>
                  <div className="d-flex flex-column mt-2 justify-content-center">
                      <h3 className="text-white card-t">
                      Events
                      </h3>
                      <p className="hdesc">
                      Receive guidance from experienced mentors to navigate academic and career challenges effectively
                      </p>
                  </div>
              </div> 

        </div>       <div className="col-md-4  p-5 d-flex align-items-center flex-column justify-content-center">
            <div className="card-b text-center">
                  <div className="d-flex justify-content-center mb-5 mt-3">
                    <img src={dummy} style={{width:"80px",height:"80px", objectFit:"cover"}} alt="" srcset="" />
                  </div>
                  <div className="d-flex flex-column mt-2 justify-content-center">
                      <h3 className="text-white card-t">
                      Listings
                      </h3>
                      <p className="hdesc">
                      Receive guidance from experienced mentors to navigate academic and career challenges effectively
                      </p>
                  </div>
              </div> 

        </div>
        
      </div>
      </section>
    </>
  );
}

export default App;
