import PropTypes from 'prop-types';
import { Wrapper } from './ContactItem.styled';

export const ContactItem = ({
  contact: { name, number, id },
  onDeleteContact,
}) => {
  return (
    <Wrapper>
      <span>
        {name}: {number}
      </span>
      <button
        type="button"
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </Wrapper>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
