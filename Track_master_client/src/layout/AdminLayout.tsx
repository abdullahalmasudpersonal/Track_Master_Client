import { Link, Outlet } from "react-router-dom";
import './AdminLayout.css'

const AdminLayout = () => {
    return (
        <div className='adminSideber'>
            <div className='adminSideberItem'>
                <ul>
                    <li><Link to='/admin'>Dashboard</Link></li>
                    <li><Link to='/admin/device-list'>Analytics & Reports</Link></li>
                    <li><Link to='/admin/analytices-reports'>Analytics & Reports</Link></li>
                </ul>
            </div>
            <div className='adminContent'>
            <div className='adminSideberNavber'>
                    <h4>Parental Control</h4>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;