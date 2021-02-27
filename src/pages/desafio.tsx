import { Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import styles from '../styles/pages/Desafio.module.css';

export default function Desafio() {
  return (
    <Container className={styles.container}>
      <NavBar />
      <Container>
        <p>Hello world!</p>
        <p>desafio</p>
      </Container>
    </Container>
  );
}
