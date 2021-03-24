import logo from './logo.svg';
import './App.css';
import TodoItem from './Components/Todoitem';
import React, {Component} from 'react';

class App extends Component {
  constructor() {//Khoi tao array
    super();//Contructor class kế thừa
    this.TodoItem = [
      {title: "Code JS", isdone: true},
      {title: "Code Java", isdone: true},
      {title: "Code C#", isdone: false},
    ];
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            this.TodoItem.map((item, index) => <TodoItem key={index} item = {item} />)// Tuong tu for each //props
          }

        </header>
      </div>
    );
  }
  
}

export default App;
