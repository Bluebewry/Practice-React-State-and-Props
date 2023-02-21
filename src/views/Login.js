import React from 'react'

export default function Login({logMeIn}) {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value


        const url = 'http://127.0.0.1:5000/api/login'
        const options = {
            method: "POST",
            headers: {
                Authorization: `Basic ${btoa(username+':'+password)}`
            }
        }

        const res = await fetch(url, options)
        const data = await res.json()
        console.log(data)
        if (data.status == 'ok'){
            logMeIn(data.user)
        }

    }
  return (
    <div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <input placeholder='username' name='username'/>
        <input placeholder='password' name='password' type='password'/>
    
        <button type='submit'>Login</button>
    </form>


</div>
  )
}
