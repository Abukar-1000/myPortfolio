import React from "react";
import GpaCard from "./bodyContent/GpaCard";
import "../css/body.css";
import {projects,personalDiscription} from "../projects";
import Project from "./bodyContent/Project";

function BodySec(){
    let allProjects = projects.map((aProject) => {
        return (<>
            <Project title = {aProject.title} duration = {aProject.duration} keyPoints = {aProject.keyPoints} />
        </>);
    });
    return (
        <>
            <div className = "leftColumn">
                <div className="bodyContent">
                    <GpaCard />
                </div>
            </div>
            <div className = "rightColumn">
                {allProjects}
            </div>
        </>
    );
}

export default BodySec;