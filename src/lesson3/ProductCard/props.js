import PropTypes from 'prop-types';

export default {
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}