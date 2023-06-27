import "./App.css";
//import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; */

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1a195c";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={ */}
        <TextForm
          mode={mode}
          heading="Enter the text to analyze below"
          showAlert={showAlert}
        />
        {/* }
            />
          </Routes> */}
      </div>
      {/*  </Router> */}
    </>
  );
}

export default App;

// Adding custom color theme
// text area bug remove
