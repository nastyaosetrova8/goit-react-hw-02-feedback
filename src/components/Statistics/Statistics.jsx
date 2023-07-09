import PropTypes from 'prop-types'

const Statistics = (props) => {
const {good, neutral, bad, total, positivePercentage} = props

return (
    <section>
        {/* <h2>{title}</h2> */}
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage} %</p>
    </section>
)
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired ,
}


export default Statistics;