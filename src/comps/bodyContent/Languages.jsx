import React from "react";

function Languages(props){
    return (
        <div className = "Languages">
            {/* <div className = ""> */}
                <h1>Confident</h1>
                <h1 className = "LanguagesList">{props.confident}</h1>
                <h1>Familiar</h1>
                <h1 className = "LanguagesList">{props.familiar}</h1>
            {/* </div> */}
        </div>
    );
}

export default Languages;