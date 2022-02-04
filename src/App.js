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
        cardAttr1: '',
        cardAttr2: '',
        cardAttr3: '',
        cardImage: '',
        cardRare: '',
        cardTrunfo: false,
        // hasTrunfo,
        isSaveButtonDisabled: true,
      },
      cartas: [],
    };
    // aqui é bind da função handleChange, se essa função fosse uma arrow function não seria necessário um bind, contudo poderia afetar na performace
    this.handleChange = this.handleChange.bind(this);
  }

  handleSave() {
    const { cartas } = this.state;
    const { carta } = this.state;
    this.setState({ cartas: [...carta, cartas] });
  }

  // função os valores do estado através de name, poderia ser ID tb ou um valor único, mas para isso é desestruturado anteriormente
  handleChange(event) {
    const { target } = event;
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState((prevState) => ({
      carta: {
        ...prevState.carta,
        [name]: value,
      },
    }), () => {
      this.requisitosParaValidacao();
    });
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

    // if (condicao) {
    //   console.log('ok');
    //   console.log(carta);
    // }
  };

  render() {
    const { carta } = this.state;

    return (
      <div>
        <h1 id="titulo">Tryunfo</h1>
        <Form
          { ...carta }
          onInputChange={ this.handleChange }
          onSave={ this.handleSave }
        />
        <Card { ...carta } />
      </div>
    );
  }
}

export default App;
