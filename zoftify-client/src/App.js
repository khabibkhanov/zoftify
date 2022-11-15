
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Posts from "./components/posts";
import Header from "./components/navbar";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Posts />
    </div>
  );
};

export default App;