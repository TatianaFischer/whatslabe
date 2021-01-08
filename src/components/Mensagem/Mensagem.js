import React, { Component } from 'react';
import styled from 'styled-components';


const InputMensagem = styled.input`
    width: 90%;
`

export default class Mensagem extends Component {
  
  render() {
    return (
        <InputMensagem placeholder="Mensagem" />    
    );
  }
}
