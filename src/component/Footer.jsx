import React from "react";
import "./Footer.css";
import { FaAngleRight, FaFacebook, FaInstagram, FaLinkedin, FaStar, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const Footer = () =>
{
  const navigate = useNavigate()
  return (
    <div>
      <footer
        className="footer-section"
        style={{ backgroundImage: "url(assets/images/footer/bg.jpg)" }}
      >
        <div className="footer-top">
          <div className="container">
            <div className="row g-3 justify-content-center g-lg-0">
              {/* <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="/images/phoneicon.png" alt="Phone-icon" />
                    </div>
                    <div className="lab-content">
                      
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="/images/02.png" alt="email-icon" />
                    </div>
                    <div className="lab-content">
                    <a href="mailto:rahibet74@gmail.com" target="_blank" rel="noopener noreferrer">
        <span>rahibet74@gmail.com</span>
      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                    <div className="lab-thumb">
                      <img src="/images/03.png" alt="location-icon" />
                    </div>
                    <div className="lab-content">
                      <a href="https://www.google.com/maps/place/Mumbai, Maharashtra">

                      <span>Mumbai, Maharashtra</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-12">
                <div className="footer-top-item lab-item">
                  <div className="lab-inner">
                  <ul style={{display:"flex", justifyContent:"center",margin:"auto", gap:"20px"}} className="lab-content">
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61554742063668" className="fb">
                        <FaFacebook style={{fontSize: '1.5em'}} />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/raahibet/" className="twitter">
                        <FaInstagram style={{fontSize: '1.5em'}} />
                      </a>
                    </li>
                    <li>
                      <a href=" https://t.me/+FJd9R7wUt3dkY2M1
" className="vimeo">
                        <FaTelegram style={{fontSize: '1.5em'}} />
                      </a>
                    </li>
                   
                    <li >
                      <a href="https://wa.me/+91-8619811154" className="rss">
                      <  FaWhatsapp style={{fontSize: '1.5em'}} />
                      </a>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle padding-top padding-bottom">
          <div className="container">
            <div className="row padding-lg-top">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-middle-item-wrapper">
                  <div className="footer-middle-item mb-lg-0">
                    <div onClick={()=>navigate('/')} className="fm-item-title mb-4">
                      <img style={{width:"250px"}} src="images/logo3.png" alt="logo" />
                    </div>
                    <div className="fm-item-content">
                      <p className="mb-4">
                        "Immerse yourself in the world of gaming with this
                        website—a comprehensive hub offering a rich array of
                        content, from insightful reviews and expert guides to
                        the latest gaming news, fostering a vibrant community of
                        passionate gamers."
                      </p>
                      {/* <ul className="match-social-list d-flex flex-wrap align-items-center">
                    <li><a href="#"><img src="assets/images/match/social-1.png" alt="vimeo" /></a></li>
                    <li><a href="#"><img src="assets/images/match/social-2.png" alt="youtube" /></a></li>
                    <li><a href="#"><img src="assets/images/match/social-3.png" alt="twitch" /></a></li>
                  </ul> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-middle-item-wrapper">
                  <div className="footer-middle-item mb-lg-0">
                    <div className="fm-item-title">
                      <h4>Our Top Pages</h4>
                    </div>
                    <div className="fm-item-content">
                      <div className="fm-item-widget lab-item">
                        <div onClick={()=>navigate('/Contact')} className="lab-inner">
                         
                         <h4>Contact Us</h4>
                        </div>
                      </div>
                      <div className="fm-item-widget lab-item">
                        <div className="lab-inner">
                         
                        <h4>Blog</h4>
                        </div>
                      </div>
                      <div className="fm-item-widget lab-item">
                        <div onClick={()=>navigate('/About')} className="lab-inner">
                         
                          <h4>ABOUT Us</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer-middle-item-wrapper">
                  <div className="footer-middle-item-3 mb-lg-0">
                    <div className="fm-item-title">
                      <h4>Our All Games</h4>
                    </div>
                    <div className="fm-item-content">
                      <p>
                        Delve into the exciting world of casino games, where
                        luck meets skill in an immersive gaming experience. From
                        classic favorites like poker, blackjack, and roulette to
                        modern slot machines with dynamic themes, our casino
                        games offer thrilling opportunities to test your
                        strategy and enjoy the rush of winning.
                      </p>
                      <form>
                        {/* <div className="form-group mb-4">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="form-group mb-2">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                          />
                        </div> */}
                        <button  className="default-button">
                          <span onClick={()=>navigate('/AllGames')}>
                           ALL Games <FaAngleRight />
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-content text-center d-flex justify-content-center">
                  <ul className="d-flex gap-2" id="foot">
                    <li><Link to="terms_and_conditions">Terms And Conditions</Link></li>
                    <li><Link to="Contact">Contact us</Link></li>
                    <li><Link to="privacy_policy">Privacy Policy</Link></li>
                    <li><Link to="Refund_and_cancellation_policy">Refund And Cancellation</Link></li>
                  </ul>
               
                  <p className="last-p">
                    <br />
                    ©2023 <a onClick={()=>navigate('/')}>Casina</a> - All Rights Reserved.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
