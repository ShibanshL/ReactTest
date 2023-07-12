import React from "react";
import CheckoutHead_Form from "./CheckoutHead_Form";
import CheckoutHead_SideBar from "./CheckoutHead_SideBar";
import "./Checkout_ALL_CSS.css";
import { Dividor } from "./GlobalComponents";

function CheckoutHead() {
  return (
    <>
      <div className="CheckoutHead">
        <div className="Checkout_Form">
          <CheckoutHead_Form />
        </div>
        <div className="CheckoutHead_SideBar">
          <CheckoutHead_SideBar />
        </div>
      </div>
      <Dividor width={100} />
    </>
  );
}

export default CheckoutHead;
