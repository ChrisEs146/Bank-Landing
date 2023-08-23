import { BILLING } from "../../Constants/Billing";
import "./Billing.css";
function Billing() {
  return (
    <section className="billing center-elem" id="billing">
      <div className="billing__img">
        <img src={BILLING.mainImage} alt="Transactions illustration" width="645" height="597" />
      </div>
      <header className="billing__header text-center">
        <h2 className="dynamic-h2">{BILLING.title}</h2>
        <p className="dynamic-p">{BILLING.content}</p>
        <div className="billing__stores">
          <img src={BILLING.appStore} alt="Apple store badge" />
          <img src={BILLING.googlePlay} alt="Google play badge" />
        </div>
      </header>
    </section>
  );
}
export default Billing;
