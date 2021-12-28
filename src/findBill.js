import React,{ useState } from "react";
import Axios from 'axios';
import './App.css';
function FindBill()
{
    const [name,setName]=useState('')
    const FindBill1=()=>{
        alert("Finding")
        Axios.post("http://localhost:3006/findByName",{name:name,cost:cost,product:product,total:total})
    }
      return(
    <div><h1>Searching Customer Bill</h1>
    <tr><td><lable align="center">Customer Name:</lable></td>
        <b><td><input type="text" onChange={(event)=>{setName(event.target.value)}}/></td></b></tr><br/>
    <button onClick={FindBill1}>Find Customer Bill</button>
    <br/>
     Name:{name}<br/>
     Cost:{cost}<br/>
     Product:{product}<br/>
     Total:{total}<br/>
    </div>
    );    
    }    
    export default FindBill;