import React from "react";
import { Dividor } from "./GlobalComponents";
import Insta from "../assets/InstagramLogo.svg";
import FB from "../assets/FacebookLogo.svg";
import Twitter from "../assets/TwitterLogo.svg";

function CheckoutFinal_Footer() {
  return (
    <>
      <div className="CheckoutFinalFooter">
        <div className="CheckoutFinalFilterSub">
          <h1>tickete</h1>
          <div className="Divide">
            <Dividor width={100} />
          </div>
          <div className="FinalPart">
            <div className="ExternalLinks">
              <label>© Tickete Inc.</label>
              <div></div>
              <label>Privacy</label>
              <div></div>
              <label>Terms</label>
              <div></div>
              <label>Cancellation policy</label>
            </div>
            <div className="ICONS">
              <img src={Insta} alt="err405" />
              <img src={FB} alt="err405" />
              <img src={Twitter} alt="err405" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutFinal_Footer;
