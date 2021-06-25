import React from 'react'
import { Link } from 'react-router-dom'
import Mailto from 'react-protected-mailto'
import './Aboutus.css'

function AboutUs() {
    // const myFunction = () => {
    //     document.getElementById("myDropdown").classList.toggle("show");

    // }

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

            <div class="backhome"></div>
            <div className="backhome-text">
                <h3 id="aboutus">About Us</h3>
                <Link to="/" id="homelink"><h3>Home<span id="greaterthan"> {'>'} </span></h3> </Link>
                <h3 id="abouttext">About Us</h3>
            </div>

            {/* <div class="Side-Toggle-Bar" id="Side-Toggle-Bar">

                <div class="dropdown">

                    <input type="image" src="https://img.icons8.com/fluent/2x/menu.png" onClick={myFunction} id="dropbtn" class="dropbtn" />
                    <div id="myDropdown" class="dropdown-content">

                        <Link to="/ContactUs" class="active" id="contactus">CONTACT US</Link>
                        <Link to="#" id="aboutuss">ABOUT US</Link>
                        <Link to="#" id="speciality">SPECIALITY</Link>
                        <Link to="#" id="pathology" >PATHOLOGY</Link>
                        <Link to="#" id="consultation">CONSULTATION</Link>
                    </div>
                </div>
            </div> */}

            <div className="chairman-message-text" style={{ textAlign: 'center', marginTop: '300px' }}>
                <h1>Chairman's Message</h1>

            </div>

            <section className="chairman-message">
                <div className="chairman-message-image" style={{ marginTop: '300px' }}>
                    <img src="https://www.cdc.gov/nchs/images/covid19/nhcs/encounters.jpg" style={{ height: '450px', width: '500px', marginTop: '-270px' }} />
                </div>

                <div style={{ padding: '20px', marginTop: '80px', marginLeft: '-105px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est corrupti laudantium molestiae. Saepe
                    dolorum inventore, quisquam neque voluptate maiores consequuntur expedita rerum explicabo laborum, fugiat
                    libero, delectus autem illo beatae quaerat corrupti ad ipsum eius. Minus hic aut iste alias in quibusdam
                    quam, reprehenderit repudiandae saepe sequi incidunt qui porro placeat, adipisci aperiam, veniam nesciunt
                    enim earum repellat a molestiae odio quis architecto voluptatibus! Magni quos ipsum corporis laudantium,
                    nisi sequi ex nam atque, error eligendi vitae ut at sint voluptate voluptas doloribus quod molestiae
                    deleniti dolores ducimus blanditiis officiis! Tempore quos dolores magnam explicabo, quis consequatur
                    dolorem optio?
          </div>
            </section>

            <section className="first">
                <div>
                    <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/04/internationalpatientcare.jpg" style={{ height: '480px', width: '650px' }} alt="pic1" />
                </div>

                <div style={{ padding: '20px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est corrupti laudantium molestiae. Saepe
                dolorum inventore, quisquam neque voluptate maiores consequuntur expedita rerum explicabo laborum, fugiat
                libero, delectus autem illo beatae quaerat corrupti ad ipsum eius. Minus hic aut iste alias in quibusdam
                quam, reprehenderit repudiandae saepe sequi incidunt qui porro placeat, adipisci aperiam, veniam nesciunt
                enim earum repellat a molestiae odio quis architecto voluptatibus! Magni quos ipsum corporis laudantium,
                nisi sequi ex nam atque, error eligendi vitae ut at sint voluptate voluptas doloribus quod molestiae
                deleniti dolores ducimus blanditiis officiis! Tempore quos dolores magnam explicabo, quis consequatur
                dolorem optio?
              </div>


            </section>
            <section class="second">
                <div style={{ padding: '20px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est corrupti laudantium molestiae. Saepe
                dolorum inventore, quisquam neque voluptate maiores consequuntur expedita rerum explicabo laborum, fugiat
                libero, delectus autem illo beatae quaerat corrupti ad ipsum eius. Minus hic aut iste alias in quibusdam
                quam, reprehenderit repudiandae saepe sequi incidunt qui porro placeat, adipisci aperiam, veniam nesciunt
                enim earum repellat a molestiae odio quis architecto voluptatibus! Magni quos ipsum corporis laudantium,
                nisi sequi ex nam atque, error eligendi vitae ut at sint voluptate voluptas doloribus quod molestiae
                deleniti dolores ducimus blanditiis officiis! Tempore quos dolores magnam explicabo, quis consequatur
                dolorem optio?
                </div>

                <div>
                    <img src="http://www.sevenhillshospital.com/images/medium/sevenhills-consultants.jpg" style={{ height: '520px', width: '698px', marginTop: '-30px' }} alt="pic1" />
                </div>
            </section>

            <section className="first" style={{ marginTop: '5px' }}>
                <div >
                    <img src="https://cdn.apollohospitals.com/dev-apollohospitals/2021/04/internationalpatientcare.jpg" style={{ height: '510px', width: '650px', marginTop: '-5px' }} alt="pic1" />
                </div>

                <div style={{ padding: '20px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est corrupti laudantium molestiae. Saepe
                dolorum inventore, quisquam neque voluptate maiores consequuntur expedita rerum explicabo laborum, fugiat
                libero, delectus autem illo beatae quaerat corrupti ad ipsum eius. Minus hic aut iste alias in quibusdam
                quam, reprehenderit repudiandae saepe sequi incidunt qui porro placeat, adipisci aperiam, veniam nesciunt
                enim earum repellat a molestiae odio quis architecto voluptatibus! Magni quos ipsum corporis laudantium,
                nisi sequi ex nam atque, error eligendi vitae ut at sint voluptate voluptas doloribus quod molestiae
                deleniti dolores ducimus blanditiis officiis! Tempore quos dolores magnam explicabo, quis consequatur
                dolorem optio?
              </div>


            </section>
            <section class="second">
                <div style={{ padding: '20px' }}>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est corrupti laudantium molestiae. Saepe
                    dolorum inventore, quisquam neque voluptate maiores consequuntur expedita rerum explicabo laborum, fugiat
                    libero, delectus autem illo beatae quaerat corrupti ad ipsum eius. Minus hic aut iste alias in quibusdam
                    quam, reprehenderit repudiandae saepe sequi incidunt qui porro placeat, adipisci aperiam, veniam nesciunt
                    enim earum repellat a molestiae odio quis architecto voluptatibus! Magni quos ipsum corporis laudantium,
                    nisi sequi ex nam atque, error eligendi vitae ut at sint voluptate voluptas doloribus quod molestiae
                    deleniti dolores ducimus blanditiis officiis! Tempore quos dolores magnam explicabo, quis consequatur
                    dolorem optio?
                </div>

                <div>
                    <img src="http://www.sevenhillshospital.com/images/medium/sevenhills-consultants.jpg" style={{ height: '500px', width: '698px', marginTop: '-30px' }} alt="pic1" />
                </div>
            </section>

            <div className="quality-assurance-image" id="quality-assurance-image">
                <img src="https://www.gccbusinessnews.com/filestorage/2020/07/GBN_E-Hospital_07072020.jpg" style={{ height: '450px', width: '80%', marginTop: '50px' }} />
            </div>

            <div className="quality-assurance-text">
                <h1>Quality Assurance</h1>
                <div style={{ padding: '30px' }}> <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est corrupti laudantium molestiae. Saepe
                dolorum inventore, quisquam neque voluptate maiores consequuntur expedita rerum explicabo laborum, fugiat
                libero, delectus autem illo beatae quaerat corrupti ad ipsum eius. Minus hic aut iste alias in quibusdam
                quam, reprehenderit repudiandae saepe sequi incidunt qui porro placeat, adipisci aperiam, veniam nesciunt
                enim earum repellat a molestiae odio quis architecto voluptatibus! Magni quos ipsum corporis laudantium,
                nisi sequi ex nam atque, error eligendi vitae ut at sint voluptate voluptas doloribus quod molestiae
                deleniti dolores ducimus blanditiis officiis! Tempore quos dolores magnam explicabo, quis consequatur
                dolorem optio?</h3>
                </div>
            </div>

            <div className="technology-text">
                <h1>Technology</h1>
            </div>


            <section className="technology">
                <div>
                    <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" style={{ height: '500px', width: '680px' }} />
                </div>
                <div style={{ padding: '30px' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est corrupti laudantium molestiae. Saepe
                dolorum inventore, quisquam neque voluptate maiores consequuntur expedita rerum explicabo laborum, fugiat
                libero, delectus autem illo beatae quaerat corrupti ad ipsum eius. Minus hic aut iste alias in quibusdam
                quam, reprehenderit repudiandae saepe sequi incidunt qui porro placeat, adipisci aperiam, veniam nesciunt
                enim earum repellat a molestiae odio quis architecto voluptatibus! Magni quos ipsum corporis laudantium,
                nisi sequi ex nam atque, error eligendi vitae ut at sint voluptate voluptas doloribus quod molestiae
                deleniti dolores ducimus blanditiis officiis! Tempore quos dolores magnam explicabo, quis consequatur
                dolorem optio?
                </div>
            </section>

            <section className="second-technology">
                <div style={{ padding: '30px' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste est corrupti laudantium molestiae. Saepe
                dolorum inventore, quisquam neque voluptate maiores consequuntur expedita rerum explicabo laborum, fugiat
                libero, delectus autem illo beatae quaerat corrupti ad ipsum eius. Minus hic aut iste alias in quibusdam
                quam, reprehenderit repudiandae saepe sequi incidunt qui porro placeat, adipisci aperiam, veniam nesciunt
                enim earum repellat a molestiae odio quis architecto voluptatibus! Magni quos ipsum corporis laudantium,
                nisi sequi ex nam atque, error eligendi vitae ut at sint voluptate voluptas doloribus quod molestiae
                deleniti dolores ducimus blanditiis officiis! Tempore quos dolores magnam explicabo, quis consequatur
                dolorem optio?
        </div>

                <div>
                    <img src="http://www.snuh.org/upload/board/DF/b284b2a4a3ad4425ae0a6839bd54b1a9.jpg" style={{ height: '520px', width: '670px' }} />
                </div>
            </section>

            <div className="mission-text">
                <h1>Mission</h1>
            </div>

            <div className="mission" style={{padding:'20px'}}>
                “Our mission is to provide healthcare of international standards through a team of highly qualified professionals and affordable to the community. We are also committed to maintaining clinical excellence by focussing on healthcare academics, research, and the latest technology.”
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
                                        <span><Mailto style={{ textDecoration: "none" }} email="pradnya.d10@gmail.com" subject="Hello" body="Hello world!"></Mailto></span>
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
                                            <input type="text" placeholder="Email Address" />
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
                                        <li><a href="#" style={{ paddingRight: '20px' }}>Contact</a></li>
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
export default AboutUs