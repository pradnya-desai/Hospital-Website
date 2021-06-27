import { Link } from 'react-router-dom'
import Mailto from 'react-protected-mailto'
import './InpatientGuide.css'
function InpatientGuide(){
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
            <h3 id="aboutus" style={{marginTop:"10px"}}>Inpatient Guide</h3>
            <Link to="/" id="homelink"><h3>Home  <span id="greaterthan"> {'>'} </span></h3> </Link>
            <h3 id="abouttext" style={{marginTop:"50px", marginLeft:"170px"}}>Inpatient Guide</h3>
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

<div class="card-patient-guide">
  <img src="https://amarahospital.com/wp-content/uploads/2021/04/Guide-lines-for-visitor.jpg" alt="Avatar" id="patient-guide-img0" style={{width:"100%"}}/>
  <div class="containerrr">
  <Link style={{textDecoration:"none"}}><h4><b>VISITOR'S CARD</b></h4></Link>
    
  </div>
</div>

<div class="card-patient-guide1">
  <img src="https://3.imimg.com/data3/GQ/EM/MY-8963348/ambulance-services-500x500.jpg" alt="Avatar" id="patient-guide-img1" style={{width:"100%"}}/>
  <div class="container1">
  <Link style={{textDecoration:"none"}}> <h4><b>AMBULANCE SERVICE</b></h4></Link>
 
  </div>
</div>

<div class="card-patient-guide2">
  <img src="https://www.khandakahospital.co.in/themes/img/admit.jpg" alt="Avatar" id="patient-guide-img2" style={{width:"100%"}}/>
  <div class="container2">
  <Link style={{textDecoration:"none"}}><h4><b>ADMISSION PROCEDURE</b></h4></Link>
  
  </div>
</div>

<div class="card-patient-guide3">
  <img src="https://lh3.googleusercontent.com/proxy/r3i1FBI6FlNWm9FsD17DkSX13dFL-Oscj9KBLrr4A6LpqwxwoV1gdzFBFhES3XdUTC6wSuYfAJAfyMXUbr9WYUwF8Z2MytY2gfBkI4Oni4NbKgPwft7LKmFE" alt="Avatar" id="patient-guide-img3" style={{width:"100%"}}/>
  <div class="container3">
  <Link style={{textDecoration:"none"}}><h4><b>HOSPITAL FACILITIES</b></h4> </Link>
  
  </div>
</div>

<div class="card-patient-guide4">
  <img src="https://www.gethealthystayhealthy.com/sites/default/files/styles/article_image_default/public/2019-04/hospital-discharge.jpg?itok=Rk6yw_z1" alt="Avatar" id="patient-guide-img4" style={{width:"100%"}}/>
  <div class="container4">
   <Link style={{textDecoration:"none"}}><h4><b>DISCHARGE</b></h4></Link> 
   
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
export default InpatientGuide