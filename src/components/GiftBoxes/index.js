import React, { useState } from "react";
import Modal from "react-modal";

import gifts from "../../assets/json/gifts.json";

const GiftBoxes = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentGift, setCurrentGift] = useState(gifts[0]);

  const toggleGiftModal = () => {
    setModalOpen(!modalOpen);
  };

  const openGiftModal = (index) => {
    setCurrentGift(gifts.find((gift) => gift.index === index));
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
          <h1>{currentGift.title}</h1>
          <img src={currentGift.img} alt={currentGift.index} />
          <p dangerouslySetInnerHTML={{ __html: currentGift.description }} />
          <button onClick={toggleGiftModal}>{currentGift.emoji}</button>
        </div>
      </Modal>
    </div>
  );
};

export default GiftBoxes;
