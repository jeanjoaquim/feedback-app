import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import { FeedbackProvider } from './context/FeedbackContext';
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import AboutIconLink from './components/AboutIconLink';
import Post from './Post';
import AboutPage from './pages/AboutPage';

export default function App() {

    return (
        <FeedbackProvider>
            <Router>
                <Header text="Feedback UI" />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                            <>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </>
                        }></Route>

                        <Route path='/about' element={
                            <AboutPage/>
                        }></Route>
                        <Route path="/post/:id" element={
                            <Post/>
                        }></Route> 
                        {/* The route post is just an example using params */}
                    </Routes>

                    {/* styling active links
                    <Card>
                        <NavLink to='/' activeClassName='active'>
                            Home
                        </NavLink>
                        <NavLink to='/about' activeClassName='active'>
                            About
                        </NavLink>
                    </Card>*/}

                </div>
                <AboutIconLink />
            </Router>
        </FeedbackProvider>
    )
}