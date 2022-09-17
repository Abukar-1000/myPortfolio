import React from "react";
import "../css/face.css";
function Face(props) {
    return (
        <>
            <div className={"face " + props.side}></div>
        </>
    );
}

export default Face;