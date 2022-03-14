import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <>
      <Container>
        <p> Styled Components</p>
        <button>FIGHT</button>
      </Container>
    </>
  );
};

const Container = styled.div`
  border: solid 2px yellow;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  aligh-items: center;
`;
