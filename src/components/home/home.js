import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import './home.scss';
import AnimatedLetters from '../animateLetters/animateLetters.js';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const introduction = "Hi, I'm Kenneth Ye";
    const description = "I'm a passionate first year computer science student @ University of Waterloo,";
    const introArray = introduction.split("");
    
    useEffect(() => {
        const timeout =  setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => {
            clearTimeout(timeout);
        }
    }, [])

    const [text, setText] = useState("Innovator");
    const texts = ["Innovator", "Learner", "Student", "Programmer", "Soccer Player"];

    useEffect(() => {
        let currentTextIndex = 0;
        const intervalId = setInterval(() => {
            currentTextIndex = (currentTextIndex + 1) % texts.length;
            setText(texts[currentTextIndex]);
        }, 4000); // Change text every 4 seconds

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);


    return (
        <div className="container home-page">
            <div className="desc">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={introArray} idx={12}/>
                </h1>
                <h2>
                    {description}
                </h2>
                <div className="typewriter-container">
                    <span class="text first-text">and I'm a </span>
                    <span class="text sec-text">{text}</span>
                </div>
                <Link to="/Personal-Portfolio/contact" className="contact-link">Contact Me</Link>
            </div>
        </div>
    )
}

export default Home;

