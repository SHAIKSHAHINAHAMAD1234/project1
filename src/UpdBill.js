import React,{useState} from 'react';
import Axios from 'axios';
import './App.css'
function UpdBill()
{
    const [name,setName]=useState('')
    const [cost,setCost]=useState('')
    const [product,setProduct]=useState('')
    const [total,setTotal]=useState('')
    const UpdBill1=()=>{
        alert("Updating")
        Axios.post("http://localhost:3006/update",{name:name,cost:cost,product:product,total:total})
    }
    return(
        <div>
            <font face="Times New Roman" color="white"><h1>Update Customer Bill</h1></font>
            <table border="1" align="center">
            <tr><b><td><lable>Customer Name:</lable></td></b>
            <td><input type="text" onChange={(event)=>{setName(event.target.value)}}/></td></tr><br/>
            <tr><b><td><lable>product:</lable></td></b>
            <td><input type="text" onChange={(event)=>{setProduct(event.target.value)}}/></td></tr><br/>
            <tr><b><td><lable>Product Cost:</lable></td></b>
            <td><input type="text" onChange={(event)=>{setCost(event.target.value)}}/></td></tr><br/>
            <tr><b><td><lable>Product Total:</lable></td></b>
            <td><input type="text" onChange={(event)=>{setTotal(event.target.value)}}/></td></tr><br/>
            <td><button onClick={UpdBill1}>Update Bill</button></td>
            </table>
        </div>
    );
}
export default UpdBill;