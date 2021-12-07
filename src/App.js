import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header';
import React from 'react';
import { useState } from 'react'

function App() {
    const [feedback, setFeedback] = useState()

    return(
        <>
        <Header />
        <div className="container">
            <FeedbackList  feedback={feedback} />
        </div>
        </>
    )
}



export default App;