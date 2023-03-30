import { Component } from 'react';
import { ContactsForm } from './ContactForm/ContactsForm';
import shortid from 'shortid';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import 'index.css';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: shortid.generate(),
      name: e.target.name.value,
      number: e.target.number.value,
    };

    const normalizedName = newContact.name.toLowerCase();

    if (this.checkDobleName(normalizedName)) {
      return alert(`${e.target.name.value} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
    e.target.name.value = '';
    e.target.number.value = '';
  };

  checkDobleName = name =>
    this.state.contacts.find(contact => contact.name.toLowerCase() === name);

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDelete = id => {
    return this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filterQuery={this.state.filter} onChange={this.handleFilter} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={this.handleDelete}
        />
      </Wrapper>
    );
  }
}
