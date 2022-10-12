import React from "react";

function CourseWork(props){
    const underGradClasses = props.undergraduate.map((course) => {
        return <li>{course}</li>
    });

    const sideCourses = props.sideCourses.map((course) => {
        return <li>{course}</li>
    });

    return (
        <div className = "PersonalCard courseWork">
            <h1>Undergraduate Courses</h1>
            {underGradClasses}
            <h1>Side Courses</h1>
            {sideCourses}
        </div>
    );
}

export default CourseWork;