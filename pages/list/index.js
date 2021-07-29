export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { uchiha: data },
  };
};

import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
const List = ({ uchiha }) => {
  return (
    <Container>
      <h2 className="page-heading">UCHIHA LIST</h2>
      <Row>
        {uchiha.map((uchiha) => (
          <Col md={4} key={uchiha.id}>
            <Link href={"/list/" + uchiha.id}>
              <a className="user-box">
                <h2>{uchiha.username}</h2>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default List;
