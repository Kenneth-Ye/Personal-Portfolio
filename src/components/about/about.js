import AnimatedLetters from '../animateLetters/animateLetters';
import { useState, useEffect } from 'react';
import './about.scss'
import resume from '../../assets/files/Kenneth Ye Resume-10.pdf'

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
        <div className="container about-page">
            <div className="text-zone">
                 <h1>
                    <AnimatedLetters letterClass={letterClass} idx={12} strArray={titleArr}/>
                 </h1>
                 <p>
                    As a first-year computer science student, I'm passionate about using technology to create impactful software. 
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

            </div>
        </div>
    )
}
export default About; 