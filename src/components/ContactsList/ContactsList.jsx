import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { StyledContactsList } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <StyledContactsList>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <ContactItem
                contact={contact}
                onDeleteContact={onDeleteContact}
              />
            </li>
          );
        })}
      </StyledContactsList>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
