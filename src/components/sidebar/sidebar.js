import { Link, NavLink } from 'react-router-dom';
import './sidebar.scss';
import Logo from '../../assets/images/k-logo-transbg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faHouseChimney, faWrench } from '@fortawesome/free-solid-svg-icons';
const Sidebar = () => (
    <div className='sidebar'>
        <Link className='k-logo' to="/">
            <img src={Logo} alt="k-logo"></img>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHouseChimney} color="#192734" size='2x'/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/skills">
                <FontAwesomeIcon icon={faWrench} color="#192734" size='2x'className='skills-link'/>
            </NavLink>
            <NavLink>
                <FontAwesomeIcon icon={faAddressCard} color="#192734" size='2x'className='about-link'/>
            </NavLink>
        </nav>
    </div>
)


export default Sidebar;