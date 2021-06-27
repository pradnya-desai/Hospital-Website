import { Link } from 'react-router-dom'
import Mailto from 'react-protected-mailto'


function PatientLoginRegister(){

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
            <h3 id="aboutus" style={{marginTop:"10px"}}>Patient Registration</h3>
            <Link to="/" id="homelink"><h3>Home  <span id="greaterthan"> {'>'} </span></h3> </Link>
            <h3 id="abouttext" style={{marginTop:"50px", marginLeft:"170px"}}>Patient Registration</h3>
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

<div class="centered">Already have an account?<br/> To Login<b><a href="#login-section" class="pulse-button">
           &darr;
    </a></b>
	</div>
		<div class="form-wrapper" style={{marginTop:'300px'}}> 
			<form class="fcorn-register container" style={{backgroundColor:'#1c55ac', height:"1000px"}} >
				<p class="register-info">Note: All fields are required.</p>
				<div class="row">
					<p class="col-md-6"><input type="text" placeholder="First Name" required /></p>
					<p class="col-md-6"><input type="text" placeholder="Last Name" required /></p>
				</div>
				<p><input type="email" placeholder="Email Address" required />
				   <span class="extern-type" style={{color:'#dcdcdc',fontWeight:'bolder'}}>We'll keep this private.</span>
				</p>
				<p><input type="password" placeholder="Password" required />
					<span class="extern-type" style={{color:'#dcdcdc',fontWeight:'bolder'}}>Atleast 8 characters long.</span>
				</p>
				<p><input type="password" placeholder="Verify Password" required className="mb-5"/></p>
				<div class="row">
					<p class="col-md-4"><input type="text" placeholder="Date (dd)" required /></p>
					<p class="col-md-4"><input type="text" placeholder="Month (mm)" required /></p>
					<p class="col-md-4"><input type="text" placeholder="Year (yyyy)" required /></p>
				</div>
				<div class="row">
					<p class="col-md-6 city-wrap">
						<select>
							<option value="0" selected disabled>City</option>
							<option value="1">Pune</option>
							<option value="2">Mumbai</option>
							<option value="3">Delhi</option>
							<option value="4">Hyderabad</option>
							<option value="5">Bangalore</option>
							<option value="6">Ahmedabad</option>

						</select>
					</p>
					<p class="col-md-6 country-wrap">
						<select>
							<option value="0" selected disabled>Country</option>
							<option value="1">India Only</option>
							<option value="2">Outside India</option>
						</select>
					</p>
          <p class="col-md-6 specialty-wrap">
						<select>
							<option value="0" selected disabled>Addictions</option>
							<option value="1">Smoking</option>
							<option value="2">Alcohol</option>
							<option value="3">Drugs</option>
							<option value="4">Prescription drugs addiction</option>
							<option value="5">Mobile/Internet Addiction</option>
							<option value="6">Tobacco</option>
							 <option value="7">None</option>
							{/*<option value="8">Ear Nose Throat Head And Neck Surgery</option>
							<option value="9">General Surgery</option>
							<option value="10">Anaesthesia</option>
							<option value="11">Cardiology - Interventional</option> */}
						</select>
            </p>
            <p class="col-md-6 language-wrap"> 
           <p className="col-md-6"> <input type="text" placeholder="Age" required /><span class="extern-type" /></p>
          
               {/* <span class="extern-type" style={{color:'#dcdcdc',fontWeight:'bolder'}}>Proficient languages.</span> */}
			</p>
          <p class="col-md-6"><input type="text" placeholder="Address" required /><span class="extern-type" />

          </p>
          
          <p class="col-md-3"><input type="text" placeholder="Height" required /><span class="extern-type" /></p>

          <p class="col-md-3"><input type="text" placeholder="Weight" required /><span class="extern-type" /></p>


          <textarea placeholder="Medical History">Medical History</textarea>

          
          {/* <p class="col-md-4"><input type="text" placeholder="PayPal username" required /></p> */}
          
          
          
          
        </div>
        	<p class="register-toggle" >
					<label for="register-agree" class="toggle-label" data-on="YES" data-off="NO" style={{marginTop:'27px'}}>
						<input type="checkbox" id="register-agree" class="toggle-input" />
						<span class="toggle-handle" ></span>
					</label><br/>
					<span class="info" style={{color:'#dcdcdc',fontWeight:'bolder',fontSize:'18px'}}>Do you agree to the <a href="#" style={{color:'#dcdcdc',fontWeight:'bolder',marginTop:'30px'}}>terms and conditions?</a></span>
				</p>

				
				<p class="register-submit"><input type="submit" value="Register Now" style={{marginTop:'50px',color:'#1c55ac'}}/></p>
				<div id="myNav" class="overlay">
  <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
  <div class="overlay-content">
    {/* <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a> */}

<div class="login-container-doctor">
       
       <form action="" id="log-in-doctor">
           <h1>LOGIN</h1>
           <div id="udiv">
               <label id="uid">Username</label>
               <input type="text" id="dtext" name="emailid" placeholder="Enter your email-id here"  />
           </div>
           <div id="pdiv" style={{marginTop:'-40px'}}>
               <label id="pid">Password</label>
               <input type="password" id="ptext" name="password" placeholder="Enter your password here"  />
           </div>
           <input type="submit" id="dsubmit" name="login" value="LOGIN" />
          
           <a id="fpwd" href="#">Forgot Password?</a>
            {/* <a href="modifiedhomepagespiceup.html"><button type="button" id="backbtn" width="100px"  style={{float: 'left', marginTop: '-10px'}}>BACK</button></a> */}
       </form>

       {/* <form action="" id="register">
        <h1>LOGIN</h1>
        <div>
            <label>Email-Id</label>
            <input type="text" name="emailid" placeholder="Enter your email-id here" value="" />
        </div>
        <div>
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password here" value="" />
        </div>
        <input type="submit" name="login" value="LOGIN" />
       
     
         <a href="modifiedhomepagespiceup.html"><button type="button" id="backbtn" width="100px" >BACK</button></a>
    </form> */}
   </div>
	
  </div>
</div>

		<section id="login-section">
				<h3 style={{marginLeft:'340px',color:'#4cbeed'}}>Already have an account?<button onClick={openNav}><u>Login!</u></button></h3>
				</section>

			</form>
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

export default PatientLoginRegister