import React, { useState } from "react";
import Modal from "react-modal";

import gifts from "../../assets/json/gifts.json";

const GiftBoxes = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(gifts[0]);

  const toggleGiftModal = () => {
    setModalOpen(!modalOpen);
  };

  const openGiftModal = (index) => {
    setCurrentProduct(gifts.find((gift) => gift.index === index));
    toggleGiftModal();
  };

  return (
    <div className="giftboxes">
      {gifts.map((gift) => (
        <div
          className="giftbox"
          onClick={() => openGiftModal(gift.index)}
          key={gift.index}
        >
          {gift.index}
        </div>
      ))}
      <Modal
        isOpen={modalOpen}
        onRequestClose={toggleGiftModal}
        ariaHideApp={false}
        className="giftModal"
      >
        <div className="modal_content">
          <h1>{currentProduct.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: currentProduct.description }} />
          <button onClick={toggleGiftModal}>Fermer</button>
        </div>
      </Modal>
    </div>
  );
};

export default GiftBoxes;
