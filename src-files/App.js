import React, { useState } from "react";
import "./App.css";
import PopupPage from "./Popuppage";
import Navbar from "./Navbar";
import BodyPart from "./BodyPart";
import Footer from "./Footer";

function App() {
  const [Popup, setPopup] = useState(false);
  const startPopup = () => {
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <div className="App">
      <div className="leftFloat">
        <Navbar />
        <BodyPart />
        <Footer />
      </div>
      <div className="rightFloat" id="Right">
        <nav className="navbar">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#" onClick={startPopup}>
                Contacts
              </a>
            </li>
          </ul>
        </nav>

        <div className="photoContainer">
          <h3>Type here</h3>
          <p>lorem ipsum is simply a dummy text firld to fill content of the websites.</p>
          <button>change</button>
        </div>
      </div>
      {Popup && <PopupPage onClose={closePopup} />}
    </div>
  );
}

export default App;