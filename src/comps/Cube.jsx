import React from "react";
import Face from "./Face";
import "../css/cube.css";

function Cube() {
    return (
        <>
            <div className="cubeContainer">
                <div className="cube">
                    <Face side = "front"/>
                    <Face side = "back"/>
                    <Face side = "right"/>
                    <Face side = "left"/>
                    <Face side = "top"/>
                    <Face side = "bottom"/>
                </div>
            </div>
            
        </>
    );
}

export default Cube;