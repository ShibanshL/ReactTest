import React from "react";
import "./Checkout_ALL_CSS.css";
import Chat from "../assets/ChatsCircle.svg";

function Checkout_Chat_Modal() {
  return (
    <>
      <div className="Chat_Card">
        <div className="Top_Part">
          <div>
            <h2>Need help?</h2>
            <h3>We're here to help, 24*7</h3>
          </div>
          <img src={Chat} />
        </div>
        <div className="ButtonPart">
          <button>Chat with us</button>
        </div>
      </div>
    </>
  );
}

export default Checkout_Chat_Modal;
