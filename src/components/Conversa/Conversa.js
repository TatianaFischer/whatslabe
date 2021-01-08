import React, { Component } from 'react';
import styled from 'styled-components';

const Mensagens = styled.div`
  font-size: small;
  background-color: rgb(255,255,255);
  margin-bottom: 20px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 7px;
  padding: 7px;
`


export default class Conversa extends Component {
  
  render() {

    const listaDeWhats = this.state.whats.map(item => {

return (
<div className={'app-container'}>       
    <strong>{item.nome}:</strong> {item.mensagem}.

</div>

);
});

    return (
      <Mensagens>
      {listaDeWhats}
     </Mensagens>
    );
  }
}
