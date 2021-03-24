import React, {Component} from 'react';

class Todoitem extends Component{
    render(){
        return(
            <div className="TodoItem">
                <p>{this.props.title}</p>
            </div>
        )
    }
}
export default Todoitem;