
import './App.css';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import Login from './components/Login'
import UserRegistration from './components/UserRegistration'
import UserProfile from  './components/UserProfile'

function App() {
  return (
    <BrowserRouter>
    <div>
      <ul className="nav bg-dark justify-content-center">
      <li className="nav-item">
          <Link className="nav-link" to="/userregistration">UserRegister</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/userprofile">UserProfile</Link>
        </li>
      </ul>
 
      {/*switch */}
      <Switch>
         <Route path="/login">
           <Login />
         </Route>
 
         <Route path="/userregistration">
           <UserRegistration />
         </Route>
 
         <Route path="/userprofile/:username">
           <UserProfile />
         </Route>
 
      </Switch>
    </div>
    </BrowserRouter>
  )
}

export default App;
