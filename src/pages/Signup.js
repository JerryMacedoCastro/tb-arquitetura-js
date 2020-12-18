import React from 'react';
import Input from '../components/Input';
import Navbar from '../components/Navbar';

const Signup = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
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
          type="password"
          id="password"
          label="Password"
          value={password}
          setValue={setPassword}
        />
      </div>
    </>
  );
};

export default Signup;
