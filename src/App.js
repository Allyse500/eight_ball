import './App.css';
import {useState} from 'react';
import EightBall from './EightBall';
import EightBall2 from './EightBall2';
import EightBall3 from './EightBall3';
function App() {
  const eightBallType = ["Current: Vanilla JS", "Current: useState", "Current: Send SMS"];
  const [buttonText, setButtonText] = useState(eightBallType[0]);
  function updateDisplay(){
    if(buttonText === "Current: Vanilla JS"){
      setButtonText(eightBallType[1]);
    }
    else if(buttonText === "Current: useState"){
      setButtonText(eightBallType[2]);
    }
    else{
      setButtonText(eightBallType[0]);
    }
  }
  return (
    <div className="App">
      {
        buttonText === "Current: Vanilla JS" ?
        (<EightBall3 />) : 
        (buttonText === "Current: useState" ? (<EightBall2 />) : (<EightBall />))
      }
      <button onClick={updateDisplay} id="updateBtn">{buttonText}</button>
    </div>
  );
}

export default App;
