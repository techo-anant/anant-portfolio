import React from 'react'
import '../styles/Education.css'

const Education = React.forwardRef((_, ref) => {

    return (
        <div ref={ref} className="education">
            <p className="Uname">University of Windsor</p>
            <p className="name">BCom. Honours <br /><b>Computer Science</b> <br />and <br /><b>Business Administration</b></p>

            <div className="maj-gpa">
                <div className="majors">
                    <span>Majors</span>
                    <ol className="major">
                        <li>Computer Science</li>
                        <li>Business Administration</li>
                    </ol>
                </div>

                <div className="gpa">
                    <span>Cummulative GPA</span>
                    <ol className="dif-gpa">
                        <li>Out of 100% - <b>97.3%</b></li>
                        <li>Out of 4.0 - <b>4.0</b></li>
                        <li>In Grades - <b>A<sup>+</sup></b></li>
                    </ol>
                </div>
            </div>
            <p className="year">Current year of study - <b>3<sup>nd</sup> year</b></p>
        </div>
    );

});

export default Education;