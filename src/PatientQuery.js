import React from 'react'
import {Link} from 'react-router-dom';
import Mailto from 'react-protected-mailto'
import './PatientQuery.css' 
function PatientQuery(){

    const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");

     }

    if (true) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }

    return(
        <div>

<div class="navbar">
                <button type="button" id="phonenobtn1">
                    <img
                        id="callicon"
                        src="https://images.vexels.com/media/users/3/137415/isolated/preview/0e475bb9b17b3fa4f94f31fba1635b8f-telephone-call-icon-logo-by-vexels.png"
                    />
            020252515151
          </button>

                {/* <button type="button" id="phonenobtn2">
            <div class="slash">
              <b>/</b>
            </div>
            1234567892
          </button> */}
            </div>

            <div class="backhome"></div>
            <div className="backhome-text">
                <h3 id="aboutus" style={{marginTop:"10px"}}>Patient Query</h3>
                <Link to="/" id="homelink"><h3>Home<span id="greaterthan"> {'>'} </span></h3> </Link>
                <h3 id="abouttext" style={{marginTop:"50px", marginLeft:"170px"}}>Patient Query</h3>
            </div>

            <div class="Side-Toggle-Bar" id="Side-Toggle-Bar" style={{marginTop:"180px"}}>

                <div class="dropdown">

                    <input type="image" src="https://img.icons8.com/fluent/2x/menu.png" onClick={myFunction} id="dropbtn" class="dropbtn" />
                    <div id="myDropdown" class="dropdown-content">

                        <Link to="/ContactUs" class="active" id="contactus">CONTACT US</Link>
                        <Link to="#" id="aboutuss">ABOUT US</Link>
                        <Link to="#" id="speciality">SPECIALITY</Link>
                        <Link to="#" id="pathology" >PATHOLOGY</Link>
                        <Link to="#" id="consultation">APPOINTMENT</Link>
                    </div>
                </div>
            </div>


            <div id="postaquery-background">
                    <img src="https://dev.dropinternational.org/wp-content/uploads/2017/08/Telemedicine-1920x1080.jpg" id="image-postaquery" />
                    
                    <div class="login-container-doctor" style={{marginTop:'-280px',marginLeft:'-380px',boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',height:'440px'}}>
       
       <form id="log-in-doctor" style={{marginTop:'-40px'}}>
       <div id="namediv">
              <label id="qid"></label>
              <input type="text" id="ntext" name="name" placeholder="Enter your name here"  />
           </div>
           <div id="udiv">
               <label id="uid"></label>
               <input type="text" id="dtext" name="emailid" placeholder="Enter your email-id here" style={{color:'white',marginTop:'10px'}} />
           </div>
           <div id="pdiv" style={{marginTop:'-40px'}}>
               <label id="pid"></label>
               <input type="text" id="ptext" name="phonenumber" placeholder="Enter your phone number here" style={{marginTop:'30px'}}  />
           </div>
           <div id="querydiv" >
              {/* <label id="qid">Your Query</label> */}
              <input type="text" id="qtext" name="phonenumber" placeholder="Enter your query here" style={{marginTop:'30px'}}  />
           </div>
           <input type="submit" id="dsubmit" name="postaquery" value="Post Your Query" style={{marginTop:'40px'}}/>
          
           <a id="fpwd" href="#">Forgot Password?</a>
            {/* <a href="modifiedhomepagespiceup.html"><button type="button" id="backbtn" width="100px"  style={{float: 'left', marginTop: '-10px'}}>BACK</button></a> */}
       </form>
       </div>
                </div>

                <footer class="footer-section">
        <div class="containerfooter">
            <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>kothrud pune 411038</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>1800-100-200</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span><Mailto style={{textDecoration:"none"}} email="pradnya.d10@gmail.com" subject="Hello" body="Hello world!"></Mailto></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-content pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 mb-50">
                        <div class="footer-widget">
                            <div class="footer-logo">
                                <a href="index.html"><i class="fas fa-h-square fa-6x"></i></a>
                                {/* <img src="https://image.freepik.com/free-vector/hospital-logo-template_1061-6.jpg" class="img-fluid" alt="logo"/> */}
                            </div>
                            <div class="footer-text">
                                {/* <p>Terms and Conditions!</p> */}
                            </div>
                            <div class="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i id="whatsappicon" class="fab fa-whatsapp facebook-bg"></i></a>
                                <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i id="instagramicon" class="fab fa-instagram google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Quick Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Speciaity</a></li>
                                <li><a href="#">Pathlogy</a></li>
                                <li><a href="#">Book Appointment</a></li>
                                <li><a href="#">Consultation</a></li>
                                <li><a href="#">Contact us</a></li>
                            
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div class="footer-widget">
                            <div class="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div class="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div class="subscribe-form">
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i class="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-area">
            <div class="containercopyright">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2021, All Right Reserved <a href="">Hospital!</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#" style={{paddingRight:'20px'}}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>





            </div>
    )
}
export default PatientQuery