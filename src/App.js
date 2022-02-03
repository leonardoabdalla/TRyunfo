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
        isSaveButtonDisabled: false,
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
    this.state({ pessoas: [...this.state.cartas, this.state.carta] });
  }

  render() {
    return (
      <div>
        <h1 id="titulo">Tryunfo</h1>
        <Form { ...this.state.carta } onInputChange={ this.handleChange } />
        <Card { ...this.state.carta } />
      </div>
    );
  }
}

export default App;
