import React from 'react';
import logo from './welcome.jpg'
class Home extends React.Component{

    render(){

        return<div>
        <font face="Latin" size="09" color="blue"><h1 id="home">Welcome to Super Market</h1></font>
        <img src={logo} width="200" height="200"/>
        </div>

    }

}

export default Home;