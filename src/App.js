import React from 'react';
import AddBill from './AddBill';
import UpdBill from './UpdBill';
import Billlist from './Billlist';
import DelBill from './DelBill';
import Home from './Home';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css';
class App extends React.Component
{
  
  render()
  {
    return (
      <React.Fragment>
         <Router>
          <div className="App">
          <font face="Times New Roman" size="04" color="white"><i><b><marquee behavior="alternate" direction="left" color="white">  WELCOME TO SUPER MARKET  </marquee></b></i></font>
            <font face="Times New Roman" size="06" color="white"><i><h1>Super Market</h1></i></font>
            <table border="2" align="center" id="tab">
            <tr>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td><NavLink to="/Home" exact activeStyle={{color:'red'}}>Home</NavLink></td>&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td><NavLink id="Add" to="/AddBill" exact activeStyle={{color:'red'}}>Add Customer Bill</NavLink></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td><NavLink id="Update" to="/UpdBill" exact activeStyle={{color:'red'}}>Update Customer Bill</NavLink></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <td><NavLink id="Bill" to="/Billlist" exact activeStyle={{color:'red'}}>Customer Billlist</NavLink></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                <td><NavLink id="Delete" to="/DelBill" exact activeStyle={{color:'red'}}>Delete Customer Bill</NavLink></td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </tr>
            </table>  
            <Route path="/Home" component={Home} /> 
            <Route path="/AddBill" component={AddBill} />  
            <Route path="/UpdBill" component={UpdBill} />  
            <Route path="/Billlist" component={Billlist} /> 
            <Route path="/DelBill" component={DelBill} />  
          </div>
          </Router>
       </React.Fragment>
       );
     }
    }
     export default App;
