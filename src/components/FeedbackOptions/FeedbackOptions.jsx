import PropTypes from 'prop-types'
import { ButtonStyled } from './FeedbackOptStyled'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <section>
            {options.map((option) => 
            <ButtonStyled key={option} type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
            {/* style={{backgroundColor: idx === optionsBtn.idx? #0af0e8 : 'none',}} */}
            </ButtonStyled>
            )}
        </section>
    )
}

// const FeedbackOptions = (props) => {
//  const {onIncrGood, onIncrNeutral, onIncrBad} = props;

//  return (
//     <section>
//         {/* <h2>{title}</h2> */}
//         <button onClick={onIncrGood} className="FeedBtn">Good</button>
//         <button onClick={onIncrNeutral} className="FeedBtn">Neutral</button>
//         <button onClick={onIncrBad} className="FeedBtn">Bad</button>
//     </section>
//  )
// }

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}


export default FeedbackOptions