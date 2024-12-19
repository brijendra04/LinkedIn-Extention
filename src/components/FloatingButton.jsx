import React from "react";
import "../styles/button.css";


/* global chrome */
const FloatingButton = () => {
  const handleClick = () => {
    chrome.runtime.sendMessage({ action: "connectWithAll" }, (response) => {
      if (chrome.runtime.lastError) {
        console.error("Error sending message:", chrome.runtime.lastError);
      } else {
        console.log("Response from content script:", response);
      }
    });
  };

  return (
    <button className="floating-button" onClick={handleClick}>
      Connect with All
    </button>
  );
};

export default FloatingButton;
