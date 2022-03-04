import React, {   FormEvent, useCallback, useEffect, useRef, useState } from 'react';

import { Container, Content, Background, PersonalData, Input  } from './styles';
import Button from '../../components/Button';
//import Input from '../../components/Input';

import InputMask from '../../components/Input/InputMask';
import Link from 'next/link';


export default function SignUp()  {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState('');
  const [Birthdate, setBirthdate] = useState("");
  const [CPF, setCPF] = useState("");
  const [Zip, setZip] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");

  const [completeAddress, setCompleteAddress] = useState([]);



  return (
    <Container>
      <Background />
      <Content>

        <a href="/" className="logo">
           HEALTHY FOODS
        </a>
        <form >
          <h2>Faça seu Cadastro</h2>
          <PersonalData>
            <Input

              name="name"
              type="text"
              placeholder="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input

              name="email"
              type="text"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input

              name="password"
              type="password"
              placeholder="Senha"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <InputMask
              name="cpf"
            />

            <InputMask
              name="birthdate"
            />

            <InputMask
              name="cep"
            />

            <Input
              name="address"
            />
            <Input
              name="city"
            />
            <Input
              name="state"
            />

          </PersonalData>
            <Button
            type="submit"

            >
              Register
            </Button>
            <Link  href="signin">Você tem conta? Conecte-se</Link>
        </form>
      </Content>
    </Container>
  );
};

