import React from "react";
import "../css/face.css";

function Face(props) {
    let styles= {
        backgroundColor: props.bgColor,
        backgroundImage: "url('" + props.imgSrc + "')",
        with: "100%",
        height: "100%",
        margin: "0 auto",
        backgroundSize: "100% 100%",
        rotate: "180deg",
    };

    return (
        <>
            <div className={"face " + props.side}>
                <div style = {styles} alt = "logo img"></div>
            </div>
        </>
    );
}

export default Face;