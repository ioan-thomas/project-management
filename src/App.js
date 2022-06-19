import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

// pages
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Signup from './pages/signup/Signup'
import Create from './pages/create/Create'
import { useAuthContext } from './hooks/useAuthContext';

// styles
import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { OnlineUsers } from './components/OnlineUsers';

function App() {
  const {user, authIsReady } = useAuthContext();

  return (
    <div className='App'>
      {authIsReady && 
        <BrowserRouter>
            {user && <Sidebar/> }
          <div className="container">
            <Navbar/>
            <Routes>
              <Route exact path="/">
                {user && <Dashboard />}
                {!user && <Navigate to='/login'/>}
              </Route>  
              <Route path="/login">
                {!user && <Login />}
                {user && <Navigate to='/' />}
              </Route>  
              <Route path="/projects/:id">
                {user && <Project />}
                {!user && <Navigate to='/login'/>}
              </Route>  
              <Route path="/signup">
                {user && <Navigate to='/'/>}
                {!user && <Signup /> }
              </Route>  
              <Route path="/create">
                {user && <Create /> }
                {!user && <Navigate to='/login'/>}
              </Route>  
            </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      }
    </div>
  );
}

export default App
