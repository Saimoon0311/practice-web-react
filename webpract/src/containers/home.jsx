import React from 'react';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import {Link} from "react-router-dom"
import Typetwo from "../Config/typewritter"
import "./home.css"
import CountUp from 'react-countup'
import Counter from "../Config/counter"
import NavBar from "../Config/navbar"
import logo from "../images/logo.jpg"
import ser1 from "../images/ser1.png"
import ser2 from "../images/ser2.png"
import ser3 from "../images/ser3.png"
import ser4 from "../images/ser4.png"
import screen from "../images/j.png"
import Slider from "../Config/slider"
import Type from '../Config/typewritter';
import { FaTwitter } from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
// import { FaFontAwesome } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag,faAirFreshener,faPenSquare,faShieldAlt,faUsers,faUserCircle,faStar,faTruck,faUserCheck,faStarHalf,faCheckDouble,faUserShield,faBrain,faBook,faCertificate,faWarehouse ,faCheck} from '@fortawesome/free-solid-svg-icons'
function Home(){
  const handleType = (count: number) => {
    // access word count number
    console.log(count)}
                              

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

var sectionstyle ={
  width :"100%",
  height :"400px",
  backgroundImage : "url (" + {logo} + ")"
}

          return(
                    <div className="App">
                    <header className="App-header">
                      {/* <div className="orange"> */}
                        <div style={{marginTop:"20px"}}><p>UNITED KINGDOM           </p></div>
                        <div style={{marginTop:"20px"}}><p>         THEASSIGNMENTWRITING.COM          </p></div>
                        <div style={{marginTop:"20px"}}><p>        03112369064      </p></div>
                        <div>
                        <Link to="/contact" > <button  style={{backgroundColor:"#331a00",color:"white",width:"150px",height:"40px",borderRadius:"40px"}}>Contact Us</button></Link>
                      </div>
                      {/* </div>        */}
                    </header>
                    {/* <nav className="navbar">
                      <div>
                      <img src={logo} width="200px" />
                      </div >
                   <div> <p>Samples</p></div> 
                    <div><p>Experts</p></div> 
                    <div><p>Reviews</p></div> 
                    <div><p>Portfolio</p></div> 
                    <div><p>FAQS</p></div> 
                    <div><p>About Us</p> </div> 
                    <div><input type="text" placeholder="Search" /></div>
                    <div><button>Search</button></div>
                    </nav> */}
                    {/* <div className="helll">
<nav className="navBar">

    <img src={logo} width="100px"/>
    <ul >
        <li> <a class="active" href="#">Samples</a></li>
        <li><a href="about/about.html">Experts</a></li>
        <li><a href="industries/industries.html">Reviews</a></li>
        <li><a href="solution/solution.htm">Portfolio</a></li>
        <li><a href="service/service.html">FAQS</a></li>
        <li><a href="contact/contact.html">About US</a></li>
        <li><input type="search" placeholder="Search"  style={{height:"35px"}} /></li>
        <li><button style={{backgroundColor:'orange',color:"white",width:"180px",height:"50px",borderRadius:"40px",fontSize:"20px"}}>Call Back</button></li>
    </ul>
</nav>
</div> */}




<div>
  <NavBar></NavBar>
</div>





<div className="imagess" style={{backgroundImage:`url("https://www.cement.org/images/default-source/bldgs-structures/buildings_hdr.jpg?sfvrsn=8c64e1bf_2")`,backgroundSize:"cover"}}>
<div className='App'>
                      <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        The {' '}
                        <span style={{ color: 'orange', fontWeight: 'bold' }}>
                          {/* Style will be inherited from the parent element */}
                          <Typewriter
                            words={['Assignment Writing']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={55}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                          />
                        </span>
                      </h1>
                      <p style={{color:"red",fontSize:"20px",fontWeight:"bold"}}>Quality Assignment Help By Expert Writers</p>
                      <ul  style={{color:"red",fontSize:"20px",fontWeight:"bold"}}>
                        <li> <FontAwesomeIcon icon={faCheck} /> 100+ Students Support Executive to Listen Students Requirement</li>
                        <li><FontAwesomeIcon icon={faCheck} />Highest Grade for All Academic Needs</li>
                        <li><FontAwesomeIcon icon={faCheck} />10+ Years Of Experience in Academic Writing</li>
                        <li><FontAwesomeIcon icon={faCheck} />Best Assignment Writer</li>
                        <li><FontAwesomeIcon icon={faCheck} />Global Assignment Helper</li>
                        <li><FontAwesomeIcon icon={faCheck} />5,067 Academic Assignment Writers</li>
                      </ul>
                      <h2>4.9 <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStarHalf} /> </h2>
                    </div>
                    <div style={{textAlign:"center",paddingTop:"20px",paddingBottom:"20px"}}>
                    {/* <div> */}
                      <h4>The Assignment Writting</h4>
                      <p>Get Assignment Help From World’s No.1 Assignment Help Company</p>
                      <input className="inp" type="email" required /> <br /> <br />
                      <input className="inp"  type="number" required/> <br /> <br />
                      <input className="inp"  type="text" required/> <br /> <br />
                      <input className="inp"  type="text" required/> <br /> <br />
                      <input className="inp"  type="date" required/> <br /> <br />
                      <input className="inp"  type="time" required/> <br /><br />
                      <button className="free">Free Assignment</button>
                    {/* </div> */}
                    </div>
</div>
<div className="images">
  <button style={{backgroundColor:"orange",borderColor:"black",borderRadius:"10px",width:"200px",height:"50px",fontSize:"20px",fontWeight:"bold"}} >It's in the numbers</button>
</div>
<div className="number">
<div style={{textAlign:"center",sectionstyle}} >
<CountUp start={0} end={182300} delay={0} duration={2.90}>
  {({ countUpRef }) => (
    <div>
      <span className="counts" ref={countUpRef} />
    </div>
  )}
</CountUp>
  <h4>DELIVERED ORDERS</h4>
  <FontAwesomeIcon icon={faTruck} />
</div>
<div style={{textAlign:"center",sectionstyle}}>
<CountUp start={0} end={5843} delay={0} duration={2.80}>
  {({ countUpRef }) => (
    <div>
      <span className="counts" ref={countUpRef} />
    </div>
  )}
</CountUp>
  <h4>EXPERTS</h4>
  <FontAwesomeIcon icon={faUserCheck} />
</div>
<div style={{textAlign:"center",sectionstyle}}>
  <h2 className="counts" >4.9/5</h2>
  <h4>CLIENT RATING</h4>
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStar} />
  <FontAwesomeIcon icon={faStarHalf} />
  </div>
</div>
<div className="check">
  <h1>Power Content Creation</h1> <br />
  <p>The Salable Content Marketplace for Agencies & Retailers</p> <br />
  <div className="checktwo">
  <div><p> <FontAwesomeIcon icon={faCheckDouble} style={{color:"orange"}} />Ghostwritten Contenr     </p></div>
  <div> <p> <FontAwesomeIcon icon={faCheckDouble} style={{color:"orange"}} />Custom Writing, Rewriting & Editing  </p></div>
  <div> <p> <FontAwesomeIcon icon={faCheckDouble} style={{color:"orange"}} />Quick Turnaround Time  </p></div>
  <div> <p>  <FontAwesomeIcon icon={faCheckDouble} style={{color:"orange"}} />Unlimited Revisions </p></div>
</div>
</div>
<div style={{alignItems:"center",justifyContent:"center",textAlign:"center",paddingTop:"20px",fontSize:"20px"}}>
  <h1>–Whewed–</h1>
</div>
<div>
  <Slider/>
</div>
<div className="para">
  <h2>THE ASSIGNMENT WRITING TO MEET COURSEWORK OBLIGATIONS</h2> <br />
  <p>Working on assignments can be a challenging and exciting learning experience. It allows students to engage in research and learn new concepts. However, not many students can learn these new concepts effectively. As such, they often have problems working on academic assignments. The appalling part is that tasks can contribute up to 35% of the coursework grade. However, while assignments are essential for coursework grades, not many students can meet these obligations. Some students have challenges, and they require special help in working on such tasks. With adequate educational support, a student can prosper and achieve their life goals. We are here to provide reliable</p> <br />
  <h3>CHALLENGES IN ACADEMIC ASSIGNMENT WRITING</h3> <br />
  <p>Students face a host of unique challenges when it comes to working on academic assignments. The first challenge for some students is that they fail to understand the concepts taught in class. These are sometimes students with learning disabilities or international students as well. As such, these students are likely to struggle in producing assignments that can get good grades.</p> <br /> 
  <p>Furthermore, students also have obligations such as work, or complications such as health. These issues can affect the students’ ability to set aside time to work on school projects. Besides that, the number of scam services out there is also appalling. Some of these writing platforms are known for submitting poor work to clients.  The Assignment Writing  and more.</p> <br />
  <h3>THE SOLUTION</h3> <br />
  <p>The ideal solution, in this case, would be the student to invest in a reliable assignment help platform. We are here to help you work such projects and more. You fill out the simple order form and get assigned to one of our writers at the The Assignment Writing site. More so, before settling on a particular academic service, we recommend that you evaluate the site for the best academic outcomes. A good assignment writing service is professional and can respond to your queries fast.</p>
  <Counter></Counter>
</div>
<div style={{alignItems:"center",justifyContent:"center",textAlign:"center"}}>
  <h2>Price Calculator</h2> <hr />
  <p style={{fontSize:"30px",fontWeight:"bolder"}}> Select Subject</p> <select name="assignment" id="assignment"  style={{fontSize:"27px"}}>
   <option value="Choose Option">Choose Option</option>
 <option value="Math Assignment">Math Assignment</option>
 <option value="Biology Assignment">Biology Assignment</option>
 <option value="IT Assignment">IT Assignment</option>
 <option value="Sociology Assignment">Sociology Assignment</option>
 </select> <br /> <br />
 <p style={{fontSize:"30px",fontWeight:"bolder"}}> Select Pages</p> <select name="pages" id="pages" style={{fontSize:"27px"}}>
   <option value="Choosepages">Choose Pages</option>
   <option value="1">1</option>
 <option value="2">2</option>
 <option value="3">3</option>
 <option value="4">4</option>
 <option value="5">5</option>
 </select>
</div>
<div style={{alignItems:"center",justifyContent:"center",textAlign:"center"}}>
  <Type></Type>
</div>
<div className="oneone">
  <div className="one">
    <FontAwesomeIcon icon={faTruck} className="iconss" />
    <h2 style={{color:"orange"}}>On Time Delivery</h2>
    <p>Being the best professional writing services provider, we never compromise when it comes to deadline and delivery of assignment on time. Our writers make sure that all orders are submitted prior to the deadline so that you can proofread your paper before handing it over to your tutor.</p>
  </div>
  <div className="one">
    <FontAwesomeIcon icon={faUserShield}  className="iconss" />
    <h2 style={{color:"orange"}}>24 X 7 Live Help</h2>
    <p>We work 24x7 for your convenience. Our customer support executives are available round the clock in case you need any professional assistance. Feel free to contact our assignment writing services any time via phone, email or live chat.</p> 
  </div>
  <div className="one">
    <FontAwesomeIcon icon={faBrain}  className="iconss" />
    <h2 style={{color:"orange"}}>5,068 PhD Experts</h2>
    <p>Knowledge, experience and creativity are three features we consider before hiring a writer. All our professional writers have acquired Ph.D. credentials from reputed universities across the world. We have writers for each and every subject and always help, always get in touch with us.</p>
    </div>
</div>
<div className="oneone">
  <div className="one">
    <FontAwesomeIcon icon={faBook} className="iconss" />
    <h2 style={{color:"orange"}}>Services For All Subjects</h2>
    <p>It does not matter whether you are a freshman in college or finishing your final assignment to acquire Ph.D. degree, our writers can provide you professional writing assistance on any subject at any level. We have experts for Law, Nursing, Management, Accounting, Marketing.</p>
  </div>
  <div className="one">
    <FontAwesomeIcon icon={faCertificate}  className="iconss" />
    <h2 style={{color:"orange"}}>Plagiarism Free Work</h2>
    <p>To avoid any plagiarism, we check our completed papers three times — after writing, editing and proofreading — using reliable plagiarism detection software, . plagiarism. We only provide customized 100 percent original papers.</p> 
  </div>
  <div className="one">
    <FontAwesomeIcon icon={faWarehouse}  className="iconss" />
    <h2 style={{color:"orange"}}>Best Price Guarantee</h2>
    <p>You get premium service at the best market price. Our best price guarantee ensures that the features we offer cannot be matched by any of the competitors, in case they do - “We will beat the price”. Thus, for an effective and cheap assignment help, always count on us.</p>
    </div>
</div>
<h2 style={{textAlign:"center",marginTop:"10px",color:"orange"}} >THE NUMBERS SAY IT ALL</h2>
<div className="num">
 
  <div>
  <FontAwesomeIcon icon={faTruck}  className="iconss iconses" />
  <h1>6583</h1>
  <p>DELIVERED ORDERS</p>
  </div>
  <div>
  <FontAwesomeIcon icon={faUserCircle}  className="iconss iconses" />
  <h1>2000</h1>
  <p>AUTHORS</p>
  </div>
  <div>
  <FontAwesomeIcon icon={faUsers}  className="iconss iconses" />
  <h1>4.9/5</h1>
  <p>CLIENT RATING</p>
  </div>
</div>
<div className="fourss">
  <div style={{width:"400px",textAlign:"justify"}}>
    <h2 className="seven">
72% of students use assignment help services at least once. You just have to choose a quality writing company.</h2>
  </div>
  <div className="team" >
    <div style={{width:"300px"}}>
    <FontAwesomeIcon icon={faFlag}  className="iconss" />
    <h4>UK Team</h4>
    <p>We've been called the UK's premier essay writing service for a good reason: our dedication to providing students with an affordable, quality service</p>
    </div>
    <div style={{width:"300px"}}>    <FontAwesomeIcon icon={faShieldAlt}  className="iconss" /> 
    <h4>Guarantees</h4>
    <p>We've been called the UK's premier essay writing service for a good reason: our dedication to providing students with an affordable, quality service</p></div>
    <div style={{width:"300px"}}>    <FontAwesomeIcon icon={faPenSquare}  className="iconss" />
    <h4>Writers testing</h4>
    <p>We've been called the UK's premier essay writing service for a good reason: our dedication to providing students with an affordable, quality service</p></div>
    <div style={{width:"300px"}}>    <FontAwesomeIcon icon={faAirFreshener}  className="iconss" />
    <h4>Care Centre</h4>
    <p>We've been called the UK's premier essay writing service for a good reason: our dedication to providing students with an affordable, quality service</p></div>
  </div>
  </div>
  <h1 style={{textAlign:"center",marginTop:"20PX"}}>ASSIGNMENT HELP SERVICES</h1>
  <div className="four">
   <div style={{width:"250px"}}>
     <img src={ser1} alt="" /> <br /> <br />
     <p>We provide most reliable and proficient service to help you work on those intricate assignments. Our Ph.D. experts carry a distinctive mode of expression assisting students to write flawless papers.</p>
   </div>
   <div style={{width:"250px"}}>
     <img src={ser2} alt="" /><br /><br />
     <p>We offer premium essay writing help in a customised manner. Our Native essay tutors help you meet university standards in terms of writing and structuring of academic essays and gain academic excellence.</p>
   </div>
   <div style={{width:"250px"}}> 
     <img src={ser3} alt="" /><br /><br />
     <p>We offer distinctive service in detailed research for your dissertation on any topic from any subject. Our experts help you select appropriate methodology to research ensuring valid and reliable results.</p>
   </div>
   <div style={{width:"250px",marginTop:"40px"}}>
     <img src={ser4} alt="" /><br /><br />
     <p>We provide dependable coursework help to meet your writing needs in a customized manner. Whether it is homework help, case study or online exam help we have authentic writers ensuring excellence.</p>
   </div>
  </div>
  <div className="student"> 
    <h1>STUDENT TESTIMONIALS</h1> <br /><br />
    <p>Find out what students from all over the globe say about our online academic writing services.</p>
  </div>
  <div className="eight">
    <div style={{width:"200px"}}>
       <h3 style={{color:"orange",fontSize:"30px"}}>Business Writing</h3>
       <p>Bussines Proposal Writing
Bussines Plan Writing
Bussines Presentation
Reports/Case Studies
Corporate Profiles
Email Writing
Bussines Letter Writing
Speech Writing
Script Analysis
Script Editing</p>
    </div>
    <div style={{width:"200px"}}>
      <h3 style={{color:"orange",fontSize:"30px"}}>Web Content Writing</h3>
      <p>Web Copy Writing
Product Description
White Paper Writing
Amazon Product description
Landing Page Copywriting
Website Content Revamp</p>
    </div>
    <div style={{width:"200px"}}>
      <h3 style={{color:"orange",fontSize:"30px"}}>SEO Content Writing</h3>
      <p>Article Writing
Product Reviews
SEO Blog Writing
SEO Newsletter Writing
web Page SEO
Blog Management</p>
        </div>
    <div style={{width:"200px"}}>
      <h3 style={{color:"orange",fontSize:"30px"}}>Personal Writing</h3>
      <p>Cover Letters
Linkedin Profile Writing
Linkedin Profile Optimization
Online Digital Resume
Personal/Job statement
Professional Biography
Follow up letter
Thankyou letter</p>
    </div>
  </div>
  <div className="eight">
    <div style={{width:"200px"}}>
       <h3 style={{color:"orange",fontSize:"30px"}}>Marketing Content Writing</h3>
       <p>Brochure Writing
Newsletter Writing
Press Release Writing
Facebook Posts
Linkedin Profile Creation</p>
    </div>
    <div style={{width:"200px"}}>
      <h3 style={{color:"orange",fontSize:"30px"}}>Creative Writing</h3>
      <p>Ebook Writing
Editing
Proof Reading
Infographs
Slogan Writing
Video Script Writing</p>
    </div>
    <div style={{width:"200px"}}>
      <h3 style={{color:"orange",fontSize:"30px"}}>Other Services</h3>
      <p>Editing and Proofreading
Samples</p>
        </div>
    <div style={{width:"200px"}}>
      <h3 style={{color:"orange",fontSize:"30px"}}>Social Media</h3>
      <p><FaFacebook style={{fontSize:"40px",color:"blue",marginRight:"20px"}}/> 
         <FaTwitter style={{fontSize:"40px",color:"skyblue",marginRight:"20px"}}/>
         <FaYoutube style={{fontSize:"40px",color:"red",marginRight:"20px"}}/>
      </p>
    </div>
  </div>
  <div className="imaged">
    <img src={screen} width="100%" alt="" />
  </div>
  <footer>
    <div className="footers">
      <p>Refund Policy | Cancellation Policy | Terms & Conditions | Privacy Policy | FAQ | Contact us | Refer a Friend | Top Writers | Usage policy</p>
      <p>Copyright 2021 © The Assignment Writing. All rights Reserved</p>
    </div>
  </footer>
                  </div>
          );
}

export default Home;