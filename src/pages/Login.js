import React from 'react';
import Input from '../components/Input';
import Navbar from '../components/Navbar';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <>
      <Navbar />
      <form className="position-relative m-4">
        <div className="mb-3">
          <Input
            type="email"
            id="email"
            label="Email address"
            value={email}
            setValue={setEmail}
          />
          {email}
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <Input
            type="password"
            id="password"
            label="Password"
            value={password}
            setValue={setPassword}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
