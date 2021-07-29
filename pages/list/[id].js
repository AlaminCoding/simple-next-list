export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  const paths = data.map((element) => {
    return {
      params: { id: element.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/` + id
  );
  const data = await response.json();

  return {
    props: { uchiha: data },
  };
};

import { Container } from "react-bootstrap";
const SingleList = ({ uchiha }) => {
  return (
    <>
      <h2 className="page-heading">Single Page</h2>
      <Container>
        <p className="text-center">{uchiha.name}</p>
      </Container>
    </>
  );
};

export default SingleList;
