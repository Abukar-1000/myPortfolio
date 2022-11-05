import React from "react";
import Cube from "./Cube";
import "../css/head.css";

function Head(){

    return (
        <>
            <div className="container">
                <Cube />
                <h1 className="name">Abukar Djama</h1>
                {/* <Cube /> */}
            </div>
            <div className="optionBar">
                <div className="options">
                    <a href="#ContactSection">Contact Me</a>
                </div>
            </div>
        </>
    );
}

export default Head;