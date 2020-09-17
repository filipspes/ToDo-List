import React, {Component, FormEvent} from 'react'
import './InputField.scss'

class ListOfItems extends React.Component{

    constructor(){
        super();
        this.state = {items: [

        ]
        }
    }



    listOfItems = () =>{

        if(this.state.items.length === 0){
            return;
        }
        else{

        return this.state.items.map(item =>
                <li key={item.id} className="dude">
                <a className="ctrl" onClick={()=>this.removeDude(item)}>x</a>
                    <article>
                    {item.name}
                    <span>{"Deadline: " + item.day +"/" + item.month + "/" +item.year + " - " + item.daysToFinish + " days remaining."}</span>
                    </article>
                    </li>
            )
        }
    }
    componentDidMount(){
        var initialDataFromLocalStrage = JSON.parse(localStorage.getItem("myData"));
        this.setState({
            items: initialDataFromLocalStrage,
        });
    }

    handleChange(){
        this.setState({
            name: this.props.valueFromParent,
            //date: this.props.dateFromParent.split("T")[0],
            day: this.props.dayFromParent,
            month: this.props.monthFromParent,
            year: this.props.yearFromParent,
            daysToFinish: this.props.priorityFromParent
        });
    }

    addNewItem = () => {
    var newId;
    if(this.state.items.length == 0){
        newId = 1;
    } else{
        newId = Math.max(...this.state.items.map(d=> d.id)) + 1
    }
    this.setState(state =>{
        const newItem  =      {
            id: newId,       
            name: this.props.valueFromParent,
            //date: this.props.dateFromParent.split("T")[0],
            day: this.props.dayFromParent,
            month: this.props.monthFromParent,
            year: this.props.yearFromParent,
            daysToFinish: this.props.priorityFromParent
        }
            return{
                items: [ ...state.items, newItem]
            }
            
        })
    }

    

        removeDude = itemToRemove => {
            this.setState(state => {
                return {
                    items: state.items.filter(item => item !== itemToRemove)
                }
            })
        }

        componentWillUpdate(){
           // console.log("Component changed")
            //localStorage.removeItem("myData");
            localStorage.setItem("myData", JSON.stringify(this.state.items));
        }
    
        render(){
        return (
            <div>
                {this.listOfItems()}
            </div>
          );
            }
        
        }
      export default ListOfItems