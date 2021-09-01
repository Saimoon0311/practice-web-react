import React,{useState,useEffect} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThermometer,faSlidersH,faCode} from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
// let {NavLink} = ReactRouterDOM;
import {Link} from "react-router-dom"
//Pages
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};


function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""} onClick={()=>Close()} />
      <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            CodeBucks
            <i className="fa fa-code"><FontAwesomeIcon icon={faCode} /> </i>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <p>hello</p> */}
            <i className={click ? "fa fa-times" : "fa fa-bars"}><FontAwesomeIcon icon={faSlidersH} /> </i>
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default NavBar;
// function App() {
  
//   return (
//     <>
     
//        <BrowserRouter>
//         <NavBar />

//         <div className="pages">
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/blog" component={Blog} />
//             <Route path="/contact" component={Contact} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     </>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('app'));