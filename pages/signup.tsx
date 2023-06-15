import { useState } from 'react';
import { Container, Input, Button, Spacer, Card, Text } from '@nextui-org/react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Perform signup logic
    // ...

    // Reset form fields and error
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <Container fluid>
      <Card variant="bordered" css={{ mw: "stretch", px: "$20", my: "$10" }}>
        <Text h2>Sign Up</Text>
        <Spacer y={1} />

        {error && <Text color="error">{error}</Text>}

        <form onSubmit={handleSubmit}>
          <Input
            rounded
            bordered
            color='default'
            label="Email"
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        {/* <Input label="Full Name" placeholder="Guillermo Rauch" />; */}

          <Spacer y={0.5} />

          <Input
            rounded
            bordered
            color='default'
            label="Password"
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          

          <Spacer y={0.5} />

          <Input
           rounded
           bordered
           color='default'
            label="Confirm Password"
            type="password"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <Spacer y={1} />

          <Button shadow auto color="error" type="submit">Sign Up</Button>
        </form>
      </Card>
    </Container>
  );
};

export default Signup;
