import React,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState("")
    const [passward, setPassward] = useState('')

    const {setUser} =useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, passward})
    }
  return (
    <>
    <h2>Login</h2>
    <input 
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
    type="text" placeholder='Username' />
    <input 
    value={passward}
    onChange={(e)=>setPassward(e.target.value)}
    type="text" placeholder='Passward' />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login