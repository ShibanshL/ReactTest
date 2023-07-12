import React from "react";
import Checkout_FAQ from "./Checkout_FAQ";
import Checkout_Chat_Modal from "./Checkout_Chat_Modal";
import "./Checkout_ALL_CSS.css";
import { Dividor } from "./GlobalComponents";
import Plus from "../assets/Plus.svg";
import FAQ_Questions from "./FAQ.json";

function CheckoutBody() {
  return (
    <>
      <div className="CheckoutBody">
        <div className="Checkout_FAQ">
          <Checkout_FAQ />
        </div>
        <div className="Checkout_Chat_Modal">
          <div className="FAQ_Mob_Sec">
            <h2>Frequently Asked Questions</h2>
            <div className="FAQ_Card_Main">
              {FAQ_Questions.data.map((e: any) => {
                return (
                  <>
                    <div className="FAQ_Card">
                      <h2>{e.FAQ}</h2>
                      <img src={Plus} />
                    </div>
                    <Dividor width={100} mb={0} />
                  </>
                );
              })}
            </div>
          </div>
          <Checkout_Chat_Modal />
        </div>
      </div>
      <Dividor width={100} mt={5} />
    </>
  );
}

export default CheckoutBody;
