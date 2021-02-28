import { Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import { FaCalculator } from 'react-icons/fa';
import CardCenter from '../components/CardCenter';
import styles from '../styles/pages/Desafio.module.css';

export default function Desafio() {
  return (
    <Container className={styles.container}>
      <NavBar />
      <CardCenter icon={FaCalculator} title="Desafio">
        <h1>123</h1>
      </CardCenter>
    </Container>
  );
}
