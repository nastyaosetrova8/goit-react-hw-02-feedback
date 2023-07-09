import PropTypes from 'prop-types'

const Notification = ({message}) => {
    return (
        <section>
            <p>{message}</p>
        </section>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}

export default Notification;
