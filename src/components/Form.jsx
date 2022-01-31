import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h2>Adicionar nova carta</h2>
        <form>
          <label htmlFor="name-input">
            Nome:
            <input type="text" data-testid="name-input" />
          </label>
          <label htmlFor="name-input">
            Descrição:
            <input type="text" data-testid="description-input" />
          </label>
          <label htmlFor="name-input">
            Primeiro atributo:
            <input type="number" data-testid="attr1-input" />
          </label>
          <label htmlFor="name-input">
            Segundo atributo:
            <input type="number" data-testid="attr2-input" />
          </label>
          <label htmlFor="name-input">
            Terceiro atributo:
            <input type="number" data-testid="attr3-input" />
          </label>
          <label htmlFor="name-input">
            Imagem:
            <input type="text" data-testid="image-input" />
          </label>
          <label htmlFor="name-input">
            <select data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="name-input">
            Super Trunfo:
            <input type="checkbox" data-testid="trunfo-input" />
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;

// ref: https://pt-br.reactjs.org/docs/forms.html
// ref: https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/select
// ref: https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input/checkbox
