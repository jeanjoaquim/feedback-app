import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState } from "react";

export default function FeedbackForm({ handleAdd }) {

    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [disabled, setDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const handleTextChange = (e) => {

        if(text === "") {
            setDisabled(true);
            setMessage(null);
        } else if(text !== "" && text.trim().length <= 10) {
            setDisabled(true);
            setMessage("Must contain more than 10 characters");
        } else {
            setDisabled(false);
            setMessage(null);
        }

        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFeedback = {
            text: text,
            rating: rating,
        }

        handleAdd(newFeedback)
    }

    return(
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text} />
                    <Button type="submit" isDisabled={disabled}>Send</Button>
                </div>
            </form>

            {message && <div className="message">{message}</div>}

        </Card>
    )
}