

import "@lottiefiles/lottie-player";
import { Button } from 'react-bootstrap';
import Covid from '../Covid';

const styleLottierFile = {
    width:"320px",
    marginLeft: "550px",
    alignItems: "center",
}
const head = {
    textAlign: "center",
    color: "black",
    fontFamily: "'PT Serif', serif",
  }
  
const btn = {
    with:"50%",
    marginLeft: "30%",
    marginRight: "20%",
    marginBottom: "40px",
}
  
  const btn2 = {
    marginBottom: "40px",
}

const lottierPlayer = () => {
    return (
        <>
        <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets5.lottiefiles.com/packages/lf20_wtphzeip.json"
        style={styleLottierFile}
        >
        </lottie-player>
         <h1 style={head}>A person who save one life saves all Mankind</h1>
        <Button variant="outline-success" style={btn}>save a life</Button>
        <Button variant="outline-warning" style={btn2}>seek help</Button>
        <Covid />
        </>
    )

}

export default lottierPlayer;