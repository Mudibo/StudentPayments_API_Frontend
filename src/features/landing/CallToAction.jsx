import './CallToAction.css';
import Button from '../../components/ui/Button';

export default function CallToAction() {
  return (
    <section className="cta">
      <h2>Ready to Transform Your School?</h2>
      <div className="cta-buttons">
        <Button text="Sign Up" />
        <Button text="Login" variant="outline" />
      </div>
    </section>
  );
}
