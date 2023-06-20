import { useState } from 'react'
import './login.css'

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
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className="button-primary">Log in</button>
        </form>
        <a href="#" className="sign-up-button">Create an account?</a>
      </div>
      <div className="login-img"></div>
    </div>
  )
}

export default Login
