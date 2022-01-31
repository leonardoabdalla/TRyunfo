import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <h2>Adicionar nova carta</h2>
        <form>
          <label htmlFor="name-input">
            Nome:
            <input
              type="text"
              value={ cardName }
              onChange={ onInputChange }
              data-testid="name-input"
            />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <input
              type="textArea"
              value={ cardDescription }
              onChange={ onInputChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="attr1-input">
            Primeiro atributo:
            <input
              type="number"
              onChange={ onInputChange }
              value={ cardAttr1 }
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="attr2-input">
            Segundo atributo:
            <input
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="attr3-input">
            Terceiro atributo:
            <input
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="image-input">
            Imagem:
            <input
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
              data-testid="image-input"
            />
          </label>
          <label htmlFor="rare-input">
            <select
              value={ cardRare }
              onChange={ onInputChange }
              data-testid="rare-input"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            Super Trunfo:
            <input
              type="checkbox"
              value={ cardTrunfo }
              onChange={ onInputChange }
              data-testid="trunfo-input"
            />
          </label>
          <button
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

// ref: https://pt-br.reactjs.org/docs/forms.html
// ref: https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select
// ref: https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input/checkbox
