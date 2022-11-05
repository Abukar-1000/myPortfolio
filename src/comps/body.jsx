import React from "react";
import GpaCard from "./bodyContent/GpaCard";
import Cube from "./Cube";
import "../css/body.css";
import CourseWork from "./bodyContent/CourseWork";
import Languages from "./bodyContent/Languages";

import {projects,personalDiscription,courseWork,programmingLanguages,awards} from "../projects";
import Project from "./bodyContent/Project";

// microsoft ignite
function BodySec(){
    const allProjects = projects.map((aProject) => {
        return (<>
            <Project title = {aProject.title} duration = {aProject.duration} keyPoints = {aProject.keyPoints} />
        </>);
    });

    const personalDescription = personalDiscription.about.map((quality) => {
        return <li>{quality}</li>
    });

    return (
        <>
            <div className = "bodyContent">
                <div className="leftColumn">
                    <GpaCard />
                    <CourseWork undergraduate = {courseWork.undergraduate} sideCourses = {courseWork.sideCourses} />
                    <Languages familiar = {programmingLanguages.familiar} confident = {programmingLanguages.confident}/>
                </div>
                <div className = "rightColumn">
                    {allProjects}
                    <div className = "PersonalCard">
                        <h1>A Little Bit About Me</h1>
                        <ul>{personalDescription}</ul>
                    </div>
                </div>
                <div className="slash"></div>
                <div className="ContactSection" id="ContactSection">
                    <div className="ContactContent">
                        <div className="ContactLinks">
                            <a href="https://www.linkedin.com/in/abukar-djama-b16237240/">LinkedIn</a>
                            <a href="https://github.com/Abukar-1000">GitHub</a>
                            <a href="mailto:abukardjama1@gmail.com, adjama@iu.edu">Send Email</a>
                        </div>
                    </div>
                    <Cube />
                </div>
            </div>
            
        </>
    );
}

export default BodySec;