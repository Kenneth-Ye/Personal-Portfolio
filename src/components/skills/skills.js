import AnimatedLetters from '../animateLetters/animateLetters';
import { useState, useEffect } from 'react';
import './skills.scss'
import Loader from 'react-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faGithub, faHtml5, faJsSquare, faNodeJs, faPython, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const strArray="Skills".split("")

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
        <div className="skills-container">
            <div className="skill-desc-zone">
                <h1>
                    <AnimatedLetters strArray={strArray} letterClass={letterClass} idx={12}></AnimatedLetters>
                </h1>
                <p className='skill-desc'>
                I have a strong background in front-end development with React, HTML, CSS, D3.js, and I'm experienced with using 
                Git and Sass for version control and styling. My experience includes four main projects, with three featuring 
                React web apps. 
                </p>
                <p>
                I've completed the FreeCodeCamp's certification in JavaScript Data Structures and Algorithms, which 
                covered basic data structures, algorithm scripting, regular expressions, ES6 JavaScript, 
                object-oriented programming, and functional programming. Additionally, I completed the NDG Linux Unhatched certification.
                I'm also familiar with Java, C++ and Python, allowing me to support various aspects of development projects.
                </p>
                <div className="techstack">
                    <p className='tech-title'>Tech Stack</p>
                    <div className="linediv"><span className='line'></span></div>
                    <ul>
                        <FontAwesomeIcon icon={faReact} color="#61dbfb"/>
                        <FontAwesomeIcon icon={faHtml5} color="#F05629"/>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                        <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4"/>
                        <FontAwesomeIcon icon={faPython} color="#FFE873"/>
                        <FontAwesomeIcon icon={faGithub} color="#000000"/>
                    </ul>
                </div>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#61dbfb"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F05629"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faJsSquare} color="#5ED4F4"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faPython} color="#FFE873"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGithub} color="#000000"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="line-scale-pulse-out" />
        </>
    )
}
export default Skills;