import { render } from '@testing-library/react';
import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link
  } from "react-router-dom";
import Home from '../containers/home'
import Contacts from "../containers/contact"



  class Approuter extends React.Component{
      render(){
          return(
            <Router>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contacts} />
            </Router>
          )
      }
  }



  export default Approuter;