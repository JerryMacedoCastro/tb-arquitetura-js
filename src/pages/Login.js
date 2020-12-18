import React from 'react';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import SubmitButtton from '../components/SubmitButtton';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Feature not implemented yet');
  };

  return (
    <>
      <Navbar />
      <div className="row justify-content-center">
        <form className="col-4">
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

          <SubmitButtton
            id="loginsubmit"
            label="Login"
            handleSubmit={handleSubmit}
          />
        </form>
      </div>
    </>
  );
};

export default Login;
