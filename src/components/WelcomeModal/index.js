import React from "react";

const WelcomeModal = ({ hideWelcome }) => {
  return (
    <div className="welcome-modal">
      <div className="welcome-text">
        <p className="merry-christmas">Joyeux Noël Ocy !</p>
        <p className="text">
          Pour t'éviter un déchiffrage compliqué de son écriture en
          hiéroglyphes, ton Père Noël préféré t'as préparé une carte de Noël un
          peu particulière ...
        </p>
        <p>Prête à découvrir les secrets de Santa ?</p>
        <button onClick={hideWelcome}>🎁</button>
      </div>
    </div>
  );
};

export default WelcomeModal;
