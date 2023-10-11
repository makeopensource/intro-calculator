import React from 'react';
import './App.css';
import styled from 'styled-components'
import Calculator from './components/Calculator';

const Container = styled.div`
align-items: center;
background: #323232;
display: flex;
flex-direction: column;
justify-content: center;
min-height: 100vh;
width: 100vw;`
function App() {
  //links the landing page to the calculator file
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
