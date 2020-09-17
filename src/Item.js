import React, {Component, FormEvent} from 'react'
import ReactDOM from 'react-dom'
import './InputField.scss'
import ToDoTask from'./ToDoTask'
import './ToDoTask.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateP from  './DatePicker'
import ListOfItems from './ListOfItems'

class Item extends React.Component{
    constructor(props){
        super(props);
            this.state=
                {
                    name: this.props.valueFromParent, date: this.props.dateFromParent
                }
            this.ListOfItems = React.createRef();
        }

    handleChange(){
        this.setState({
        
            name: this.props.valueFromParent,
            date: this.props.dateFromParent,
        });
    }
        
    
    render(){
        return (
            <div>
                <ListOfItems ref={this.ListOfItems} valueFromParent={this.state.value} dateFromParent={this.state.date}></ListOfItems >
            </div>
          );
    }
    
}

export default Item