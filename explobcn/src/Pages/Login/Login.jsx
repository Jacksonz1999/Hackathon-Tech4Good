import { useState } from 'react'
import  ButtonBrown  from '../../Components/ButtonBrown';
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
  }

  return (
    <div className="flex-container">
      <div className="login-container">
        <h1 className="login-title">Log in</h1>
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
            <Link to ="/homepage">
              <ButtonBrown name="Log in" />
            </Link>
        </form>
        <Link to="/signup" className="sign-up-button">Create an account?</Link>
      </div>
      <div className="login-img"></div>
    </div>
  )
}

export default Login
