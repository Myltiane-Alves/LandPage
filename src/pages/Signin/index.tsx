
import React, { useRef, useState } from 'react';

import { Background, Container, Content } from './styles';
import Link from 'next/link';

export default function SigIn() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  return (
    <Container>
      <Background />
      <Content>
        <a href="/" className="logo">
           HEALTHY FOODS
        </a>
        <form  >
          <h1>Login</h1>

          <input
           name="email"
           placeholder="E-mail"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" ><a>Login  </a></button>
          <a href="#senha">Forgot password</a>
          <Link  href="signup"> Register </Link>
        </form>
      </Content>
    </Container>
  );
}
