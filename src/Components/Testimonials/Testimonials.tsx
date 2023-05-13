import { FEEDBACK } from "../../Constants/Feedback";
import { quotes } from "../../assets";
import "./Testimonials.css";
function Testimonials() {
  return (
    <section className="testimonials">
      <header className="testimonials__header text-center">
        <h2 className="dynamic-h2">{FEEDBACK.title}</h2>
        <p className="dynamic-p">{FEEDBACK.content}</p>
      </header>
      <div className="testimonials__feedback">
        <ul className="testimonials__reviews">
          {FEEDBACK.reviews.map((review) => (
            <li className="testimonials__review" key={review.id}>
              <img className="testimonials__quotes" src={quotes} alt="double quotes" />
              <p>{review.content}</p>
              <div className="testimonials__user-container">
                <img
                  className="testimonials__user-img"
                  src={review.img}
                  alt={`${review.name}'s picture`}
                  title={review.name}
                />
                <div className="testimonials__user-info">
                  <span>{review.name}</span>
                  <span>{review.title}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="testimonials__clients">
        {FEEDBACK.clients.map((client) => (
          <img key={client.id} src={client.img} alt="Client logo" />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
