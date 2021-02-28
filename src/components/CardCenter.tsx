import { Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/components/CardCenter.module.css';

export default function CardCenter(props) {
  const Icon = props.icon;

  return (
    <Container className={`${styles.container} `}>
      <Row className="p-2">
        <Col className="p-0 d-flex align-items-center">
          <Icon className="h2 mb-0 ml-2 text-white" />
        </Col>
        <Col className="text-center p-0 text-white">
          <h1 className="h2 mb-0">{props.title}</h1>
        </Col>
        <Col className="p-0"></Col>
      </Row>
      {props.children}
    </Container>
  );
}
