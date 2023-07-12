import PropTypes from 'prop-types';
import { ButtonStyled } from './FeedbackOptStyled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <section>
      {options.map(option => (
        <ButtonStyled
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </ButtonStyled>
      ))}
    </section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
