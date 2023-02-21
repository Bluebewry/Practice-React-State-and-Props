import React, { Component, useState } from 'react';
import Home from './views/Home';
import Nav from './components/Nav';
import Profile from './views/Profile';
import ToDo from './views/ToDo';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { IndeterminateCheckBox } from '@mui/icons-material';
import SignUp from './views/SignUp';
import Login from './views/Login';


export default function AppFunction() {
    const [myList, setMyList] = useState([])
    const [user, setUser] = useState([])

    const logMeIn = (user) => {
        setUser(user)
    }
    const logMeOut = (user) => {
      setUser({})
  }

    const addToDo = (e) => {
        e.preventDefault()
        const text = e.target.myText.value
        setMyList(myList.concat([text]))
    }
    const deleteToDo = (indexToDelete) => {
        const copy = [...myList]
        copy.splice(indexToDelete, 1)
        setMyList(copy)
    }

  
    return (
      <BrowserRouter>
        <div>
            <Nav user={user} logMeOut={logMeOut}/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/todo' element={<ToDo myList = {myList} addToDo = {addToDo} deleteToDo = {deleteToDo} />}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/login' element={<Login logMeIn={logMeIn}/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    )
  }