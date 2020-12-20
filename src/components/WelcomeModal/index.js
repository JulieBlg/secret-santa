import React from "react";

const WelcomeModal = ({ hideWelcome }) => {
  return (
    <div className="welcome-modal">
      <div className="welcome-text">
        <p className="merry-christmas">Joyeux Noël Ocy !</p>
        <p className="text">
          Le père Noël est un petit filou, et il aime bien faire des cadeaux improbables... <br/>
          Du coup, il a décidé de te donner quelques explications sur cette boite mystère. <br/>
          Pourquoi faire ça ici, me diras-tu ? Il n'est pas impossible que l'écriture de ce bon vieux père Noël ne soit pas la plus lisible de toutes ... <br/>
        </p>
        <p>Prête à découvrir les secrets de Santa ?</p>
        <button onClick={hideWelcome}>🎁</button>
      </div>
    </div>
  );
};

export default WelcomeModal;
