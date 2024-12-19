import React from "react";
import "./popup.css";


/* global chrome */
const Popup = () => {
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
    <div className="popup-container">
      <h2>LinkedIn Connector</h2>
      <button className="popup-button" onClick={handleClick}>
        Connect with All
      </button>
    </div>
  );
};

export default Popup;
