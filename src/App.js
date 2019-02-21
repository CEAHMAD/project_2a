import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist' ;

class App extends Component {


  state = {

    todo: '' ,
    todos: []   

  }
    // this function for take the value from input 
    onChange = (event) => {
      this.setState({ 
        todo: event.target.value ,
      
        
        });
    
    }

    // this functon to make a copy from "todo" and push to the array 
    onSubmit =(event) =>{
      event.preventDefault();
      
      // let todolist = this.state.todos.splice(0)
      // todos1.push(this.state.todo)
      this.setState({
        todo:'',
        todos: [...this.state.todos, this.state.todo],
        
        // todos: todos1 
      })
      
      
    }
   

    // delete list
    newList = ()=>{
      this.setState({
        todo:'',
        todos:[]
      }) 
    }
    
  render(){
    const todoList1 = this.state.todos.map((item)=>{
      return <Todolist checkList={this.checkList} onSubmit={this.onSubmit} item={item}/> ;
        
      
    })
    return (
      <div>
           
      <h1>Todo List</h1>
        <form className='cl' onSubmit={this.onSubmit}>
          <input className='input'  placeholder="...TO DO" onChange={this.onChange} value={this.state.todo}/>
          <button className="btn">Add </button>
          <button className="btn" onClick={this.newList}>New List</button>
          {todoList1}
        </form>
        
        
        
        
        
      </div>
      
    );
  }
}

export default App;
