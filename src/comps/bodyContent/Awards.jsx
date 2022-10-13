import React from "react";

function Awards(props) {
    const awardList = props.awards.map((award) => (
        <li>{award}</li>
    ));

    return (
        <div className= "Awards">
            <h1>Awards</h1>
            <ul>
                {awardList}
            </ul>
        </div>
    );
}