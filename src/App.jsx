import { useState } from "react";
import '../src/scss/styles.css';
import { useEffect } from 'react';
import Logo from './assets/logo.png'
import Comunity from './assets/Connected world-bro 1.png'
import Comunity2 from './assets/Experts-bro 1.png'
import uni1 from './assets/iit kharagpur.svg'
import uni2 from './assets/vit.svg'
import uni3 from './assets/iit delhi.svg'
import uni4 from './assets/iit rrorkee.svg'
import uni5 from './assets/coep pune.svg'
import uni6 from './assets/nit karnataka.svg'
import connection from './assets/connection.png'
import internship from './assets/internship.png'
import jobs from './assets/jobs.png'
import mentorship from './assets/mentorship.png'
import events from './assets/events.png'
import listing from './assets/listing.png'
import telegram from './assets/telegram.svg'
import youtube from './assets/youtube.svg'
import linkdin from './assets/linkedin-original.svg'
import whatsapp from './assets/whatsapp.svg'
import instagram from './assets/instagram.svg'
import discord from './assets/discord.svg'
import dummyPlace from './assets/dummy_place.png'
import quote from './assets/double-quotes.svg'
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
          <h3 className="text-white ">GrowUp Buddy</h3>

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
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
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
              <p className="text-white">
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
        <h2 className="ht-2">Student Community from</h2>
        <div className="justify-content-center mt-4 headerCard w-50 p-md-5 p-4 column-gap-3" style={{ backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
          <div className="headerCard1 row m-0 w-100 d-flex justify-content-center align-items-center">
            <div className="col-md-1 col-3" style={{ padding: "10px" }}>
              <img src={uni1} className="img" alt="" style={{ width: "100%", borderRadius: "5px" }} />
            </div>
            <div className="col-md-1 col-3" style={{ padding: "10px" }}>
              <img src={uni2} className="img" alt="" style={{ width: "100%", borderRadius: "5px" }} />
            </div>
            <div className="col-md-1 col-3" style={{ padding: "10px" }}>
              <img src={uni3} className="img" alt="" style={{ width: "100%", borderRadius: "5px" }} />
            </div>
            <div className="col-md-1 col-3" style={{ padding: "10px" }}>
              <img src={uni4} className="img" alt="" style={{ width: "100%", borderRadius: "5px" }} />
            </div>
            <div className="col-md-1 col-3" style={{ padding: "10px" }}>
              <img src={uni5} className="img" alt="" style={{ width: "100%", borderRadius: "5px" }} />
            </div>
            <div className="col-md-1 col-3" style={{ padding: "10px" }}>
              <img src={uni6} className="img" alt="" style={{ width: "100%", borderRadius: "5px" }} />
            </div>
          </div>
        </div>
      </section>


      <div class="  container  mt-5 rounded-5 p-md-5 d-flex flex-column align-items-center justify-content-center">

        {/* circle
        <h1 className="text-center" style={{color:"white",opacity:"0.3"}}>What do you want to make?</h1>
        <div className="d-flex m-3 col-6  justify-content-center">
        <input type="text" className="input md:w-100 w-auto p-3"/>
        <button className="btn text-white gbtn">
          Generate
        </button>
        </div> */}
        <iframe src='https://www.youtube.com/embed/utrClTf2V_Q'
          className="rounded-5"
          frameborder='0'
          width="50%"
          height="360"
          allow='autoplay; encrypted-media'
          allowfullscreen
          title='video'
        />
      </div>

      <section className="container mt-5 mb-3">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="lpt2">
            What's in store for you
          </h2>
          <p className=" text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros. Quisque quis euismod lorem. Etiam sodales ac felis id interdum.
          </p>
        </div>
        <div className="row mt-5">
        <div className="col-md-4 p-5 d-flex align-items-center flex-column justify-content-center">
        <div className="card-b features text-center">
          <div className="d-flex  justify-content-center mb-5 mt-3">
            <img src={connection} className="rounded-2" style={{ width: "80px", height: "80px", objectFit: "cover" }} alt="" srcset="" />
          </div>
          <div className="d-flex flex-column mt-2 justify-content-center">
            <h3 className="text-black card-t">
            Build Connections            </h3>
            <p className="container mx-auto hdesc">
            Network for Collaborations and Knowledge Sharing among Students, Educators, and Professionals                 </p>
          </div>
        </div>
      </div>
          <div className="col-md-4 p-5 d-flex align-items-center flex-column justify-content-center">
            <div className="card-b features text-center">
              <div className="d-flex  justify-content-center mb-5 mt-3">
                <img src={internship} className="rounded-2" style={{ width: "80px", height: "80px", objectFit: "cover" }} alt="" srcset="" />
              </div>
              <div className="d-flex flex-column mt-2 justify-content-center">
                <h3 className="text-black card-t">
                Explore Internships
                </h3>
                <p className="container mx-auto hdesc">
                Gain real-world experience through exclusive internship opportunities with leading companies                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-5 d-flex align-items-center flex-column justify-content-center">
            <div className="card-b features text-center">
              <div className="d-flex  justify-content-center mb-5 mt-3">
                <img src={jobs} className="rounded-2" style={{ width: "80px", height: "80px", objectFit: "cover" }} alt="" srcset="" />
              </div>
              <div className="d-flex flex-column mt-2 justify-content-center">
                <h3 className="text-black card-t">
                Explore Jobs
                </h3>
                <p className="container mx-auto hdesc">
                Access a vast job database, simplifying your job search and launching your dream career seamlessly                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-5 d-flex align-items-center flex-column justify-content-center">
            <div className="card-b features text-center">
              <div className="d-flex  justify-content-center mb-5 mt-3">
                <img src={mentorship} className="rounded-2" style={{ width: "80px", height: "80px", objectFit: "cover" }} alt="" srcset="" />
              </div>
              <div className="d-flex flex-column mt-2 justify-content-center">
                <h3 className="text-black card-t">
                Gain Mentorship
                </h3>
                <p className="container mx-auto hdesc">
                Receive guidance from experienced mentors to navigate academic and career challenges effectively

                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-5 d-flex align-items-center flex-column justify-content-center">
            <div className="card-b features text-center">
              <div className="d-flex  justify-content-center mb-5 mt-3">
                <img src={events} className="rounded-2" style={{ width: "80px", height: "80px", objectFit: "cover" }} alt="" srcset="" />
              </div>
              <div className="d-flex flex-column mt-2 justify-content-center">
                <h3 className="text-black card-t">
                Events
                                </h3>
                <p className="container mx-auto hdesc">
                Receive guidance from experienced mentors to navigate academic and career challenges effectively

                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-5 d-flex align-items-center flex-column justify-content-center">
            <div className="card-b features text-center">
              <div className="d-flex  justify-content-center mb-5 mt-3">
                <img src={listing} className="rounded-2" style={{ width: "80px", height: "80px", objectFit: "cover" }} alt="" srcset="" />
              </div>
              <div className="d-flex flex-column mt-2 justify-content-center">
                <h3 className="text-black card-t">
                Listings                </h3>
                <p className="container mx-auto hdesc">
                Receive guidance from experienced mentors to navigate academic and career challenges effectively                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="container mt-4 d-flex flex-column justify-content-center align-items-center">
        <h2 className="ht-2">
          Student community from
        </h2>
        <div className="insideDiv">


        </div>



        <div className="headerCard mt-4 w-50 p-md-5  column-gap-3">
          <div className="headerCard1 row m-0  w-100 d-flex">
            <div className="col-md-1 p-0 text-center col-3">
              <img src={discord} className="img" alt="" srcset="" style={{ width: "100%" }} />
              <div className="text-white mt-2" style={{ fontSize: "8px" }}>
                discord
              </div>
            </div>
            <div className="col-md-1 p-0 col-3">
              <img src={telegram} className="img" alt="" srcset="" style={{ width: "100%" }} />
              <div className="text-white mt-2" style={{ fontSize: "8px" }}>
                Telegram
              </div>
            </div>
            <div className="col-md-1 p-0 col-3">
              <img src={whatsapp} className="img" alt="" srcset="" style={{ width: "100%" }} />
              <div className="text-white mt-2" style={{ fontSize: "8px" }}>
                Whatsapp
              </div>
            </div>
            <div className="col-md-1 p-0 col-3">
              <img src={youtube} className="img" alt="" srcset="" style={{ width: "100%" }} />
              <div className="text-white mt-2" style={{ fontSize: "8px" }}>
                Youtube
              </div>
            </div>
            <div className="col-md-1 p-0 col-3">
              <img src={linkdin} className="img" alt="" srcset="" style={{ width: "100%" }} />
              <div className="text-white mt-2" style={{ fontSize: "8px" }}>
                Linkedin
              </div>
            </div>
            <div className="col-md-1 p-0 col-3">
              <img src={instagram} className="img" alt="" srcset="" style={{ width: "100%" }} />
              <div className="text-white mt-2" style={{ fontSize: "8px" }}>
                Instagram
              </div>
            </div>

          </div>
        </div>


      </section>
      <section className="container mt-5 h-100 mb-5">
        <div className="row d-flex justify-center">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <h1 className="lpht">About us</h1>
              <p className="text-white">
                At Grow Up Buddy , we believe in empowering minds and unlocking the potential of every learner. Our platform is a hub of endless possibilities, providing a vibrant ecosystem where students can connect, collaborate, and thrive together.              </p>

            </div>
          </div>
          <div className="col-md-6">
            <img src={Comunity2} alt="" className="w-100" srcset="" />
          </div>
        </div>
      </section>

      <section className="container d-flex flex-column justify-content-center align-items-center">
        <h2 className="ht-2">
          Testimonials
        </h2>
        <div className="insideDiv text-white">
          Hear how GrowUp Buddy has transformed lives, empowered careers, and built a thriving community!
        </div>
        <div className="container row row-gap-4 d-flex justify-content-center row column-gap-4 mt-5 ">
          <div className="col-md-5 col-12 p-5 test-slide">
            <p className="text-white">
              The Grow Up Buddy community is like a second family, always there to offer support, guidance, and inspiration. Through their platform, I've connected with incredible individuals who have become my collaborators and lifelong friends. Together, we're growing and achieving great things.
            </p>
            <div className="d-flex mt-5">
              <div>
                <img src={dummyPlace} alt="" srcset="" />
              </div>
              <div className="ms-3 text-white">
                <h2 className="m-0 p-0">
                  Ritesh Kumar
                </h2>
                <p className="p-0 m-0 fw-lighter fs-6">
                  College
                </p>
              </div>
              <div>
                <img src={quote} alt="" srcset="" />
              </div>
            </div>
          </div>
          <div className="col-md-5 col-12 p-5 test-slide">
            <p className="text-white">
              The Grow Up Buddy community is like a second family, always there to offer support, guidance, and inspiration. Through their platform, I've connected with incredible individuals who have become my collaborators and lifelong friends. Together, we're growing and achieving great things.
            </p>
            <div className="d-flex mt-5">
              <div>
                <img src={dummyPlace} alt="" srcset="" />
              </div>
              <div className="ms-3 text-white">
                <h2 className="m-0 p-0">
                  Shardul Naik
                </h2>
                <p className="p-0 m-0 fw-lighter fs-6">
                  College
                </p>
              </div>
              <div>
                <img src={quote} alt="" srcset="" />
              </div>
            </div>
          </div>

        </div>

      </section>
      <div className="d-flex justify-content-center m-5">
        <div className="container row d-flex justify-content-center align-items-center mt-5 p-md-5 fcard">
          <div className="col-md-6 text-white">
            <h3>Connect with us</h3>
          </div>
          <div className="col-md-6 rounded-4 d-flex flex-column flex-md-row bg-white">
            <input type="text" className="w-100" />
            <button className="btn bg-dark text-white rounded-2 m-2">
              example@growupbuddy.com
            </button>
          </div>
        </div>
      </div>
      <footer className="d-flex mt-4 justify-content-center">
        <div className="d-flex container w-100 m-3 text-white justify-content-between align-items-center">
          <div>
            &#169; GrowUp Buddy. All rights reserved.
          </div>
          <div className="d-flex column-gap-4 text-white justify-content-around">
            <a href="#">Terms Of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>

      </footer>


    </>
  );
}

export default App;
