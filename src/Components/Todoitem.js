import React, {Component} from 'react';
import './Todoitem.css';

class Todoitem extends Component{
    render(){
        let className = 'TodoItem';
        const { item } = this.props;
        if(item.isdone){
            className += ' TodoItem-done'
        }
        return(
            <div className={className}>
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}
export default Todoitem;