import './Features.css';
import Card from '../../components/ui/Card';
import { FaUserGraduate, FaMoneyCheckAlt, FaComments } from 'react-icons/fa';

const features = [
  {
    icon: <FaUserGraduate size={40} color="#1976d2" />,
    title: 'Student Management',
    text: 'Easily manage student records, attendance, and performance.'
  },
  {
    icon: <FaMoneyCheckAlt size={40} color="#1976d2" />,
    title: 'Payments & Fees',
    text: 'Automate fee collection, track payments, and generate reports.'
  },
  {
    icon: <FaComments size={40} color="#1976d2" />,
    title: 'Communication',
    text: 'Connect teachers, students, and parents with instant messaging.'
  }
];

export default function Features() {
  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="features-cards">
        {features.map((feature, idx) => (
          <Card key={idx} icon={feature.icon} title={feature.title} text={feature.text} />
        ))}
      </div>
    </section>
  );
}
