import AnimatedLetters from '../animateLetters/animateLetters';
import './contact.scss';
import {useState, useEffect} from 'react';
import Loader from 'react-loaders';


const Contact = () => {
    const strArray = "Contact Me".split("");
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
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={strArray} letterClass={letterClass} idx={12}/>
                </h1>
            </div>
        </div>
        <Loader type="line-scale-pulse-out"/>
        </>
    )
}

export default Contact;