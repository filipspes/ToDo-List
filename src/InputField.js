import React, {Component, FormEvent} from 'react'
import './InputField.scss'
import "react-datepicker/dist/react-datepicker.css";
import DateP from  './DatePicker'
import ListOfItems from  './ListOfItems'



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