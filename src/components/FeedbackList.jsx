import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {

    if(!feedback || feedback.length === 0) {
        <p>No feedback</p>
    }

    return(
        feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))
    )

}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackList;