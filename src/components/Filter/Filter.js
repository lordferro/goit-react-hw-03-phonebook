import PropTypes from 'prop-types';
import { Wrapper } from './Filter.styled';

export const Filter = ({ filterQuery, onChange }) => {
  return (
    <Wrapper>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" id="filter" value={filterQuery} onChange={onChange} />
    </Wrapper>
  );
};

Filter.propTypes = {
  filterQuery: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
