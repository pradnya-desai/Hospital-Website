import React from 'react';
import TeleConsultation from './TeleConsultation'
import Pathology from './Pathology'
import Speciality from './Speciality'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

class Homepage extends React.Component {
   myFunction=()=> {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      // Get the container element

      // Close the dropdown menu if the user clicks outside of it
    //   window.onclick = function(event) {
        if () {
          var dropdowns = document.getElementsByClassName("dropdown-content");
    
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        
      }
  

    render()
     {

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

          <button type="button" id="phonenobtn2">
            <div class="slash">
              <b>/</b>
            </div>
            1234567892
          </button>
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

        <div class="Side-Toggle-Bar">
       
        <div class="dropdown">
  {/* <button onClick={this.myFunction}  class="dropbtn">Dropdown</button> */}
  <input type="image" src="https://img.icons8.com/fluent/2x/menu.png" onClick={this.myFunction}  class="dropbtn"/>
  <div id="myDropdown" class="dropdown-content">
    <Link to="/ContactUs" class="active" id="contactus">CONTACT US</Link>
    <Link to="#" id="aboutus">ABOUT US</Link>
    <Link to="#" id="speciality">SPECIALITY</Link>
    <Link to="#" id="pathology" >PATHOLOGY</Link>
    <Link to="#" id="consultation">CONSULTATION</Link>
  </div>
</div>
{/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHLJXxBqzSchmc_n05a2T_Of-j83Rq5BueuA&usqp=CAU */}

{/* data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz8+WlpZLS0v7+/vu7u5vb29TU1PDw8Pz8/N8fHyCgoITExMzMzOsrKyPj4+6urrU1NTo6Oizs7NCQkJkZGQoKCilpaUtLS05OTmenp7IyMiFhYVaWlpqamoLCwt+baPtAAACfUlEQVR4nO3di27CMAyF4TBWoAxYx2UX2Abv/5RbpSE2aXLSJpJl5/+ewEdQSlLXCQEAAAAAAAAAAAAAAAAA/Fu2H5/3dnyu2uWgfLv5xJ75Ljlf02kXO1LXpAWcHbQrHe0wSwm4XGvXmWGdcDU2G+0qs2ziX9SVdo2ZVrGAW+0Ks20jCZ+1C8z2LAecaddXgPx7+qhdXgGPYsKzdnkFnMWEL9rlFfAiJrxol1eCmFC7uCLEhJb/sV2txYT32uUVcBATWl03/daJCd+1yyvgXUzo4Mf0IgcMr9oFZnuNJGzetCvM9BZdIFq/EiNXof3v6SkeMISpdpUZpikBQ3jSrnO0p7SA3+tgixvCk8k8aS/xx2561K53oGOXvuV9Dbm9s2M7OB4AAAAAAAAAALBj2Z6mdpwGvm4Rmv1C+1nSYIt94rsIvdZmN/umTQ34oF3qaA9pAe19QW8WKQFtPuG+mscDWu/0lru8g4dm/Vi7gvVXZqIvzTTa9RUg3xbtNgvdyG1Ddm+FN/JN0Vqf0H82YkL7LcKxJmHt6oqo/DO0uaj46ygm9P9b6v9+6P8/jf//pRWsLfyvDytY41ewT2P5ppi411bBfmkFe949588tAAAAAAAAAACAJc7nRO06aw/Yhs36mtkcen1Onte21y51tMSZe+7nJp60q8ySMPvS/fzSxvrc+egMWtvzWXuxOcLa9RXg+yrsyVei/5nsdg+zupHn6vs/G0G7uiIqT2j9ft+Tz5mxuWz6Sz4ryHqXd0/u9Lbfqh9t1nd/7loFZ+eZf2kmev5hBWdY+j+HtIKzZCs4Dzj4P9O5Z+1c7g9euAAAAAAAAAAAAAAAAABQhS+ZyFZoP93BCgAAAABJRU5ErkJggg== */}
        </div>
      </div>
    );
    }
}

export default Homepage;


{/* <div id="myLinks">
<img id="hospital-hamburger-menu" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHLJXxBqzSchmc_n05a2T_Of-j83Rq5BueuA&usqp=CAU" height="50px" width="50px"/>
  <ul>
  {/* onClick={this.myFunction} */}
   
    //   <li>Contact Us</li>
    //   <li>About Us</li>
    //   <li>Specialityn</li>
    //   <li>Pathology</li>
    //   <li>TeleConsultation</li>
    // </ul>
    // </div> */
     {/*
      
    <a href={ContactUs}>Contact</a>
    <a href={AboutUs}>About</a>
    <a href={Speciality}>Speciality</a>
    <a href={Pathology}>pathology</a>
    <a href={TeleConsultation}>Tele Consultation</a>
  </div>
  <a href={this.myFunction}>
    
    </a> */}

    //      myFunction=()=> {
//         var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
//   }
// Loop through the buttons and add the active class to the current/clicked button

  // Get all links with class="btn" inside the container
//  links = btnContainer.getElementsByTagName("Link");
//  btnContainer = document.getElementsByClassName("dropdown-content");

// for (i = 0; i < btnContainer.length; i++) {
 
//   links[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }