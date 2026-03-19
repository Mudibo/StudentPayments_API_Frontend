import './Testimonials.css';

const testimonials = [
  {
    name: 'Jane Doe',
    text: 'SchoolManager has revolutionized our administration. The payment system is seamless and communication is instant!'
  },
  {
    name: 'John Smith',
    text: 'The features are mind-blowing. Our staff and parents love the new platform.'
  },
  {
    name: 'Mary Johnson',
    text: 'Easy to use, beautiful design, and reliable. Highly recommended for any school.'
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonials-list">
        {testimonials.map((t, idx) => (
          <div className="testimonial" key={idx}>
            <div className="testimonial-text">"{t.text}"</div>
            <div className="testimonial-name">- {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
