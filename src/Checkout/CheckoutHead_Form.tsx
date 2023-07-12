import "./Checkout_ALL_CSS.css";
import { CustomInputTags, Dividor } from "./GlobalComponents";
import Kiarna from "../assets/Klarna.svg";
import Shield from "../assets/ShieldCheckered.svg";
import HK from "../assets/hk.png";
import Visa from "../assets/Visa.svg";
import DownArrow from "../assets/Chevron.svg";
import Debit from "../assets/CreditCard.svg";

function CheckoutHead_Form() {
  return (
    <>
      <div className="Checkout_Form_Main">
        <div className="Heading">
          <h1>Confirm and Pay</h1>
        </div>

        <div className="MainForm">
          <div className="MainFormHeadings">
            <h2>Enter your details</h2>
            <h3>
              We'll be sending your tickets to the details below. Booking for a
              friend? Add their details.
            </h3>
          </div>
          <div className="MainFormInputs">
            <div className="TopForm">
              <CustomInputTags label={"Full Name"} />
              <CustomInputTags label={"Phone number"} leftIcon={HK} />
              <CustomInputTags label={"Full Name"} />
              <CustomInputTags label={"Full Name"} err={true} />
            </div>
          </div>
        </div>

        <div className="MainForm_Mob">
          <div className="MainFormHeadings">
            <h2>Additional information</h2>
            <h3>We need a few more details to complete your reservation.</h3>
          </div>
          <div className="MainFormInputs">
            <div className="TopForm">
              <CustomInputTags label={"Full Name"} />
              <CustomInputTags
                label={"dropdown"}
                rightIcon={DownArrow}
                rIcon={"DA"}
              />
            </div>
          </div>
        </div>

        <div className="MainFormLast">
          <div className="MainFormHeadings">
            <h2>Select your mode of payment</h2>
            <h3>Payments with Tickete are secure and encrypted.</h3>
          </div>
          <div className="CreditandDebit">
            <div className="Credit">
              <img src={Debit} />

              <h2>Credit & Debit Card</h2>
            </div>
            <div className="Credit_icon"></div>
          </div>
          <div className="MainFormInputs">
            <div className="TopForm">
              <CustomInputTags label={"Name on Card"} />
              <CustomInputTags
                label={"Card number"}
                rightIcon={Visa}
                rIcon={"VI"}
              />
              <CustomInputTags label={"Expiry Date"} />
              <CustomInputTags label={"CW/CVC"} />
            </div>
          </div>
        </div>

        <div className="KiarnaMain">
          <Dividor width={100} mt={4} />
          <div className="Kiarna_Part">
            <div className="textPart">
              <img src={Kiarna} />
              <label>Klarna</label>
            </div>
            <div className="circularIcon"></div>
          </div>
          <Dividor width={100} />
        </div>

        <div className="Confirm_and_Pay">
          <div className="FormTotalPrice">
            <h2>Total: {`<price>`}</h2>
            <h3>You will pay in {`<currency>`}</h3>
          </div>
          <div className="PaymentTips">
            <div></div>
            <label>
              Receive travel tips, suggestions and offers in {`<city>`} by email
            </label>
          </div>
          <div className="ConfirmNDPay">
            <p>
              With payment, you agree to the{" "}
              <a>general terms and conditions of Tickete</a> & the{" "}
              <a>activity provider</a>.
            </p>
            <button>
              <div>
                <label>Confirm an Pay</label>
                <img src={Shield} />
              </div>
            </button>
          </div>
        </div>

        <div className="Cancellation_Mob">
          <h2>Free cancellation</h2>
          <h3>Tickets can be cancelled by 13th December, 2022.</h3>
        </div>

        <div className="KiarnaMOB">
          <Dividor width={100} mt={4} />
          <div className="Kiarna_Part">
            <div className="textPart">
              <img src={Kiarna} />
              <label>Klarna</label>
            </div>
            <div className="circularIcon"></div>
          </div>
          <Dividor width={100} />
        </div>

        <div className="ConfirmAndPAY_Mob">
          <div className="Confirm_and_Pay">
            <div className="FormTotalPrice">
              <h2>Total: {`<price>`}</h2>
              <h3>You will pay in {`<currency>`}</h3>
            </div>
          </div>

          <div className="Cancellation_Mob">
            <h2>Free cancellation</h2>
            <h3>Tickets can be cancelled by 13th December, 2022.</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutHead_Form;
