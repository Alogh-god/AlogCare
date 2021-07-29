import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@lottiefiles/lottie-player";
import { BrowserRouter, Switch, Route  } from 'react-router-dom'
import lottierPlayer from './components/lottiePlayer';
import SignUpPage from './components/SignUpPage';



const rootElement = document.getElementById("root");

ReactDOM.render(
  <>
   <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={lottierPlayer} />
            <Route path="/sign-up" component={SignUpPage} />
        </Switch>
    </ BrowserRouter>
  </>  
  ,rootElement
);
