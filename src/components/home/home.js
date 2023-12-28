import { Link } from 'react-router-dom';
import './home.scss';
const Home = () => {
    return (
        <div className="container home-page">
            <div className="desc">
                <h1>Hi, I'm Kenneth Ye</h1>
                <h2>I'm a passionate first year computer science student @ University of Waterloo.</h2>
                <Link to="/Personal-Portfolio" className="contact-link">Contact Me</Link>
            </div>
        </div>
    )
}

export default Home;