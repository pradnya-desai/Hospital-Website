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

        {/* </div> */}



        <div class="card" width= "100px">
  <div class="card-body">
  <Link style={{textDecoration:"none", color:"black"}} to="/TeleConsultation" class="card-link"> <i class="fas fa-laptop-medical fa-9x" id="tele-icon"></i><h3 id="tele-link" style={{display:"block", marginTop:"50px", marginLeft:"20px"}}>TELE-CONSULTATION</h3></Link>
    {/* <Link style={{textDecoration:"none"}} to="/TeleConsultation" class="card-link"><img src="https://t3.ftcdn.net/jpg/04/08/33/12/360_F_408331285_zZaUmE6irZczInvZY0t7uBORBirGPVxE.jpg" width="334px" height="300px" id="tele-icon"/><h3>TELE-CONSULTATION</h3></Link> */}
    {/* <a href="#" class="card-link">Another link</a> */}
  </div>
</div>
      </div>


    );
  }
}


export default TrialHp;