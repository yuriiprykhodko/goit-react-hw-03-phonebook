import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Form.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handelIncrementChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handelSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit} className="form">
        <label>
          <span>Name</span>
          <input
            id={uuidv4()}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            onChange={this.handelIncrementChange}
            required
          />
        </label>
        <label>
          <span>Number</span>
          <input
            id={uuidv4()}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            onChange={this.handelIncrementChange}
            required
          />
        </label>
        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
