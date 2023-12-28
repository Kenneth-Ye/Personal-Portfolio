import { Link, NavLink } from 'react-router-dom';
import './sidebar.scss';
import Logo from '../../assets/images/k-logo-transbg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faBriefcase, faEnvelope, faHouseChimney, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => (
    <div className='sidebar'>
        <Link className='k-logo' to="/Personal-Portfolio">
            <img src={Logo} alt="k-logo"></img>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/Personal-Portfolio">
                <FontAwesomeIcon icon={faHouseChimney} color="#4d7fc1" size='2x'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/Personal-Portfolio/skills">
                <FontAwesomeIcon icon={faWrench} color="#4d7fc1" size='2x' className='skills-link'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/Personal-Portfolio/about">
                <FontAwesomeIcon icon={faAddressBook} color="#4d7fc1" size='2x' className='about-link'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/Personal-Portfolio/projects">
                <FontAwesomeIcon icon={faBriefcase} color="#4d7fc1" size='2x' className='project-link'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/Personal-Portfolio/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d7fc1" size='2x' className='contact-link'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href='https://www.linkedin.com/in/kenneth-ye-9618b3235/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d7fc1" size='2x'/>
                </a>
            </li>
            <li>
                <a href='https://github.com/Kenneth-Ye'>
                    <FontAwesomeIcon icon={faGithub} color="#4d7fc1" size='2x'/>
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar;