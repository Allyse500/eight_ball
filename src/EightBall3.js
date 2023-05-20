import './EightBall2.css';
import {useState} from 'react';
const EightBall3 = () =>{
    const smile = "=)";
    const eightBallAnimations = ["shake 2s", "shake2 2s"];
    const int = Math.floor(Math.random() * 2);
    const int2 = Math.floor(Math.random() * 4);
    const eightBallMsgAnimate = ["messageShake 2s", "messageShake2 2s"];
    const fortunes = ["&#9829;", "Negative encounters may be minimized with smiles &#128516;.","Don't forget your umbrella &#9748;.", "Look into the fine print &#128269..."];
    const eightBallInitialValues = {
        animation1: "",
        animation2: eightBallMsgAnimate[0]
    };
    const [eightBallAnimation, setEightBallAnimation] = useState(eightBallInitialValues);
    const shakeEightBall = () =>{
        
        setEightBallAnimation({
            animation1: eightBallAnimations[int],
            animation2: eightBallMsgAnimate[int]
        });
        
        document.getElementById("eightBallMessage").innerHTML = fortunes[int2];
        
        if(fortunes[int2] === "&#9829;"){
            document.getElementById("eightBallMessage").style.fontSize = "400%";
            document.getElementById("eightBallMessage").style.color = "rgb(255, 0, 0)";
        }
        else{
            document.getElementById("eightBallMessage").style.fontSize = "inherit";
            document.getElementById("eightBallMessage").style.color = "rgb(84, 1, 67)";
        }
    }
    return (
        <div id="eightBallBody" onClick={shakeEightBall} style={{animation:eightBallAnimation.animation1}}>
            <div id="eightBallMessageContainer">
                <div id="eightBallMessage" style={{animation: eightBallAnimation.ainmation2}}>
                    Tap to receive fortune {smile}!
                </div>
            </div>
        </div>
    );
}

export default EightBall3;