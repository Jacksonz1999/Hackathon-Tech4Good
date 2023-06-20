import { useState } from 'react'
import  ButtonBrown  from '../Components/ButtonBrown';
import './Login.css'

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
          <ButtonBrown name="Log in" />
        </form>
        <a href="#" className="sign-up-button">Create an account?</a>
      </div>
      <div className="login-img"></div>
    </div>
  )
}

export default Login
