import './layout.scss';
import Sidebar from '../sidebar/sidebar.js'
import { Outlet } from 'react-router-dom';
const Layout = () => {
    return (
    <div className='app'>
        <Sidebar/>
        <div className='page'>
            <Outlet></Outlet>
        </div> 
    </div>)
}

export default Layout; 