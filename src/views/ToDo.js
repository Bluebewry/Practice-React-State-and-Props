import React, { Component } from 'react'
import CheckboxList from '../components/ToDoItem'
import ToDoItem from '../components/ToDoItem'

export default class ToDo extends Component {



  render() {
    return (
        <div>
            <form onSubmit={this.props.addToDo}>
                <input placeholder='Add a To Do Item' name='myText'/>
                <button style={{backgroundColor: "green", color: "white"}} type='submit'>Add</button>
            </form>

            {/* {this.showToDo()} */}
            <CheckboxList myList = {this.props.myList} deleteToDo = {this.props.deleteToDo}/>
        </div>


    )
  }
}
