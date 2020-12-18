import React from 'react';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import SubmitButtton from '../components/SubmitButtton';

const Signup = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [confirmationEmail, setConfirmationEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmationPassword, setConfirmationPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Feature not implemented yet');
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Input
          type="text"
          id="name"
          label="Name: "
          value={name}
          setValue={setName}
        />

        <Input
          type="email"
          id="email"
          label="Email address"
          value={email}
          setValue={setEmail}
        />
        <Input
          type="email"
          id="confirmationemail"
          label="Confirm your Email address"
          value={confirmationEmail}
          setValue={setConfirmationEmail}
        />

        <Input
          type="password"
          id="password"
          label="Password"
          value={password}
          setValue={setPassword}
        />

        <Input
          type="password"
          id="confirmationpassword"
          label="Confirm your Password"
          value={confirmationPassword}
          setValue={setConfirmationPassword}
        />
        <div className="d-grid gap-2">
          <SubmitButtton
            id="register"
            label="Register"
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
