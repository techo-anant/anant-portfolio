import React from 'react'
import '../styles/Experience.css'
import { experienceList } from '../constants/experience.js';
import { useMediaQuery } from "react-responsive";

const Experience = React.forwardRef((_, ref) => {

    const isMobile = useMediaQuery({ query: "(max-width: 700px)" });

    return (
        <div ref={ref} className="experience">
            <h1 id="title">Work Experience</h1>
            <div className="listed">
                {experienceList.map((list, index) => (
                    <div className="list" id={list.title} key={index}>
                        <p className='job-title'>{list.title}</p>
                        <hr className='line' />
                        <div className="co-date">
                            <p>{list.company}</p>
                            <p>{list.date}</p>
                        </div>
                        <ul id="detail">
                            {list.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                        {list.recognitions && (
                            <div className=" recognition-image">
                                {list.recognitions?.map((recognition, index) => (
                                    <a
                                        key={index}
                                        href={recognition.src}     // path to the image
                                        target="_blank"            // opens in a new tab
                                        rel="noopener noreferrer"  // security best practice
                                    >
                                        {!isMobile? (
                                            <img src={recognition.src} alt={recognition.desc} />
                                        ): (
                                            <div className="recognition-desc">
                                                <p><img src="icons/image-icon.png" alt={recognition.desc} />{recognition.desc}</p>
                                            </div>
                                        )}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
});

export default Experience;