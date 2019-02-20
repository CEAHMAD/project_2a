import React, { Component } from 'react';

class Todolist extends Component {

  state = {
    checked: false
  }

  checkList =()=>{
      
    if(this.state.checked === 'true'){
      this.setState({
        checked:'false'
      });
    }else this.setState({
      checked: 'true'
    
    })
      
  }
 


  render(){
    return (

      <div>
         
        <li onClick={this.checkList} className={this.state.checked}> 
          {this.props.item}
        </li> 
      </div>
      
    );
  }


}

export default Todolist;