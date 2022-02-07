import React from 'react';
import Form from './components/Form';
import './index.css';
import Card from './components/Card';

class App extends React.Component {
  // é padrão iniciar a aplicação principal onde se quer chamar o estado iniciando com constructor(), em seguida super() e então desestruturar o estado.
  constructor() {
    super();
    this.state = {
      carta: {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        // hasTrunfo,
        isSaveButtonDisabled: true,
      },
      cartas: [],
      tryunfo: false,
    };
    // aqui é bind da função handleChange e da handleSaveButton, se essas funções fossem uma arrow function não seria necessário um bind, contudo poderia afetar na performace
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveButton = this.handleSaveButton.bind(this);
  }

  // função os valores do estado através de name, poderia ser ID tb ou um valor único, mas para isso é desestruturado anteriormente, nessa função estou acessando name que está em estado
  // essa função roda toda vez que um dado novo é alterado no estado
  handleChange(event) {
    const { target } = event; // desconstruindo target
    const { name, type } = target; // desconstruindo name e type
    const value = type === 'checkbox' ? target.checked : target.value; // verifica se type é checkbox ou não, deverá considerar marcação checked, caso não seja considerar o valor atribuido.
    this.setState((prevState) => ({
      carta: {
        ...prevState.carta,
        [name]: value,
      },
    }), () => {
      this.requisitosParaValidacao();
    });
  }

  handleSaveButton() {
    const { cartas } = this.state;
    const { carta } = this.state;
    // e realizada a condicional do tryunfo, caso cardTrunfo seja checked será igual a true e o valor do tryunfo será atualizado no estado e seguirá para a lógica no forms excluindo a o campo de marcação.
    if (carta.cardTrunfo === true) {
      this.setState({
        tryunfo: carta.cardTrunfo,
      });
    }
    const { tryunfo } = this.state; // desconstruido tryunfo apenas para aplicar o console.log e poder ser visto a operação.
    console.log(tryunfo);
    this.setState({ cartas: [carta, ...cartas], // o estado é atualizado e adicionado ao array cartas, carta e o que já estava no array cartas antes.
      carta: { // novos valores zerados atribuidos a carta quando atualizado estado após o botão salvar ser acionado
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        // hasTrunfo,
        isSaveButtonDisabled: true,
      },
    });
  }

  requisitosParaValidacao = () => { // essa função realiza a validação dos campo conforme pré-estabelecido.
    const { carta } = this.state;
    const { cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardImage,
      cardDescription,
      cardRare,
    } = carta;
    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);
    const maxSoma = 210;
    const maxAtributo = 90;
    const negativo = 0;
    const somAttr = attr1 + attr2 + attr3;

    const condicao = (cardName !== ''
    && cardDescription !== ''
    && cardImage !== ''
    && cardRare !== ''
    && somAttr <= maxSoma
    && attr1 <= maxAtributo
    && attr1 >= negativo
    && attr2 <= maxAtributo
    && attr2 >= negativo
    && attr3 <= maxAtributo
    && attr3 >= negativo);

    this.setState((prevState) => ({ // o estado é atualizado aplicando a lógica de acionamento do botão salvar caso a condicinal seja verdadeira.
      carta: {
        ...prevState.carta,
        isSaveButtonDisabled: !condicao,
      } }));
  };

  render() {
    const { carta, tryunfo } = this.state; // desconstrução do estado para adicionar ao return

    return (
      <div>
        <h1 id="titulo">Tryunfo</h1>
        <Form
          { ...carta }
          tryunfo={ tryunfo }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSaveButton }
        />
        <Card { ...carta } />
      </div>
    );
  }
}

export default App;
