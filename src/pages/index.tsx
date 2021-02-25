import { AiFillCalculator } from 'react-icons/ai';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <p>
          <AiFillCalculator />
          Calcular o lado em falta num triângulo retângulo - Teorema de
          Pitágoras
        </p>
      </header>
      <div>
        <section></section>
        <section></section>
      </div>
    </div>
  );
}
