import React from 'react';
import './Dashboard.css';
import male from '../../Resources/Images/male.png'

const Admin: React.FC = () => {
  return (
    <div className='AdminMain'>
        <div className='Dashboard'>
            <h2>Gross Profit Tonight:</h2>
            <h2>$2030.45</h2>
            <h3>Available Drivers</h3>
            <ul className='drivers'>
              <li>
                <img className='profilePicture' src={male} alt='Profile Picture'/>
                <h5 className='driverName'>Iliyan Dimitrov</h5>
              </li>
            </ul>
        </div>
    </div>
  );
}

export default Admin;
