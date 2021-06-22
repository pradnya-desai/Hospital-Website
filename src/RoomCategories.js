import './RoomCategories.css';
import { Link } from 'react-router-dom'
import Mailto from 'react-protected-mailto'
function RoomCategories(){
    const myFunctionroom = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    
      }

      if(true) {
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
            <div class="navbar1">
          <button type="button" id="phonenobtn11">
            <img
              id="callicon1"
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
            <h3 id="aboutus-room">Room Categories</h3>
            <Link to="/" id="homelink"><h3>Home<span id="greaterthan"> {'>'} </span></h3> </Link>
            <h3 id="abouttext">Room Categories</h3>
        </div>

        {/* <div class="Side-Toggle-Bar" id="Side-Toggle-Bar">

          <div class="dropdown">

            <input type="image" src="https://img.icons8.com/fluent/2x/menu.png" onClick={myFunctionroom} id="dropbtn" class="dropbtn" />
            <div id="myDropdown" class="dropdown-content">
           
              <Link to="/ContactUs" class="active" id="contactus">CONTACT US</Link>
              <Link to="#" id="aboutuss">ABOUT US</Link>
              <Link to="#" id="speciality">SPECIALITY</Link>
              <Link to="#" id="pathology" >PATHOLOGY</Link>
              <Link to="#" id="consultation">CONSULTATION</Link>
            </div>
          </div>
        </div> */}
               <div id="rooms">
        <hr style={{marginTop:"300px",position:"relative"}}></hr>

            <div class="room-items">

<div id="luxury">Luxury room<br/><h4 style={{lineHeight:"-10"}}>Single centrally air conditioned well furnished accommodation with attached bathroom, sofa-cum-bed for attendant, TV and telephone facilities.</h4><img src="https://www.jehangirhospital.com/images/room-categories/luxury-room.jpg" width="700px" height="500px"/><hr></hr></div>
<div id="super-delux">Super Delux<br/><h4>Single centrally air conditioned, well-furnished accommodation with attached bathroom, sofa-cum-bed for attendant, central oxygen suction facility, TV, telephone and mini fridge.</h4><img src="https://www.jehangirhospital.com/images/room-categories/super-deluxe.jpg" width="700px" height="500px"/><hr></hr></div>
<div id="general-ward">General Ward<br/><h4>A dormitory style layout beds. <br/>Each bed has a bed side trolley and common bathroom. There are separate wards for men and women.</h4><img src="https://www.jehangirhospital.com/images/room-categories/general-ward.jpg"width="700px" height="500px"/><hr></hr></div>
<div id="day-care">Day Care<br/><h4>We have state of the art Day Care facility with nature friendly ambience and attendant sit outs. Treatment is provided on adjustable cozy chairs to make the whole experience feel pain-free.</h4><img src="https://www.jehangirhospital.com/images/room-categories/day-care.jpg" width="700px" height="500px"/><hr></hr></div>
<div id="emergency">Emergency Room<br/><h4>Cubicles with all essential and advanced life-support equipment necessary for critical care and close monitoring of patients..</h4><img src="https://downloads.healthcatalyst.com/wp-content/uploads/2019/08/Emergency-Department-Throughput.jpg" width="700px" height="500px"/><hr></hr></div>
<div id="icu">ICU Room<br/><h4>This section of the hospital has cubicles to provide sick patients with the highest level of treatments.</h4><img src="https://www.jehangirhospital.com/images/room-categories/icu-room.jpg" width="700px" height="500px"/><hr></hr></div>

</div>

            </div>













            <footer class="footer-section-room">
        <div class="containerfooter">
            <div class="footer-ctar pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-ctar">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>kothrud pune 411038</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-ctar">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>1800-100-200</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-ctar">
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
                                <li><a href="#">Contact</a></li>
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
export default RoomCategories;