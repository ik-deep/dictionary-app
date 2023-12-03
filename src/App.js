import React from "react";
import SearchBar from "./components/SearchBar";
import WordDetails from "./components/WordDetails";
import SearchHistory from "./components/SearchHistory"; // Import SearchHistory component
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-header">
            <h2>Dictionary App</h2>
            <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search-history">Search History</Link>
          </li>
        </ul>
        </nav>
       
        <SearchBar />
        <Routes>
          {/* <Route exact path="/" element={<SearchBar />}></Route> */}
          <Route exact path="/" element={<WordDetails />}></Route>
          <Route
            exact
            path="/search-history"
            element={<SearchHistory />}
          ></Route>
        </Routes>
      </div>
    </Router>
    // <div>
    //   <h1>Dictionary App</h1>
    //   <SearchBar />
    //   <WordDetails />
    //   <SearchHistory /> {/* Include SearchHistory component */}
    // </div>
  );
}

export default App;
