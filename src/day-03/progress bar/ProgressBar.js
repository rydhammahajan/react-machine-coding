import React from "react";
import {useState } from "react"

function ProgressBar() {

    const [barWidth, setBarWidth] = useState(0); 
    const [value, setValue] = useState(0); 
    const [color , setColor] = useState("") ; 
    const fixedWidth = 300

    const colorLogic = (temp) => {
        if (temp < 40) {
            setColor("red");
        } else if (temp < 80) {
            setColor("orange") ; 
        } else {
            setColor("green"); 
        }
    }

    const increment = () => {
        if (value < 100) {
            const temp = value + 10 ; 
            setValue(temp);
            setBarWidth((fixedWidth * temp) / 100);
            colorLogic(temp);
        }
    }

    const decrement = () => {
        if (value > 0) {
            const temp = value - 10; 
            setValue(temp);
            setBarWidth((fixedWidth * temp) / 100);
            colorLogic(temp) ; 
        }
    }

    return (
        <div>
            {/* Implement the ProgressBar component logic here */}
            <h1>Progress Bar</h1>

            <div className="bar-container" style={{ width: "300px", height: "20px", backgroundColor: "lightgrey", border: "1px solid black", borderRadius: "50px" }}>

                

                <div id = "testBgColor"
                    className="inner-bar-container" style={{
                    width: barWidth+"px" ,
                     height : "20px"  ,  backgroundColor: color, textAlign: "center", borderRadius: "50px" ,position: "relative"
                    }}
                >
                    <div style={{ position: "absolute", top: "0%", right: "0%" , width : "100%" , color : "white" , padding : "0px 2px"}}>{value}%</div>


                </div>
            </div>

            <div style = {{padding : "10px 10px" }}>
                <button onClick={() => {
                    decrement() ; 
                }}>-10%</button>
                <button onClick={() => {
                    increment();
                }}>+10%</button>
            </div>
        </div>
    );
}

export default ProgressBar;
