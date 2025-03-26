import { createContext, useState, useEffect } from "react"; 

const FeedbackContext = createContext();
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const FeedbackProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);

    const [feedback, setFeedback] = useState([])

    const deleteFeedback = async (id) => {
        if(window.confirm("Are you sure you want to delete it?")) {
            await fetch(`${API_URL}feedback/${id}`, {method: 'DELETE'})

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    useEffect(() => {
        fetchFeedback()
    }, [])

    const fetchFeedback = async() => {
        const response = await fetch(`${API_URL}feedback?_sort=id&_order=desc`)

        const data = await response.json();

        setFeedback(data);
        setIsLoading(false);
    }

    const updateFeedback = async(id, updItem) => {
        const response = await fetch(`${API_URL}feedback/${id}`, {
            method: "PUT",
            header: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()

        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...data} : item)))
    }

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedback = async(newFeedback) => {

        const response = await fetch(`${API_URL}feedback`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        })

        const data = await response.json()

        setFeedback([data, ...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return(
        <FeedbackContext.Provider value={{feedback, feedbackEdit, isLoading, deleteFeedback, addFeedback, editFeedback,  updateFeedback}}>
            {children}
        </FeedbackContext.Provider>
    )

}

export default FeedbackContext;