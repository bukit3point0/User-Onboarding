import React from 'react'
import './App.css';
import Form from './Form'
import styled from 'styled-components'
import background from './images/matrix-rain.jpg'

const LoginForm = styled.div``
const HeaderContainer = styled.div``
const Welcome = styled.h1`
  text-align: center;
  font-family: 'DotGothic16', sans-serif;
  font-size: 3rem;
  letter-spacing: 10px;
  width: 80%;
  margin: 2% auto;
`

function App() {
  return (
    <LoginForm>
      <HeaderContainer>
      <Welcome>Welcome. Are you the one we've been waiting for?</Welcome>
      </HeaderContainer>
      <Form/>
    </LoginForm>
  );
}

export default App;
