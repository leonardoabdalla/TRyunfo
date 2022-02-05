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
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        // hasTrunfo,
        isSaveButtonDisabled: true,
      },
      cartas: [],
    };
    // aqui é bind da função handleChange, se essa função fosse uma arrow function não seria necessário um bind, contudo poderia afetar na performace
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
    this.setState({ cartas: [carta, ...cartas],
      carta: {
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        // hasTrunfo,
        isSaveButtonDisabled: true,
      } });

    console.log(cartas);
  }

  requisitosParaValidacao = () => {
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

    this.setState((prevState) => ({
      carta: {
        ...prevState.carta,
        isSaveButtonDisabled: !condicao,
      } }));
  };

  render() {
    const { carta } = this.state;

    return (
      <div>
        <h1 id="titulo">Tryunfo</h1>
        <Form
          { ...carta }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSaveButton }
        />
        <Card { ...carta } />
      </div>
    );
  }
}

export default App;
