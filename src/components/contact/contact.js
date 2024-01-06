import AnimatedLetters from '../animateLetters/animateLetters';
import './contact.scss';
import {useState, useEffect, useRef} from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser'


const Contact = () => {
    const strArray = "Contact Me".split("");
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()

    useEffect(() => {
        const timeout =  setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
        return () => {
            clearTimeout(timeout);
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            process.env.REACT_ENV_YOUR_SERVICE_ID,
            process.env.REACT_ENV_YOUR_TEMPLATE_ID,
            refForm.current,
            process.env.REACT_ENV_YOUR_KEY
        )
        .then(
            () => {
                alert('Message sent succesfully!')
            },
            () => {
                alert('Failed to send message, please try again.')
            }
        )
    }

    return (
        <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={strArray} letterClass={letterClass} idx={12}/>
                </h1>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required/>
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder='Subject' required/>
                            </li>
                            <li>
                                <textarea name="message" placeholder='Message' required/>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="line-scale-pulse-out"/>
        </>
    )
}

export default Contact;