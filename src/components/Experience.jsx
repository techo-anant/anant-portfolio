import React from 'react'
import '../styles/Experience.css'

const Experience = React.forwardRef((_, ref) => {

    const experienceList = [
        {
            title: "AI Intern", company: "Glendor Inc.", date: "Jan 2025 - Present", details: [
                "Analysing and processing large sets of distorted images using Python and C to support AI model development"
            ]
        },
        {
            title: "Teaching Assistant", company: "University of Windsor", date: "Sep 2024 - Present", details: [
                "Collaborating with professor and other TAs to support 250+ students learning logic building and programming",
                "Providing personalized feedback to improve academic performance and facilitating engaging learning sessions",
                "Evaluating assignments and exams with attention to detail, offering constructive feedback to support students' academic growth",
                "Recognized for strong communication skills and dedication to student success by professor"
            ]
        },
        {
            title: "Mentor", company: "Odette Accounting Society, Odette School of Business, Windsor, ON", date: "October 2024 – Present", details: [
                "Guided high school students through a comprehensive one-week case competition, providing critical insights and support",
                "Collaborated with a team to ensure a high-quality mentoring experience and create a positive impact on students' professional development",
                "Participated in various club activities, enhancing the visibility of mentorship programs and building relationships within the community"
            ]
        },
        {
            title: "Cashier", company: "Circle K, Windsor, ON", date: "Jul 2024 - Sep 2024", details: [
                "Resolved customer complaints calmly and professionally, using clear communication to defuse situations and deliver effective solutions quickly",
                "Collaborated with colleagues and managers to ensure smooth store operations and clear, consistent internal communication",
                "Processed transactions accurately and balanced cash drawer, ensuring each payment was handled with precision and care",
                "Handled multiple tasks, from transactions to restocking, showcasing effective prioritization and efficiency"
            ]
        }
    ]

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
                    </div>
                ))}
            </div>
        </div>

    )

});

export default Experience;