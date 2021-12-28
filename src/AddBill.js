import React,{useState} from 'react';
import Axios from 'axios';
import './App.css'
function AddBill()
{
    const [name,setName]=useState('')
    const [cost,setCost]=useState('')
    const [product,setProduct]=useState('')
    const [total,setTotal]=useState('')
    const AddBill1=()=>{
        alert("Thank You For Shopping")
        Axios.post("http://localhost:3006/insert",{name:name,cost:cost,product:product,total:total})
    }
    return(
        <div>
            <font face="Times New Roman" color="white"><h1 align="center">Add Customer Bill</h1></font><br/>
            <table border="3" align="center">
            <tr><b><td><lable>Customer Name:</lable></td></b>
            <td><input type="text" onChange={(event)=>{setName(event.target.value)}}/></td></tr><br/>
            <tr><b><td><lable>product:</lable></td></b>
            <td><input type="text" onChange={(event)=>{setProduct(event.target.value)}}/></td></tr><br/>
            <tr><b><td><lable>Product Cost:</lable></td></b>
            <td><input type="text" onChange={(event)=>{setCost(event.target.value)}}/></td></tr><br/>
            <tr><b><td><lable>Product Total:</lable></td></b>
            <td><input type="text" onChange={(event)=>{setTotal(event.target.value)}}/></td></tr><br/>
            <td><button onClick={AddBill1}>Add Bill</button></td>
            </table>
        </div>
    );
}
export default AddBill;