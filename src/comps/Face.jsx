import React from "react";
import "../css/face.css";

function Face(props) {
    let styles= {
        backgroundColor: props.bgColor,
        backgroundImage: "url('" + props.imgSrc + "')"
    };

    return (
        <>
            <div className={"face " + props.side}>
                <div style = {styles} className="divImg" alt = "logo img"></div>
            </div>
        </>
    );
}

export default Face;