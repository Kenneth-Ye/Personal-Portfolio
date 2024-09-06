import AnimatedLetters from '../animateLetters/animateLetters';
import { useState, useEffect } from 'react';
import './about.scss'
import resume from '../../assets/files/Kenneth_Ye_Resume.pdf'
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders'

const About = () => {
    const titleArr = "About Me".split("");

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timeout =  setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => {
            clearTimeout(timeout);
        }
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                 <h1>
                    <AnimatedLetters letterClass={letterClass} idx={12} strArray={titleArr}/>
                 </h1>
                 <p>
                    As a second-year computer science student, I'm passionate about using technology to create impactful software. 
                    My skills span various programming languages, and I'm always seeking opportunities to apply my knowledge 
                    in the tech sector. Driven by the potential of technology to advance society, I'm eager to join projects that 
                    are at the forefront of innovation.
                 </p>
                 <p>
                    In my free time, I enjoy playing soccer, billiards and walking my dog.
                 </p>
                 <a href= {resume} download="Kenneth Ye Resume">Preview Resume</a>
            </div>
            <div className="timeline">
                    <h1 className='timeline-header'>Education</h1>
                    <div className="qualification__content qualification__active" data-content id="education">
                        <div className="qualification__data">
                            <div className='content'>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">Port Credit Secondary School</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} className='calender-icon'/>
                                    2017-2023
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div className='content'></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">CS Student</h3>
                                <span className="qualification__subtitle">University of Waterloo</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} className='calender-icon'/>
                                    2023-2028
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div className='content'>
                            <h3 className="qualification__title">Full Stack Developer</h3>
                            <span className="qualification__subtitle">IDI-Itech Devlopment</span>
                            <div className="qualification__calendar">
                                <FontAwesomeIcon icon={faCalendar} className='calender-icon'/>
                                2024
                            </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div className='content'></div>

                            <div>
                                <span className="qualification__rounder"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Freelance Full Stack Developer</h3>
                                <span className="qualification__subtitle">Chemsyn</span>
                                <div className="qualification__calendar">
                                    <FontAwesomeIcon icon={faCalendar} className='calender-icon'/>
                                    2024
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='stats'>
                        <div className="statwrap-div">
                            <span className='stat-title'>2+</span>
                            <span className='stat-desc'>Internships<br/>Completed</span>
                        </div>
                        <div className="statwrap-div">
                            <span className='stat-title'>5+</span>
                            <span className='stat-desc'>Years<br/>programming</span>
                        </div>
                        <div className="statwrap-div">
                            <span className='stat-title'>4+</span>
                            <span className='stat-desc'>Projects<br/>completed</span>
                        </div>
                    </div>
                </div>
        </div>
        <Loader type="line-scale-pulse-out" />
        </>
    )
}
export default About; 