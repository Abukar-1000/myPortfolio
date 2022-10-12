import React from "react";
import "../../css/project.css";

function Project(props) {
    let keypointList = props.keyPoints.map(point => {
        return <li>{point}</li>
    });
    return (
        <div className = "ProjectCard">
            <h1>{props.title}</h1>
            <p>{props.duration}</p>
            <div>
                <ul>
                    {keypointList}
                </ul>
            </div>
        </div>
    );
}

export default Project;