import { useState } from 'react'
import './sign_up.css'

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
  }

  return (
    <div className="flex-container">
      <div className="login-container">
        <h1 className="login-title">Create new account</h1>
        <form onSubmit={handleLogin} className="login-form">

        <label htmlFor="first-name">First name</label>
        <input
          type="first-name"
          id="first-name"
          name="first-name"
          value={firstName}
          onChange={(e) => setEmail(e.target.value)}/>

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
          <button type="submit" className="button-primary">Create account</button>
        </form>
        <a href="#" className="sign-up-button">Create an account?</a>
      </div>
      <div className="login-img"></div>
    </div>
  )
}
