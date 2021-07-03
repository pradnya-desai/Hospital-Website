import { Link } from 'react-router-dom'
import './OurDoctors.css'
import Mailto from 'react-protected-mailto'

function OurDoctors(){
    const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    
      }
    const openNav=()=> {
        document.getElementById("myNav").style.height = "100%";
      }
      
      const closeNav=()=> {
        document.getElementById("myNav").style.height = "0%";
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
            <h3 id="aboutus" style={{marginTop:"10px"}}>Our Doctors</h3>
            <Link to="/" id="homelink"><h3>Home<span id="greaterthan"> {'>'} </span></h3> </Link>
            <h3 id="abouttext" style={{marginTop:"50px", marginLeft:"170px"}}>Our Doctors</h3>
        </div>
        {/* <div className="register-text">
			<h1>Registation Form</h1>
		</div> */}

<div class="Side-Toggle-Bar" id="Side-Toggle-Bar" style={{marginTop:'185px'}}>

<div class="dropdown">

  <input type="image" src="https://img.icons8.com/fluent/2x/menu.png" onClick={myFunction} id="dropbtn" class="dropbtn" />
  <div id="myDropdown" class="dropdown-content">
    
    <Link to="/ContactUs" class="active" id="contactus">CONTACT US</Link>
    <Link to="/AboutUs" id="aboutuss">ABOUT US</Link>
    <Link to="#" id="speciality">SPECIALITY</Link>
    <Link to="#" id="pathology" >PATHOLOGY</Link>
    <Link to="#" id="consultation">APPOINTMENT</Link>
  </div>
</div>
</div>


<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" alt="Avatar" style={{width:"300px", height:"300px"}}/>
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>


<div class="flip-card1">
  <div class="flip-card-inner1">
    <div class="flip-card-front1">
      <img src="https://media.istockphoto.com/photos/doctor-holding-digital-tablet-at-meeting-room-picture-id1189304032?k=6&m=1189304032&s=612x612&w=0&h=SJPF2M715kIFAKoYHGbb1uAyptbz6Tn7-LxPsm5msPE=" alt="Avatar" style={{width:"300px", height:"300px"}}/>
    </div>
    <div class="flip-card-back1">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>

<div class="flip-card2">
  <div class="flip-card-inner2">
    <div class="flip-card-front2">
      <img src="https://post.medicalnewstoday.com/wp-content/uploads/2019/01/Male_Doctor_732x549-thumbnail.jpg" alt="Avatar" style={{width:"300px", height:"300px"}}/>
    </div>
    <div class="flip-card-back2">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>



<div class="flip-card3">
  <div class="flip-card-inner3">
    <div class="flip-card-front3">
      <img src="https://i.pinimg.com/564x/a5/b2/6b/a5b26b335cc94272b7c1878ec5b13dbd.jpg" alt="Avatar" style={{width:"300px", height:"300px"}}/>
    </div>
    <div class="flip-card-back3">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>






<div class="flip-card4">
  <div class="flip-card-inner4">
    <div class="flip-card-front4">
      <img src="https://cdn.sanity.io/images/0vv8moc6/hcplive/0ebb6a8f0c2850697532805d09d4ff10e838a74b-200x200.jpg" alt="Avatar" style={{width:"300px", height:"300px"}}/>
    </div>
    <div class="flip-card-back4">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>


<div class="flip-card5">
  <div class="flip-card-inner5">
    <div class="flip-card-front5">
      <img src="https://image.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg" alt="Avatar" style={{width:"300px", height:"300px"}}/>
    </div>
    <div class="flip-card-back5">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>

<div class="flip-card6">
  <div class="flip-card-inner6">
    <div class="flip-card-front6">
      <img src="https://www.explorethespaceshow.com/wp-content/uploads/2020/04/Mike-e1587102569285.png" alt="Avatar" style={{width:"300px", height:"300px"}}/>
    </div>
    <div class="flip-card-back6">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
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
export default OurDoctors