import CheckoutFooter_Cards from "./CheckoutFooter_Cards";
import CheckoutFinal_Footer from "./CheckoutFinal_Footer";

function CheckoutFooter() {
  return (
    <>
      <div className="CheckoutFooter">
        <div className="CheckoutFooterSub">
          <CheckoutFooter_Cards />
        </div>
        <CheckoutFinal_Footer />
      </div>
    </>
  );
}

export default CheckoutFooter;
