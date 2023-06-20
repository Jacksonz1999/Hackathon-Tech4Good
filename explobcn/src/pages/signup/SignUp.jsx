import { useState } from 'react'
import './sign_up.css'

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm:', confirmPassword);
    // Reset form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex-container">
      <div className="sign-up-img"></div>
      <div className="sign-up-container">
        <h1 className="sign-up-title">Sign Up</h1>
        <form onSubmit={handleSubmit} className="sign-up-form">
          <label htmlFor='first-name'>First name</label>
          <input
            type="text"
            className="first-name"
            name="first-name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <label htmlFor='last-name'>Last name</label>
          <input
            type="text"
            className="last-name"
            name="last-name"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <label htmlFor='email'>Email</label>
          <input
            type="email"
            className="email"
            name="email"
            value={email} onChange={handleEmailChange} />
          <label htmlFor='password'>Password</label>
          <input
            type="password"
            className="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label htmlFor='confirm-password'>Confirm password</label>
          <input
            type="confirm-password"
            className="confirm-password"
            name="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <button type="submit" className="button-primary">Sign Up</button>
        </form>
        <a href="#" className="sign-up-button">Already have an account?</a>
      </div>
    </div>
  );
}

export default SignUp;
