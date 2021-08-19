import './Filter.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    <p className="text">Find contacts by name</p>
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
