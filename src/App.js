import React, { useState } from "react";
import "./App.scss";

import Snowfall from "./components/Snowfall";
import WelcomeModal from "./components/WelcomeModal";
import GiftBoxes from "./components/GiftBoxes";

const App = () => {
  const [welcomeModal, setWelcomeModal] = useState(true);

  const hideWelcome = () => setWelcomeModal(false);

  return (
    <div className="App">
      <Snowfall />
      <div className="content">
        {welcomeModal && <WelcomeModal hideWelcome={hideWelcome} />}
        {!welcomeModal && <GiftBoxes />}
      </div>
    </div>
  );
};

export default App;
