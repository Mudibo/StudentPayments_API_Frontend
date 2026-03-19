import './Button.css';

export default function Button({ text, variant = 'solid' }) {
  return (
    <button className={`btn btn-${variant}`}>{text}</button>
  );
}
