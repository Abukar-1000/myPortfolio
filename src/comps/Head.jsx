import React from "react";
import Cube from "./Cube";
import "../css/head.css";

function Head(){

    return (
        <>
            <div className="container">
                <Cube />
                <h1 className="name">Abukar Djama</h1>
                <Cube />
            </div>
        </>
    );
}

export default Head;