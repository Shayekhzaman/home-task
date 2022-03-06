import './App.css';
import Google from '../src/LoginMedia/Google';
import Mail from '../src/LoginMedia/Mail';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
 

  
  return (
    <div >
      {/* <h1>hello</h1> */}
     
      <BrowserRouter>
       
        <Switch>
          <Route exact path="/">
            <Mail></Mail>
            <Home></Home>
            
          </Route>
          <Route path='/register'>
            <Mail></Mail>
          </Route>
          <Route path='/google'>
             <Google></Google>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          
         
        </Switch>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
