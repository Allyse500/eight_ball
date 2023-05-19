import './EightBall2.css';
const EightBall2 = () =>{
    const smile = "=)";
    const shakeEightBall = () =>{
        const eightBallAnimations = ["shake 2s", "shake2 2s"];
        const int = Math.floor(Math.random() * 2);
        const int2 = Math.floor(Math.random() * 4);
        const eightBallMsgAnimate = ["messageShake 2s", "messageShake2 2s"];
        const fortunes = ["&#9829;", "Negative encounters may be minimized with smiles &#128516;.","Don't forget your umbrella &#9748;.", "Look into the fine print &#128269..."];
        document.getElementById("eightBallBody").style.animation = eightBallAnimations[int];
        document.getElementById("eightBallMessage").style.animation = eightBallMsgAnimate[int];
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
        <div id="eightBallBody" onClick={shakeEightBall}>
            <div id="eightBallMessageContainer">
                <div id="eightBallMessage">
                    Tap to receive fortune {smile}!
                </div>
            </div>
        </div>
    );
}

export default EightBall2;