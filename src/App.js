import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from './components/FeedbackStats';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';

export default function App() {

    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete it?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {

        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])

    }

    return (
        <Router>
            <Header text="Feedback UI" />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                        <>
                            <FeedbackForm handleAdd={addFeedback}/>
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                        </>
                    }></Route>

                    <Route path='/about' element={
                        <AboutPage/>
                    }></Route>
                </Routes>
            </div>
            <AboutIconLink />
        </Router>
    )
}