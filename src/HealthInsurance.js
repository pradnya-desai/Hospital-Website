import './HealthInsurance.css'
import { Link } from 'react-router-dom'
import Mailto from 'react-protected-mailto'

function HealthInsurance(){
   
    const myFunction = () => {
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
     const openNav=()=> {
         document.getElementById("myNav").style.height = "100%";
       }
       
       const closeNav=()=> {
         document.getElementById("myNav").style.height = "0%";
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
            <h3 id="aboutus" style={{marginTop:"10px"}}>Health Insurance</h3>
            <Link to="/" id="homelink"><h3 style={{marginTop:"40px"}}>Home<span id="greaterthan"> {'>'} </span></h3> </Link>
            <h3 id="abouttext" style={{marginTop:"90px", marginLeft:"170px"}}>Health Insurance</h3>
        </div>
         <div class="Side-Toggle-Bar" id="Side-Toggle-Bar"  style={{marginTop:"185px"}}>

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

<div>
  <h5 id="medical-guide1">Your easy guide to avail cashless hospitalization.
Worried about your loved one's health and paying for it?</h5>
<h5 id="medical-guide2">Our Hospital accepts medical policies from 30 different insurance companies and 25+ different <br/> Third Party Administrators (TPA's) across India. With EMI facilities and also insurance available,<br/> we make it easy for our patients in their hours of need.</h5>
<h4 id="medical-guide3">Insurance Companies</h4>
<ul class="spl_list col-2-list">
                        <li><p class="mic"><a href="https://www.bajajallianz.com/Corp/health-insurance/health-insurance-plans.jsp" target="_blank">Bajaj Allianz General Insurance Company</a></p></li>
                        <li><p class="mic"><a href="https://www.icicilombard.com/health-insurance/get-quote/basic-details?opt=chi&source=nav" target="_blank">ICICI Lombard General Insurance Company</a></p></li>
                        <li><p class="mic"><a href="https://www.starhealth.in/" target="_blank">Star Health Insurance</a></p></li>
                        <li><p class="mic">Apollo MUNICH Health Insurance Company</p></li>
                        <li><p class="mic">Aditya Birla Health Insurance Company</p></li>
                        <li><p class="mic">Bharti Axa General Insurance Company</p></li>
                        <li><p class="mic">Cholamandalam General Insurance Company</p></li>
                        <li><p class="mic">Cigna TTK Health Insurance Company</p></li>
                        <li><p class="mic">Future Generali General Insurance Company</p></li>
                        <li><p class="mic">HDFC ERGO General Insurance Company</p></li>
                        <li><p class="mic">IFFCO Tokio General Insurance Company</p></li>
                        <li><p class="mic">Kotak General Insurance Company</p></li>
                        <li><p class="mic">Liberty Videocon General Insurance Company</p></li>
                        <li><p class="mic">Magma HDI General Insurance Company</p></li>
                        <li><p class="mic">ICICI Prudential Life Insurance Company</p></li>
                        <li><p class="mic">Life Insurance Corporation of India</p></li>

                        <div style={{background:"#dcdcdc",marginLeft:"-15px"}}>
           
           <div class="insuranceIcons">
               <img src="https://www.jehangirhospital.com/images/icon/health-insurance-icons/1.png" alt="Medical Health Insurances"/>
               <img style={{paddingLeft:"60px"}} src="https://www.jehangirhospital.com/images/icon/health-insurance-icons/2.png" alt="Medical Health Insurances"/>
               <img style={{paddingLeft:"60px"}} src="https://www.jehangirhospital.com/images/icon/health-insurance-icons/3.png" alt="Medical Health Insurances"/>
               <img style={{paddingLeft:"50px"}} src="https://www.jehangirhospital.com/images/icon/health-insurance-icons/4.png" alt="Medical Health Insurances"/>
               <img style={{paddingLeft:"50px"}} src="https://www.jehangirhospital.com/images/icon/health-insurance-icons/5.png" alt="Medical Health Insurances"/>
               <img style={{paddingLeft:"50px"}} src="https://www.jehangirhospital.com/images/icon/health-insurance-icons/6.png" alt="Medical Health Insurances"/>
               <img style={{paddingLeft:"50px"}} src="https://www.jehangirhospital.com/images/icon/health-insurance-icons/7.png" alt="Medical Health Insurances"/>
               <img style={{paddingLeft:"50px"}} src="https://www.jehangirhospital.com/images/icon/health-insurance-icons/8.png" alt="Medical Health Insurances"/>
           </div>
       
   </div>


                        <li><p class="mic">Max BUPA Health Insurance Company</p></li>
                        <li><p class="mic">National Insurance Company Ltd</p></li>
                        <li><p class="mic">New India Assurance Company Ltd</p></li>
                        <li><p class="mic">Oriental Insurance Company Ltd</p></li>
                        <li><p class="mic">Raheja QBE General Insurance Company</p></li>
                        <li><p class="mic">Reliance General Insurance Company</p></li>
                        <li><p class="mic">Religare Health Insurance Company</p></li>
                        <li><p class="mic">Royal Sundaram General Insurance Company</p></li>
                        <li><p class="mic">SBI General Insurance Company</p></li>
                        <li><p class="mic">TATA-AIG General Insurance Company</p></li>
                        <li><p class="mic">United India Insurance Company Ltd</p></li>
                        <li><p class="mic">Universal Sompo General Insurance Company</p></li>
                        <li><p class="mic">Birla Sunlife Insurance Company</p></li>
                    </ul>
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
export default HealthInsurance