import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
//import Post from "./components/Post";
import AboutPage from "./pages/AboutPage";
import FeedbackData from "./data/FeedbackData";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import AboutIconLink from "./components/AboutIconLink";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";

import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/post/*" element={<Post />} /> */}
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
