import './EightBall.css';
import {useState} from 'react';
import axios from 'axios';
// import api from './api/posts';
const EightBall = () =>{
    const smile = "=)";
    const [newEntry, setEntry] = useState({phoneOrEmail: "", mailSent: false});
    const API_PATH = "http://localhost:3003/eight_ball/src/index.php";
    const handleSubmit = (event) =>{
        event.preventDefault();
        document.getElementById("eightBallBody1").style.animation = "shake 2s";
        console.log("newEntry value: " + newEntry.phoneOrEmail);
        axios.post(API_PATH, {
            data:newEntry,
            headers: { 'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'}
        })
        // .then(result => setEntry({mailSent: result.data.sent}))
        .then(result => console.log(result.data))
        .catch(error => console.log(error));
        setEntry({phoneOrEmail: ""});
    }
    return (
        <div id="eightBallBody1">
            <div id="eightBallMessageContainer1">
                <div id="eightBallMessage1">
                    Enter phone number or email to receive fortune {smile}!
                </div>
            </div>
            <form id="phoneNumberForm" formAction="#" >
                <input 
                    id="phoneOrEmail" 
                    name="phoneOrEmail" 
                    placeholder="xxx-xxx-xxxx"
                    value={newEntry.phoneOrEmail}
                    onChange={(e) =>setEntry({phoneOrEmail: e.target.value})}
                />
                <button id="goButton" name="goButton" onClick={handleSubmit}>Go</button>
            </form>
        </div>
    );
}

export default EightBall;