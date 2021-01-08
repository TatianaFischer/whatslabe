import React from 'react';
import './App.css';
import styled from 'styled-components';

const Container = styled.div`
  background-image: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
`;

const Principal = styled.div`
  display: flex;
  /* justify-content: ce; */
  border: solid 1px black;
  height: 100vh;
  width: 500px;
  flex-direction: column;
  justify-content: flex-end;
  background-color: rgb(229, 221, 213);
`;

const Elementos = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

const Mensagens = styled.div`
  font-size: small;
  background-color: rgb(255, 255, 255);
  margin-bottom: 20px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 20px;
  border-radius: 7px;
  padding: 7px;
  max-width: 50%; ;
`;

const InputUsuario = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgb(255, 255, 255);
  width: 15%;
`;

const InputMensagem = styled.input`
  width: 60%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgb(255, 255, 255);
`;
const Botao = styled.button`
  border-radius: 5px;
  border: 1px solid rgb(255, 255, 255);
  width: 12%;
  font-weight: bold;
  background-color: white;
`;
const Formulario = styled.form`
  display: inline;
`;

class App extends React.Component {
  state = {
    whats: [
      {
        nome: 'Usuário',
        mensagem: 'Olá',
      },
    ],

    valorInputUsuario: '',
    valorInputMensagem: '',
  };

  adicionarMensagem = () => {
    const novoWhats = {
      nome: this.state.valorInputUsuario,
      mensagem: this.state.valorInputMensagem,
    };

    const novosWhats = [...this.state.whats, novoWhats];

    this.setState({
      whats: novosWhats,
      //valorInputUsuario:"",
      valorInputMensagem: '',
    });
  };

  onSubmitForm(event) {
    event.preventDefault();
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render() {
    const listaDeWhats = this.state.whats.map((item) => {
      return (
        <div className={'app-container'}>
          <strong>{item.nome}:</strong> {item.mensagem}.
        </div>
      );
    });

    return (
      <Container>
        <Principal>
          <Mensagens>{listaDeWhats}</Mensagens>

          <Formulario onSubmit={this.onSubmitForm}>
            <Elementos>
              <InputUsuario
                value={this.state.valorInputUsuario}
                onChange={this.onChangeInputUsuario}
                placeholder={'Usuário'}
              />

              <InputMensagem
                value={this.state.valorInputMensagem}
                onChange={this.onChangeInputMensagem}
                placeholder={'Mensagem'}
              />
              <Botao onClick={this.adicionarMensagem}>Enviar</Botao>
            </Elementos>
          </Formulario>
        </Principal>
      </Container>
    );
  }
}

export default App;
