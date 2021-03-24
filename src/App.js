import logo from './logo.svg';
import './App.css';
import TodoItem from './Components/Todoitem';
import React, {Component} from 'react';

class App extends Component {
  constructor() {//Khoi tao array
    super();//Contructor class kế thừa
    this.TodoItem = [
      'Code JS',
      'Code Java',
      'Code C#'
    ];
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {
            this.TodoItem.map((item, index) => <TodoItem key={index} title = {item} />)// Tuong tu for each
          }

        </header>
      </div>
    );
  }
  
}

export default App;
