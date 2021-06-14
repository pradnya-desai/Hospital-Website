import React from 'react';
// import TeleConsultation from './TeleConsultation'
// import Pathology from './Pathology'
// import Speciality from './Speciality'
// import AboutUs from './AboutUs'
// import ContactUs from './ContactUs'
import { Link } from 'react-router-dom'

class TrialHp extends React.Component {
 
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");

  }
  // Close the dropdown menu if the user clicks outside of it
    
 
 Register=()=>{
  document.getElementById("log-in").style.left="-400px";
  document.getElementById("register").style.left="50px"; 
  document.getElementById("btn").style.left="110px";
// x.style.left="-400px";
// y.style.left="50px";
// z.style.left="110px";
}
 LogIn=()=>{
  document.getElementById("log-in").style.left="50px";
  document.getElementById("register").style.left="450px"; 
  document.getElementById("btn").style.left="0px";
// x.style.left="50px";
// y.style.left="450px";
// z.style.left="0px";
}

  if() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  render() {

    return (
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
        <div class="logo-class">
          <img
            id="hospital-name"
            src="https://image.freepik.com/free-vector/hospital-logo-template_1061-6.jpg"
            height="310px"
            width="310px"
          />
          <h3>HealthCare Multispeciality Hospital</h3>
          {/* <h4>Advanced Care in all Areas</h4> */}
          <img
            src="https://www.sparrowonline.org/images/silver-jubilee.jpg"
            id="silver-jubilee"
            height="270px"
            width="500px"
          />
          <img
            id="care-logo"
            src="https://dnabazar.com/wp-content/uploads/2020/04/1-weCare-Logo-noCap.png"
            height="200px"
            width="300px"
          />
        </div>

        <div class="Side-Toggle-Bar" id="Side-Toggle-Bar">

          <div class="dropdown">

            <input type="image" src="https://img.icons8.com/fluent/2x/menu.png" onClick={this.myFunction} id="dropbtn" class="dropbtn" />
            <div id="myDropdown" class="dropdown-content">
              {/* <a href="#">CONTACT US</a>
    <a href="#">SPECIALITY</a>
    <a href="#">PATHOLOGY</a> */}
              <Link to="/ContactUs" class="active" id="contactus">CONTACT US</Link>
              <Link to="#" id="aboutus">ABOUT US</Link>
              <Link to="#" id="speciality">SPECIALITY</Link>
              <Link to="#" id="pathology" >PATHOLOGY</Link>
              <Link to="#" id="consultation">CONSULTATION</Link>
            </div>
          </div>
        </div>

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img id="img1" src="https://thumbs.dreamstime.com/b/doctor-hospital-background-copy-space-doctor-hospital-background-copy-space-healthcare-medical-concept-200062294.jpg" class="d-block w-100" alt="img1" />
            </div>
            <div class="carousel-item">
              <img id="img2" src="https://static8.depositphotos.com/1475562/1036/i/950/depositphotos_10367338-stock-photo-newborn-baby-boy.jpg" class="d-block w-100" alt="img2" />
            </div>
            <div class="carousel-item">
              <img id="img3" src="https://media.istockphoto.com/photos/portrait-of-multicultural-medical-team-standing-in-hospital-corridor-picture-id1204177269?k=6&m=1204177269&s=612x612&w=0&h=YO1A7YXNYGNSIq8nOTj61RjR_K8UASFZLDBPgmKqVX8=" class="d-block w-100" alt="img3" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


<div id="cardss">
  
        <div class="card" width= "100px">
  <div class="card-body">
  <Link style={{textDecoration:"none", color:"black"}} to="/TeleConsultation" class="card-link"> <i class="fas fa-laptop-medical fa-5x" id="tele-icon"></i><h5 id="tele-link" style={{display:"block", marginTop:"-10px", marginLeft:"10px"}}>TELE-CONSULTATION</h5></Link>
  </div>
</div>

<div class="card" width= "100px">
  <div class="card-body">
  <Link style={{textDecoration:"none", color:"black"}} to="/RoomCategories" class="card-link"> <i class="fas fa-clinic-medical fa-5x" id="room-icon"></i><h5 id="room-link" style={{display:"block", marginTop:"-10px", marginLeft:"20px"}}>ROOM-CATEGORIES</h5></Link>
  </div>
</div>

<div class="card" width= "100px">
  <div class="card-body">
  <Link style={{textDecoration:"none", color:"black"}} to="/InpatientGuide" class="card-link"> <i class="fas fa-hospital-user fa-5x" id="guide-icon"></i><h5 id="guide-link" style={{display:"block", marginTop:"-10px", marginLeft:"30px"}}>INPATIENT-GUIDE</h5></Link>
  </div>
</div>
<div class="card" width= "100px">
  <div class="card-body">
  <Link style={{textDecoration:"none", color:"black"}} to="/Query" class="card-link"> <i class="fas fa-question-circle fa-5x" id="query-icon"></i><h5 id="query-link" style={{display:"block", marginTop:"-10px", marginLeft:"40px"}}>POST-A-QUERY</h5></Link>
  </div>
</div>

<div class="card" width= "100px">
  <div class="card-body">
  <Link style={{textDecoration:"none", color:"black"}} to="/HealthInsurance" class="card-link"> <i class="fas fa-heartbeat fa-5x" id="insurance-icon"></i><h5 id="insurance-link" style={{display:"block", marginTop:"-10px", marginLeft:"10px"}}>HEALTH-INSURANCE</h5></Link>
  </div>
</div>

<div class="card" width= "100px">
  <div class="card-body">
  <Link style={{textDecoration:"none", color:"black"}} to="/CLINICS" class="card-link"> <i class="fas fa-hospital-symbol fa-5x" id="clinics-icon"></i><h5 id="clinics-link" style={{display:"block", marginTop:"-10px", marginLeft:"60px"}}>CLINICS</h5></Link>
  </div>
</div>

<div class="card" width= "100px">
  <div class="card-body">
  <Link style={{textDecoration:"none", color:"black"}} to="/WellnessCentre" class="card-link"> <i class="fas fa-shoe-prints fa-5x" id="wellness-icon"></i><h5 id="wellness-link" style={{display:"block", marginTop:"-10px", marginLeft:"20px"}}>WELLNESS-CENTRE</h5></Link>
  </div>
</div>


<div class="card" width= "100px">
  <div class="card-body">
  <Link style={{textDecoration:"none", color:"black"}} to="/OurDoctors" class="card-link"> <i class="fas fa-user-md fa-5x" id="doctor-icon"></i><h5 id="doctor-link" style={{display:"block", marginTop:"-10px", marginLeft:"30px"}}>OUR-DOCTORS</h5></Link>
  </div>
</div>
      </div>

      <div class="container">
  <form>
  <div class="row">
    <div class="col-25">
      <label for="fname">Full Name</label>
    </div>
    <div class="col-75">
      <input type="text" id="fname" name="fullname" placeholder="Your name.." required/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="lname">Age</label>
    </div>
    <div class="col-75">
      <input type="text" id="lname" name="Age" placeholder="Your Age.." required/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="country">Phone Number</label>
    </div>
    <div class="col-25">
    <input type="text" id="lname" name="PhoneNo" placeholder="Your Phone no.." required/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="email">Email-Id</label>
    </div>
    <div class="col-75">
      <input type="text" id="email-id" name="email-id" placeholder="Your email-id.." required/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="Gender">Gender</label>
    </div>
    <div class="col-75">
     <p> Male</p><input type="radio" id="male" name="genderselect"/>
      <p>Female</p><input type="radio" id="female" name="genderselect" />
      <p>Other</p><input type="radio" id="other" name="genderselect"/>
    </div>
  </div>
  <div class="row">
    <div class="col-25">
      <label for="Speciality">Speciality</label>
    </div>
    <div class="col-75">
    <select id="Speciality" name="Speciality">
      <option selected disabled>SELECT--CATEGORY</option>
        <option value="ENT">ENT</option>
        <option value="NEUROLOGY">NEUROLOGY</option>
        <option value="MENTAL HEALTH">MENTAL HEALTH</option>
      </select>
    </div>
  </div>



  <div class="row">
    <div class="col-25">
      <label for="appointment">Appointment Date</label>
    </div>
    <div class="col-75">
      <input type="date" id="appointment" name="email-id" required/>
    </div>
  </div>



  <div class="row">
    <div class="col-25">
      <label for="subject">Symptoms</label>
    </div>
    <div class="col-75">
      <textarea id="symptoms" name="symptoms" placeholder="Write something.." style={{height:"200px"}}></textarea>
    </div>
  </div>
  <div class="row">
    <input type="submit" value="BOOK AN APPOINTMENT"/>
  </div>
  </form>
</div>

<div class="Login/Register">
  
  <Link to="DoctorLoginRegister"><input type="checkbox" id="cb1" /><label for="cb1" id="lcb1">Doctor Login/Registration</label></Link>
  <Link to="PatientLoginRegister"><input type="checkbox" id="cb2" /><label for="cb1" id="lcb2">Patient Login/Registration</label></Link>
    
  </div>
</div>
    );
  }
}


