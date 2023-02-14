import React, { Component } from 'react';
import Home from './views/Home';
import Nav from './components/Nav';
import Profile from './views/Profile';
import ToDo from './views/ToDo';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { IndeterminateCheckBox } from '@mui/icons-material';


export default class App extends Component {
  constructor () {
    super()
    this.state = {
      myList: []
    }
  }
  addToDo = (e) => {
    e.preventDefault()
    const text = e.target.myText.value
    this.setState({myList: this.state.myList.concat([text])})
  }
  deleteToDo = (indexToDelete) => {
    const copy = [...this.state.myList]
    copy.splice(indexToDelete, 1)
    this.setState({myList: copy})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
            <Nav/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/todo' element={<ToDo myList = {this.state.myList} addToDo = {this.addToDo} deleteToDo = {this.deleteToDo} />}/>
            </Routes>
        </div>
      </BrowserRouter>
    )
  }
}
