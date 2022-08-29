import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Welcome from '../src/page/Welcome'
import Dashboard from '../src/page/Dashboard'
import Users from '../src/page/Users'
import Organizations from '../src/page/Organizations'
import UserCreate from './page/UserCreate';
import UserEdit from './page/UserEdit';
import UserView from './page/UserView';
import './App.css';
import HomeTest01 from './component/HomeTest01'
import HomeTest02 from './component/HomeTest02'
import HomeTest03 from './component/HomeTest03'
import HomeTest04 from './component/HomeTest04'
import HomeTest05 from './component/HomeTest05'
import Test from './component/Test'
import User from './component/Test/User'


function App() {
  
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-primary mb-4">
        <div class="container-fluid">
          <a class="navbar-brand ms-4">GReen AcaDemy</a>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link" href="#">User</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Organization</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Link to='/'>Green Academy</Link><br/>
      <Link to='/users'>Users</Link><br/>
      <Link to='/organization'>Oraganizations</Link><br/>
      <Link to='/dashboard'>Dashboard</Link>
      <main className='container'>
      <Routes>
        <Route path="organization" element={<Organizations />} />
        <Route path="users" element={<Users />} />
        <Route path="user/create" element={<UserCreate />} />
        <Route path="/users/:id/edit" element={<UserEdit />} />
        <Route path="/users/:id/view" element={<UserView />} />
        <Route path="/" element={<Welcome />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