export default TrialHp;



 {/* <Link style={{textDecoration:"none"}} to="/TeleConsultation" class="card-link"><img src="https://t3.ftcdn.net/jpg/04/08/33/12/360_F_408331285_zZaUmE6irZczInvZY0t7uBORBirGPVxE.jpg" width="334px" height="300px" id="tele-icon"/><h3>TELE-CONSULTATION</h3></Link> */}
    {/* <a href="#" class="card-link">Another link</a> */}

         {/* <div class="Cards">

          <div id="Teleconsultation"  height="50px"
    width="100px">
            Tele Communication
    </div>
          <div id="RoomCategories"height="50px"
    width="100px">
            Room Categories
    </div>
          <div id="HealthInsurance"height="50px"
    width="100px">
            Health Insurance
    </div>
          <div id="InpatientGuide"height="50px"
    width="100px">
            Inpatient Guide
    </div>
          <div id="PostQuery"height="50px"
    width="100px">
            Post Query
    </div>
          <div id="Clinics"height="50px"
    width="100px">
            Clinics
    </div>
    
          <div id="WellnessCenter"height="50px"
    width="100px">
            Wellness Center
    </div>
          <div id="Doctors"height="50px"
    width="100px">
            Doctors
    </div> */}


//     <div class="appointment">
//   <div class="form-fields">
//       <div class="form-floating mb-3">
//   <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
//   <label for="floatingInput">Email address</label>
// </div>
// <div class="form-floating">
//   <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
//   <label for="floatingPassword">Password</label>
// </div>
// <button type="submit" class="btn btn-primary">Submit</button>
//       </div>
//       </div>