import React from "react";
import CardData from "./FAQ.json";
import Checked from "../assets/CircleWavyCheck.svg";
import Chat from "../assets/ChatsCircle.svg";
import Calander from "../assets/CalendarBlank1.svg";
import Shield from "../assets/ShieldCheckered1.svg";

function CheckoutFooter_Cards() {
  const cardIcon = (e: number) => {
    if (e == 1) {
      return Checked;
    }
    if (e == 2) {
      return Chat;
    }
    if (e == 3) {
      return Calander;
    }
    if (e == 4) {
      return Shield;
    }
  };

  return (
    <>
      <div className="footerCardsParent">
        <h2>The Tickete promise</h2>
        <div className="FooterCardsMain">
          {CardData.footerCards.map((e: any) => {
            return (
              <>
                <div className="FooterCardSub">
                  <div className="FooterCardTop">
                    <img src={cardIcon(e.id)} alt="" />
                  </div>
                  <div className="FooterCardBottom">
                    <label>{e.cardHeading}</label>
                    <p>{e.cardText}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="FooterCardsMain_Mob">
          {CardData.footerCards.map((e: any) => {
            return (
              <>
                <div className="FooterCard_Mob_sub">
                  <img src={cardIcon(e.id)} />
                  <div>
                    <label>{e.cardHeading}</label>
                    <p>{e.cardText}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CheckoutFooter_Cards;
