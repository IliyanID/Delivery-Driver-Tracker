import React, {useState} from 'react';
import Dashboard from './Container/Dashboard/Dashboard'
import Orders from './Container/Orders/Orders'
import Modify from './Container/Modify/Modify'
import Transactions from './Container/Transactions/Transactions'
import './App.css';

const App: React.FC = () => {
  const[page, setPage] = useState("dashboard");

  return(
  <div className='AppMain'>
    <button className='logout'>Logout</button>
    <ul className='Pages'>
        <li className={(page==="dashboard") ? 'selectedPage' : ''} onClick={(e) => setPage("dashboard")}>Dashboard</li>
        <li className={(page==="orders") ? 'selectedPage' : ''} onClick={(e) => setPage("orders")}>Orders</li>
        <li className={(page==="modify") ? 'selectedPage' : ''} onClick={(e) => setPage("modify")}>Modify</li>
        <li className={(page==="transactions") ? 'selectedPage' : ''} onClick={(e) => setPage("transactions")}>Transactions</li>
    </ul>
    {(page === 'dashboard') ? <Dashboard /> : null}
    {(page === 'orders') ? <Orders /> : null}
    {(page === 'modify') ? <Modify /> : null}
    {(page === 'transactions') ? <Transactions /> : null}
  </div>
  );
}

export default App;
