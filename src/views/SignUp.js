import React from 'react'

export default function SignUp() {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const username = event.target.username.value
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value

        const reqBody = {
            username: username,
            email: email,
            password: password
        }

        const url = 'http://127.0.0.1:5000/api/signup'
        const options = {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if (password !== confirmPassword) {
            console.log('oops passwords dont match')
        }

        const res = await fetch(url, options)
        const data = await res.json()
        console.log(data)

    }



  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <input placeholder='username' name='username'/>
            <input placeholder='email' name='email'/>
            <input placeholder='password' name='password' type='password'/>
            <input placeholder='confirm password' name='confirmPassword' type='password'/>
            <button type='submit'>Sign Up</button>
        </form>


    </div>
  )
}
