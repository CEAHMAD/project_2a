import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist' ;

class App extends Component {


  state = {

    todo: '' ,
    todos: []   

  }
    
    onChange = (event) => {
      this.setState({ 
        todo: event.target.value ,
      
        
        });
    
    }
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
           
      <h1>To Do List</h1>
        <form className='cl' onSubmit={this.onSubmit}>
          <input className='input'  placeholder="...TO DO" onChange={this.onChange} value={this.state.todo}/>
          <button className="btn">Add</button>
          <button className="btn" onClick={this.newList}>New List</button>
          {todoList1}
        </form>
        
        
        
        
        
      </div>
      
    );
  }
}

export default App;
