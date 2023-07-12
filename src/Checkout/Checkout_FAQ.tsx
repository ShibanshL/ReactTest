import "./Checkout_ALL_CSS.css";
import FAQdata from "../Checkout/FAQ.json";
import { Dividor } from "./GlobalComponents";
function Checkout_FAQ() {
  return (
    <>
      <div className="FAQ_Section">
        <h2>Frequently asked questions</h2>

        <div className="FAQ_Card">
          {FAQdata.data.map((e: any) => {
            return (
              <>
                <div className="FAQ_Question">
                  <h3>{e.FAQ}</h3>
                  <div></div>
                </div>
                <p>{e.Answer}</p>
                {e.id !== FAQdata.data.length ? <Dividor width={100} /> : null}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Checkout_FAQ;
