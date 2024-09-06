import './project.scss'
import Loader from 'react-loaders';
import AnimatedLetters from '../animateLetters/animateLetters';
import { useEffect, useState} from 'react';
import ImageCarousel from './imagecarousel';
import ahoproj from '../../assets/images/ahoproj.png';
import portfolioproj from '../../assets/images/portfolioproj.png';
import charitreeproj from '../../assets/images/charitreeproj.png';
import gptProj from '../../assets/images/gptProj.png';

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const strArray = "Projects".split("")
    const images = [
        {   
            url: ahoproj, 
            description: 'An interactive React web app that visualizes the Aho-Corasick string search algorithm.\n'
                        +'Allows users to set desired substrings and mainstring, and automatically updates and displays\n'
                        +'the new associated Aho-Corasick Finite State Machine (FSM). Uses d3.js library to visualize \n'
                        +'the FSM and create an animation of how the algorithm searches through the FSM.', 
            link: "https://github.com/Kenneth-Ye/AhoCorasick-Algorithm-Visualizer/tree/master"
        },
        // {
        //     url: blackjackproj,
        //     description: 'A GUI Blackjack game coded using Java. Designed and implemented using Object Oriented programming.',
        //     link: "https://github.com/Kenneth-Ye/BlackJack_GUI_Game"
        // },
        {
            url: portfolioproj,
            description: 'A personal webpage made using React and SASS. Implemented React Router to route between pages based on URL'
                         +' Includes animations, swiping image carousel, and a contact box.'
                         +' Made consistent commits to webpage via Git/Github and hosted website on Github Pages',
            link: 'https://github.com/Kenneth-Ye/Personal-Portfolio'
        },
        {
            url: gptProj,
            description: 'Built a GPT clone using React with added accessibility features such as text-to-speech support and high '
                         + 'contrast mode, making ChatGPT more accessible to the visually impaired. Implemented an Express.js backend'
                         + ' and developed a RESTful API to communicate from the frontend to backend. Developed text-to-speech capabilities' 
                         + ' by leveraging OpenAI’s text-to-speech API',
            link: 'https://github.com/Kenneth-Ye/accessibleGPT'
        },
        {
            url: charitreeproj,
            description: 'A blockchain-based donation platform that increases transparency in charitable giving.' + 
                        'Allows users to view all transactions for each charity, including their own donations, ' + 
                        'through smart contracts. Utilizes React and Django for the frontend and backend, with ' +
                        'PostgreSQL for data storage. Implements Solidity smart contracts on the Avalanche ' + 
                        'blockchain to ensure donation traceability and prevent fraudulent behavior.',
            link: 'https://github.com/Kenneth-Ye/ChariTree'
        }   

    ]

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
        <div className="project-container">
            <h1>
                <AnimatedLetters strArray={strArray} letterClass={letterClass} idx={12}/>
            </h1>
            <div className="carousel">
                <ImageCarousel images={images} interval={15000}/>
            </div>
        </div>
        <Loader type="line-scale-pulse-out"/>
        </>
    )
}

export default Project;