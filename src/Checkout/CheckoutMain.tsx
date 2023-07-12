import CheckoutHead from "./CheckoutHead";
import CheckoutBody from "./CheckoutBody";
import CheckoutFooter from "./CheckoutFooter";
import Question from "../assets/Question.svg";
import Back from "../assets/CaretCircleLeft.svg";
import "./Checkout_ALL_CSS.css";

function CheckoutMain() {
  return (
    <>
      <div className="ChekoutMain">
        <div className="MobIcon">
          <img src={Back} />
        </div>
        <div className="stickyScrollBar">
          <h2>tickete</h2>
          <div className="navBar">
            <img src={Question} />
            <h3>Help</h3>
          </div>
        </div>
        <div className="CheckoutSub">
          <CheckoutHead />
          <CheckoutBody />
        </div>
        <CheckoutFooter />
      </div>
    </>
  );
}

export default CheckoutMain;
