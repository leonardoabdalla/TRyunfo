import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
  // adicionando uma prop para cada item
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
    // criando formulário com as props e adicionando atributos a cada uma, sendo o valor= a prop especifica daquele campo e onChange comum para chamar na classe principal.
      <div id="form">
        <h2 id="subTitulo">Adicionar nova carta</h2>
        <form>

          <label htmlFor="name-input" className="forms">
            Nome....................
            <input
              data-testid="name-input"
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description-input" className="forms">
            Descrição.............
            <input
              data-testid="description-input"
              type="textArea"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1-input" className="forms">
            Attr1.....................
            <input
              data-testid="attr1-input"
              type="number"
              name="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr2-input" className="forms">
            Attr2.....................
            <input
              data-testid="attr2-input"
              type="number"
              name="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3-input" className="forms">
            Attr3.....................
            <input
              data-testid="attr3-input"
              type="number"
              name="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image-input" className="forms">
            Imagem................
            <input
              data-testid="image-input"
              type="text"
              name="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="rare-input" className="forms">
            Raridade..............
            <select
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input" className="forms">
            Trunfo..................
            {/* adicionando checkbox para marcar a carta que for um trunfo */}
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          {/* adicionando um botão salvar */}
          <button
            id="button"
            data-testid="save-button"
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            className="forms"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

// proptypes é a validação das props que já foram declaradas e aqui são verificadas para ter a certeza de que tudo foi digitado corretamente, é uma regra de lint.
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
