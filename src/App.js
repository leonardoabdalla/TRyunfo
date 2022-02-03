import React from 'react';
import Form from './components/Form';
import './index.css';
import Card from './components/Card';

class App extends React.Component {
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
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState((prevState) => ({
      carta: {
        ...prevState.carta,
        [name]: value,
      },
    }));
  }

  handleSave() {
    const { cartas } = this.state;
    const { carta } = this.state;
    this.state({ pessoas: [...carta, cartas] });
  }

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
