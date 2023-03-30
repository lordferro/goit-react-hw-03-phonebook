import { StyledContactsForm } from "./ContactsForm.styled";
import PropTypes from 'prop-types'

export const ContactsForm = ({ onSubmit }) => {

  return (
    <StyledContactsForm onSubmit={onSubmit}>
      <label htmlFor="name">
        Name
      </label>
        <input
          type="text"
        name="name"
        id='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required       
        />
      <label htmlFor="number">
        Number
      </label>
        <input
          type="tel"
        name="number"
        id='number'
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      <button type="submit">Add contact</button>
    </StyledContactsForm>
  );
};

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}