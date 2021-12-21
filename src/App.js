import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
//import Post from "./components/Post";
import AboutPage from "./pages/AboutPage";

import FeedbackList from "./Components/FeedbackList";
import FeedbackForm from "./Components/FeedbackForm";
import AboutIconLink from "./Components/AboutIconLink";
import FeedbackStats from "./Components/FeedbackStats";
import Header from "./Components/Header";
import { FeedbackProvider } from "./context/feedbackContext";

import React from "react";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/post/*" element={<Post />} /> */}
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
