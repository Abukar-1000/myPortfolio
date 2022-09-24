import React from "react";
import Face from "./Face";
import "../css/cube.css";
/*
attribute image website
    <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Freepik - Flaticon</a>
*/
function Cube() {
    return (
        <>
            <div className="cubeContainer">
                <div className="cube">
                    <Face side = "front" imgSrc = "imgs/github.png" bgColor = "white"/>  
                    <Face side = "back" imgSrc = "imgs/linkedin.png" bgColor = "white"/>
                    <Face side = "right" imgSrc = "imgs/js.png" bgColor = "white"/>
                    <Face side = "left"  imgSrc = "imgs/node.png" bgColor = "white"/>
                    <Face side = "top"  imgSrc = "imgs/python.png" bgColor = "white"/>
                    <Face side = "bottom" imgSrc = "imgs/java.png" bgColor = "white"/>
                </div>
            </div>
            
        </>
    );
}

export default Cube;