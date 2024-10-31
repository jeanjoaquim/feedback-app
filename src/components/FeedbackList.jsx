import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

export default function FeedbackList({ feedback, handleDelete }) {

    if(!feedback || feedback.length === 0) {
        return <h5>No feedback yet</h5>
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {
                    feedback.map((item) => (
                        <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
                        </motion.div>
                    ))
                }
            </AnimatePresence>
        </div>
    )

    // return (
    //     <div className="feedback-list">
    //         {
    //             feedback.map((item) => (
    //                 <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    //             ))
    //         }
    //     </div>
    // )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}