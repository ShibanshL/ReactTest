import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CheckoutMain from "./Checkout/CheckoutMain";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="APP">
        <CheckoutMain />
      </div>
    </>
  );
}

export default App;
