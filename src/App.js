import {BrowserRouter, Route, Switch} from 'react-router-dom';

// pages
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Signup from './pages/signup/Signup'
import Create from './pages/create/Create'

// styles
import './App.css'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Sidebar/>
        <div className="container">
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>  

            <Route path="/login">
              <Login />
            </Route>  

            <Route path="/projects/:id">
              <Project />
            </Route>  

            <Route path="/signup">
              <Signup />
            </Route>  

            <Route path="/create">
              <Create />
            </Route>  

          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
