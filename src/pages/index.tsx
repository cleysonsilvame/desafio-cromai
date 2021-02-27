import { Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <Container>
      <NavBar />
      <Container className={styles.container}>
        <p>Hello world!</p>
        <p>Home</p>
      </Container>
    </Container>
  );
}
