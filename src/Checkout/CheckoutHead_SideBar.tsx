import Image1 from "../assets/motherSon.png";
import Ticket from "../assets/Ticket.svg";
import Clock from "../assets/Clock.svg";
import Calander from "../assets/CalendarBlank.svg";
import Tag from "../assets/Tag.svg";
import { Dividor } from "./GlobalComponents";
import CheckoutHead_Form from "./CheckoutHead_Form";

function CheckoutHead_SideBar() {
  return (
    <>
      <div className="Heading_Mob">
        <h1>Confirm and Pay</h1>
      </div>
      <img src={Image1} />
      <h2>
        Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk House
      </h2>
      <div className="IconPointers">
        <div>
          <img src={Ticket} alt="" />
          <label>{`<Varient Name>`}</label>
        </div>
        <div>
          <img src={Calander} alt="" />
          <label>{`<date>`}</label>
        </div>
        <div>
          <img src={Clock} alt="" />
          <label>{`<time>`}</label>
        </div>
      </div>
      <Dividor width={100} />
      <div className="TicketOverview">
        <h2>Ticket OverView</h2>
        <div className="TicketData">
          <div>
            <p>{`<pax type>`}</p>
            <p>{`<price>`}</p>
          </div>
          <div>
            <p>{`<pax type>`}</p>
            <p>{`<price>`}</p>
          </div>
          <div>
            <p>{`<fee>`}</p>
            <p>{`<price>`}</p>
          </div>
          <div>
            <p>{`<discount applied>`}</p>
            <p>{`<price>`}</p>
          </div>
        </div>
      </div>
      <Dividor width={100} mt={2} mb={2} />
      <div className="promoCode">
        <img src={Tag} />
        <a href="#">Have a promo code?</a>
      </div>
      <Dividor width={100} mt={2} mb={2} />
      <div className="Total">
        <div>
          <h2>Total</h2>
          <a href="#">You'll pay in {`<currency>`}</a>
        </div>
        <h3>{`<price>`}</h3>
      </div>
      <div className="Cancellation">
        <h2>Free cancellation</h2>
        <h3>Cancel before {`<date>`} for a full refund</h3>
      </div>
      <Dividor width={100} />
      <div className="Checkout_Mob_Form">
        <CheckoutHead_Form />
      </div>
    </>
  );
}

export default CheckoutHead_SideBar;
