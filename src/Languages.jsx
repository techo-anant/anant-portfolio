import React from 'react';
import './Languages.css'

const Languages = React.forwardRef((_, ref) => {

    return (
        <div ref={ref} className="languages">

            <div className="backend">
                <p className="title">Backend</p>
                <ul className="back">
                    <li>
                        <span>C : </span>
                        <div className="bar">
                            <div className="proficiency" id="c"></div>
                        </div>
                    </li>
                    <li>
                        <span>Java : </span>
                        <div className="bar">
                            <div className="proficiency" id="java"></div>
                        </div>
                    </li>
                    <li>
                        <span>Python : </span>
                        <div className="bar">
                            <div className="proficiency" id="python"></div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="frontend">
                <p className="title">Frontend</p>
                <ul className="back">
                    <li>
                        <span>HTML : </span>
                        <div className="bar">
                            <div className="proficiency" id="html"></div>
                        </div>
                    </li>
                    <li>
                        <span>CSS : </span>
                        <div className="bar">
                            <div className="proficiency" id="css"></div>
                        </div>
                    </li>
                    <li>
                        <span>JavaScript : </span>
                        <div className="bar">
                            <div className="proficiency" id="js"></div>
                        </div>
                    </li>
                    <li>
                        <span>React : </span>
                        <div className="bar">
                            <div className="proficiency" id="react"></div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="databaes">
                <p className="title">Database</p>
                <ul className="back">
                    <li>
                        <span>MySQL : </span>
                        <div className="bar">
                            <div className="proficiency" id="mysql"></div>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    );

});

export default Languages;