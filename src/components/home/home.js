import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import './home.scss';
import AnimatedLetters from '../animateLetters/animateLetters.js';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const introduction = "Hi, I'm Kenneth Ye";
    const description = "I'm a passionate first year computer science student @ University of Waterloo.";
    const introArray = introduction.split("");
    
    useEffect(() => {
        const timeout =  setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => {
            clearTimeout(timeout);
        }
    }, [])


    return (
        <div className="container home-page">
            <div className="desc">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={introArray} idx={12}/>
                </h1>
                <h2>
                    {description}
                </h2>
                <Link to="/Personal-Portfolio/contact" className="contact-link">Contact Me</Link>
            </div>
        </div>
    )
}

export default Home;

