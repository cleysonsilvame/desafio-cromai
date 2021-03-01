import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { FaCalculator, FaCaretRight } from 'react-icons/fa';
import CardCenter from '../components/CardCenter';
import NavBar from '../components/NavBar';
import styles from '../styles/pages/Desafio.module.css';

export default function Desafio() {
  const [hypotenuse, setHypotenuse] = useState(null);
  const [side1, setSide1] = useState(4);
  const [side2, setSide2] = useState(3);

  function handleCaculate(e: FormEvent) {
    e.preventDefault();

    const sumOfSides = Math.pow(side2, 2) + Math.pow(side1, 2);

    const squareRootOfTheHypotenuse = Math.sqrt(sumOfSides);

    setHypotenuse(squareRootOfTheHypotenuse);
  }

  return (
    <Container className={styles.container}>
      <NavBar />
      <CardCenter icon={FaCalculator} title="Desafio">
        <Form
          onSubmit={handleCaculate}
          className={`m-4 p-3 justify-content-center align-items-center`}
        >
          <Row className={`m-4 p-3 justify-content-center`}>
            <Row>
              <Col
                className={`d-flex align-items-center justify-content-end p-0 ${styles.colInputCateto1}`}
              >
                <input
                  type="number"
                  className="form-control text-center"
                  onChange={(e) => {
                    setSide2(Number(e.target.value));
                  }}
                  value={side2}
                />
              </Col>
              <Col
                className={`d-flex align-items-center p-0 ${styles.colInputHipotenusa}`}
              >
                <Image
                  src="/triangle.svg"
                  alt="Triângulo para calcular"
                  width={343}
                  height={200}
                />
              </Col>
              <Col className="d-flex align-items-center p-0">
                <input
                  type="number"
                  className="form-control text-center"
                  onChange={(e) => {
                    setHypotenuse(Number(e.target.value));
                  }}
                  value={hypotenuse}
                />
              </Col>
            </Row>
            <Row
              className={`p-0 justify-content-center ${styles.colInputHipotenusa}`}
            >
              <input
                type="number"
                className="form-control text-center"
                onChange={(e) => {
                  setSide1(Number(e.target.value));
                }}
                value={side1}
              />
            </Row>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Button
              variant="success"
              type="submit"
              className="d-flex align-items-center justify-content-center"
            >
              Calcular <FaCaretRight />
            </Button>
          </Row>
        </Form>
      </CardCenter>
    </Container>
  );
}
