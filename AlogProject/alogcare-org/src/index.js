import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import './index.css';
import './bootstrap/css/bootstrap.min.css';
import "@lottiefiles/lottie-player";
import Covid from './Covid';

const head={
  textAlign:"center",
  color:"black",
  fontFamily:"'PT Serif', serif",
}
const sty={
  width:"320px",
  marginLeft:"550px",
  alignItems:"center",
}
ReactDOM.render(
  <>
  <lottie-player
  autoplay
  loop
  mode="normal"
  src="https://assets5.lottiefiles.com/packages/lf20_wtphzeip.json"
  style={sty}
>
</lottie-player>
    <h1 style={head}>A person who save one life saves all Mankind</h1>
  </>  
  ,document.getElementById('root')
);
const btn ={
  with:"50%",
  marginLeft:"30%",
  marginRight:"20%",
  marginBottom: "40px",
}
const btn2={
  marginBottom:"40px",
}
ReactDOM.render(
  <>
  <Button variant="outline-success" style={btn}>save a life</Button>
  <Button variant="outline-warning" style={btn2}>seek help</Button>
  </>
  ,document.getElementById('fruit')
);

ReactDOM.render(
  <>
  <Covid />
  </>
  ,document.getElementById('covid')
);
