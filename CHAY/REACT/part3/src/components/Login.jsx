import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })

    }


    return (
        <>
            <h2>Login</h2>
            <input value={username} type='text' placeholder='usename' onChange={(e) => setUsername(e.target.value)} />
            {'    '}
            <input value={password} type='text' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login