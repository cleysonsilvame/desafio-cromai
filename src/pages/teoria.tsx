import { Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import { FaHistory } from 'react-icons/fa';
import CardCenter from '../components/CardCenter';
import styles from '../styles/pages/Teoria.module.css';

export default function Teoria() {
  return (
    <Container className={styles.container}>
      <NavBar />
      <CardCenter icon={FaHistory} title="Teoria">
        <h1>123</h1>
      </CardCenter>
    </Container>
  );
}
