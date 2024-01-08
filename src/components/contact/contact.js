import AnimatedLetters from '../animateLetters/animateLetters';
import './contact.scss';
import {useState, useEffect, useRef} from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser'


const Contact = () => {
    const strArray = "Contact Me".split("");
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef()

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
            'service_v2titxq',
            'template_irqsyec',
            form.current,
            '6FAZP9XdOStMVn4Zd'
        )
        .then(
            () => {
                alert('Message sent succesfully!')
                window.location.reload(false)
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
                    <form ref={form} onSubmit={sendEmail}>
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
                            <li className='button'>
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