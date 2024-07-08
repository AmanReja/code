import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  const handelupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handellowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handelonChange = (event) => {
    console.log("up was clicked");
    setText(event.target.value);
  };

  const [theme, setTheme] = useState("light");
  const [text, setText] = useState("Enter your text here");
  return (
    <>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <center>
          <h1 className="heading">Enter your text here to analize below</h1>
          <div className="area-box">
            {" "}
            <textarea
              className="area"
              id=""
              value={text}
              onChange={handelonChange}
            ></textarea>
          </div>
        </center>
        <center className="button-center">
          {" "}
          <button onClick={handelupClick} className="buttonup">
            Convert to uppercase
          </button>
          <button onClick={handellowClick} className="buttonlow">
            Convert to lowarcase
          </button>
          <h1 className="heading word">Your word summary</h1>
          <p className="word para">
            {" "}
            {text.split(" ").length} words {text.length} characters
          </p>
        </center>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
