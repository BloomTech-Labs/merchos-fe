import Link from "next/link";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding-top: 2%;

  height: 15rem;
  list-style: none;

  // width: 13%;

  background: #f3f3ff;
`;
const Button = styled.button`
  width: 125px;
  height: 50px;

  background: #f3f3ff;
  box-shadow: -2px -2px 6px 2px #fff, 2px 2px 6px 2px #787878;
  border-radius: 55px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  color: #000000;
  cursor: pointer;
`;

const Label = styled.span`
  font-family: "'Roboto', sans-serif";
  font-size: 2.5rem;
  text-transform: capitalize;
`;

const SideNav = props => (
  <Link href={props.path}>
    <Container>
      <Button>
        <Label>{props.label}</Label>
      </Button>
    </Container>
  </Link>
);

export default SideNav;
