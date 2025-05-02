import { Link, Outlet } from 'react-router-dom';
import './AdminSideber.css'


const AdminSideber = () => {
    return (
        <div className='adminSideber'>
            <div className='adminSideberItem'>
                <div className=''>
                    <ul>
                        <li><Link to='/admin'>users</Link></li>
                        <li>device</li>
                        <li>ass</li>
                    </ul>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default AdminSideber;







 {/* <div>
                <div className='adminSideberNavber'>
                    <h4>Parental Control</h4>
                </div>
               
            </div> */}