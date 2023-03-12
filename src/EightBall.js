import React, { useState } from "react";
import "./EightBall.css"

const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]

const EightBall = () => {

    function choice(arr){ // function to create random choice and return a random answer
        const randomIdx = Math.floor(Math.random() * answers.length )
        return answers[randomIdx]
    }

    const [ans, setAns] = useState({msg: "Think of a Question", color:"black"})
    const color = { backgroundColor: ans.color}

    return (
        <div >
            <span id="wrapper" style ={color}>
            <p id="answer">{ans.msg}</p>
            </span>
            <br></br>
            <br></br>
            <button onClick={()=> setAns(choice(answers))}>ASK</button>
        </div>
    )


}


export default EightBall;