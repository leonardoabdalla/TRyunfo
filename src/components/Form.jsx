import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      save,
    } = this.props;
    return (
      <div>
        <h2>Adicionar nova carta</h2>
        <form>
          <label htmlFor="name-input">
            Nome:
            <input type="text" value={ name } data-testid="name-input" />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <input type="text" value={ description } data-testid="description-input" />
          </label>
          <label htmlFor="attr1-input">
            Primeiro atributo:
            <input type="number" value={ attr1 } data-testid="attr1-input" />
          </label>
          <label htmlFor="attr2-input">
            Segundo atributo:
            <input type="number" value={ attr2 } data-testid="attr2-input" />
          </label>
          <label htmlFor="attr3-input">
            Terceiro atributo:
            <input type="number" value={ attr3 } data-testid="attr3-input" />
          </label>
          <label htmlFor="image-input">
            Imagem:
            <input type="text" value={ image } data-testid="image-input" />
          </label>
          <label htmlFor="rare-input">
            <select value={ rare } data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            Super Trunfo:
            <input type="checkbox" value={ trunfo } data-testid="trunfo-input" />
          </label>
          <button type="submit" value={ save } data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attr1: PropTypes.string.isRequired,
  attr2: PropTypes.string.isRequired,
  attr3: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rare: PropTypes.string.isRequired,
  trunfo: PropTypes.bool.isRequired,
  save: PropTypes.func.isRequired,
};

// ref: https://pt-br.reactjs.org/docs/forms.html
// ref: https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select
// ref: https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input/checkbox
