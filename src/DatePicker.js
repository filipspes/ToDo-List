import React, {Component, FormEvent} from 'react'
import './InputField.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class DateP extends React.Component{

    constructor(){
        super();
        this.state={
          date: new Date()
            }
        }
      
     
    handleDateChange = () => {
        this.props.handleDate(this.state.date)
        this.props.changeDate(this.state.date)
    }
    handleChange = (date) => {
        this.setState({
            date: date
        }, () => {
            this.props.handleDate(this.state.date)
        });
        
        
    }
        
      
     
      render() {
        return (
        <div>
            Deadline : 
          < DatePicker
            selected={this.state.date}
            onChange={this.handleChange}
            sendData={this.handleDateChange}
          />
          </div>
        );
      }
}

export default DateP
