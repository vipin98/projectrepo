import React from 'react';
import classes from './homepage.module.css';




class homepage extends React.Component {

   
   state = {
       id:"1",
     First:"vipin",
     Last:"pandey",
     Handel:"vipin@gmail.com",
    Data:[{
        "id" : "0",
        "First": "hello",
        "Last":"pandey",
        "Handel":"vipin@122"

    }]
    
    }
hendelDelet1 = (stateId)=>{
    const { Data } = this.state;
    this.setState({
        id: "",
        First: "",
        Last:"",
        Handel:""

    })
  
}
hendelDelet(itemId){
    const { Data } = this.state;
    this.setState({
        Data : Data.filter(Data =>Data.id !== itemId)
    })
}
 hendelEdit = (itemId)=>{
    const { Data } = this.state;
    
    let id = prompt("please enter id", "1")
   
    let first = prompt("please enter your First name", "vipin");
    
    let last= prompt("please enter your last name", "pandey");
  
   let handel =  prompt("please enter your Email ", "vipin@gmail.com");
   
  let data = {
    id : id,
    First: first,
    Last: last,
    Handel: handel
   }
   
  let data1=Data.filter(Data =>Data.id !== itemId)
  this.setState({
    Data : [data]
})




}
hendelEdit1 = ()=>{
    const { Data } = this.state;
    
    let id = prompt("please enter id", "1")
    if(id != null){
        this.setState({id : id})
   }
    let first = prompt("please enter your First name", "vipin");
    if(first != null){
         this.setState({First : first})
    }
    let last= prompt("please enter your last name", "pandey");
    if(last != null){
        this.setState({Last : last})
   }
   let handel =  prompt("please enter your Email ", "vipin@gmail.com");
   if(handel !=null){
       this.setState({Handel : handel})
   }
 



}

    render(){
        
        return(
          <div className={classes.homepage}>
              <h1>Curd Operation</h1>
              <div className ={classes.homepageConatiner}>
                  
                  <input className ={classes.Inputone} type="text" placeholder="ID"/> <br/>
                  <input className ={classes.Inputone} type="text" placeholder="Product Name"/><br/>
                  <input className ={classes.Inputwo} text="text" placeholder="seller"/>
                  <input className ={classes.Inputwo} text="text" placeholder="Price"/>
                  <div className ={classes.butncontainer}>
                  <button className ={classes.btn1} >Creat</button>
                  <button className ={classes.btn2}>Read</button>
                  <button className ={classes.btn3}>Update</button>
                  <button className ={classes.btn4}>Delete</button>
                  </div>
                  <div className ={classes.Container}>
        <table className ={classes.Table}>
            <thead>
                <tr>
                    <th className ={classes.tableHead} scope="col">#</th>
                    <th className ={classes.tableHead} scope="col">First</th>
                    <th className ={classes.tableHead} scope="col">Last</th>
                    <th className ={classes.tableHead} scope="col">Handle</th>
                    <th className ={classes.tableHead} scope="col">Edit</th>
                    <th className ={classes.tableHead} scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
           
       { this.state.Data.map((item,idx)=>(
                <tr key={idx} >
               
           
            <td className ={classes.tableData} scope="col">{item.id}</td>
            <td className ={classes.tableData} >{item.First}</td>
            <td className ={classes.tableData} >{item.Last}</td>
            <td className ={classes.tableData} >{item.Handel}</td>
            <td className ={classes.tableData} >{ <i class="fas fa-edit btnedit" onClick ={()=>this.hendelEdit(item.id)} ></i>}</td>
            <td className ={classes.tableData} > {<i class="fas fa-trash-alt btndelete"  onClick ={()=>this.hendelDelet(item.id)} ></i>}</td>
          
        
    
                </tr>
                
               ))}
                <tr>
            <td className ={classes.tableData} scope="col">{this.state.id}</td>
            <td className ={classes.tableData} >{this.state.First}</td>
            <td className ={classes.tableData} >{this.state.Last}</td>
            <td className ={classes.tableData} >{this.state.Handel}</td>
            <td className ={classes.tableData} >{<i class="fas fa-edit btnedit" onClick ={()=>this.hendelEdit1(this.state.id)} ></i>}</td>
            <td className ={classes.tableData} > {<i class="fas fa-trash-alt btndelete"  onClick ={()=>this.hendelDelet1(this.state.id) } ></i>}</td>
            </tr>
            </tbody>
        </table>
    </div>
    
                  
              </div>
          </div>
    );
}
   
}

export default homepage;