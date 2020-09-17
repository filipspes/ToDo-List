import React, {Component, FormEvent} from 'react'
import ReactDOM from 'react-dom'
import './InputField.scss'
import ToDoTask from'./ToDoTask'
import './ToDoTask.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateP from  './DatePicker'
import ListOfItems from  './ListOfItems'
import Item from './Item'



class InputField extends React.Component { 

    
    constructor(props) {
        super(props);
        this.state = ({ value: '',
                        date: new Date(),
                        day: new Date().getDate(),
                        month: new Date().getMonth() + 1,
                        year: new Date().getFullYear(),
                        daysToFinish: 0});
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Item = React.createRef();
        this.ListOfItems = React.createRef();
      }

    

    
    changeDate = (newDate) =>{
        var parsedDate = newDate;
        this.checkPriority(newDate);
        this.setState({
            date: newDate,
            day: newDate.getDate(),
            month: newDate.getMonth() + 1,
            year: newDate.getFullYear(),
            daysToFinish: this.checkPriority(newDate),
        })
    }

    checkPriority(date){
        var actualDate = new Date();
        var priority = 0;
        var daysToFinish = Math.round((date-actualDate)/(1000*60*60*24));
       // alert(dayBetween);

        /*if(dayBetween == 0){
            priority = 1;
        }
        else if(dayBetween > 0 && dayBetween <= 7){
            priority = 2;
        }
        else if(dayBetween > 7 && dayBetween <= 30){
            priority = 3;
        }
        else if(dayBetween > 30 && dayBetween <= 365){
            priority = 4;
        }*/

        return daysToFinish;

    }
    handleSubmit(event) {
        event.preventDefault();
        this.ListOfItems.current.addNewItem();
        this.setState({
            value: ''
          });
      }

      handleChange(event) {
          this.setState({value: event.target.value});  }

    // createNewTask(){
    //     var searchString = this.state.value;
    //     console.log(searchString);
    //     const rootElement = document.getElementsByClassName("App-header");
    //     const newElement = document.createElement("ToDoTask"); 
    //     const newContent = document.createTextNode(searchString + this.state.date);
    //     newElement.appendChild(newContent);
    //     rootElement[0].appendChild(newElement);
        
    // }

    handleItem(){
        
    }

    clearInput = () => {
        this.setState({value: ''});  
    };

    render() 
    { 
        return (<div>{this.props.date}
            <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} placeholder="Input new task name..." onChange={this.handleChange}
            className="search"
            ></input>  
        </form> 
        <DateP handleDate={this.changeDate.bind(this)}></DateP>
        <div>
        <ListOfItems ref={this.ListOfItems} valueFromParent={this.state.value} dayFromParent={this.state.day} monthFromParent={this.state.month} yearFromParent={this.state.year} priorityFromParent={this.state.daysToFinish}></ListOfItems>
        </div>
        </div>);
        
    } 
} 

export default InputField