import React,{useState} from 'react';
import  Axios  from 'axios';
import './App.css'
function DelBill()
{
    const [cname,setcname]=useState(" ")
    const delBill=()=>{
        alert("Deleting Record");
        Axios.post("http://localhost:3006/delRec",{cname:cname})
    }
    return(
        <div>
            <font face="Times New Roman" color="white"><h1>Delete Customer Record</h1></font>
            <table border="1" align="center">
            <tr><b><td><lable>Customer Name to delete:</lable></td></b>
            <td><input type="text" onChange={(event)=>{setcname(event.target.value)}}/></td></tr>
            <button onClick={delBill}>Delete Customer</button>
            </table>
        </div>
    );
}
export default DelBill;