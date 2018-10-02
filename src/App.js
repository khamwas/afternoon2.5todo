import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      list:[]
    }
    this.deleteItem=this.deleteItem.bind(this);
    this.handleKeyPress=this.handleKeyPress.bind(this);
    this.changeHandler=this.changeHandler.bind(this);
  }

  changeHandler(e){
    this.setState({input: e.target.value})
  }
  handleKeyPress(e){
    let newList=this.state.list.slice();
    if(e.key==='Enter'){
      newList.push(this.state.input);
      this.setState({list:newList})
    }
  }
  deleteItem(index){
    let tempList=this.state.list.slice();
    tempList.splice(index,1);
    this.setState({list:tempList})
  }

render(){
  return<div className='App'>
  <input type="text" placeholder='New Task' onKeyPress={(e)=>this.handleKeyPress(e)} onChange={(e)=>this.changeHandler(e)}></input>
  <List list={this.state.list} deleteItem={this.deleteItem}></List>
  </div>
}
}

export default App;
