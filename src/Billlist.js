import React from "react";
class Billlist extends React.Component {    // Constructor
    constructor(props) {
        super(props);  
        this.state = {    items: [],      DataisLoaded: false    };
    }
    // ComponentDidMount is used to  execute the code
    componentDidMount() {
        fetch("http://localhost:3006/show").then((res) => res.json()).then((json) => {
                this.setState({items: json, DataisLoaded: true });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
        return (
        <div className = "App">
            <font face="Times New Roman" color="white"><h1>Bills In DataBase</h1></font>
            <table border='1' align='center'>
                    <tr><th>S.No</th><th>Customer Name</th><th>Product</th><th>Cost/Unit</th><th>Total Cost</th></tr>
           {
                items.map((item) => (
                         <tr key = { item._id } ><td>{item._id}</td>
                         <td>{item.name}</td>
                         <td>{item.product}</td> 
                         <td>{item.cost}</td> 
                         <td>{item.total}</td>                  
                  </tr>
                ))        
         }
         </table>
        </div>
    );
}
}  
export default Billlist;