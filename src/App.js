import {BrowserRouter, Route, Switch} from 'react-router-dom';

// pages
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/login/Login'
import Project from './pages/project/Project'
import Signup from './pages/signup/Signup'
import Create from './pages/create/Create'

// styles
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
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
  );
}

export default App
