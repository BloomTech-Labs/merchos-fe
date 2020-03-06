import Link from "next/link";
import styled from "styled-components";

const Button =  styled.div`
  background-color: rgb(37, 37, 37);
  color: rgb(246, 248, 250);
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 0;
  height: 20rem;
  font-size: 1.2rem;
  list-style: none;
  width: 20%;
  overflow-y: scroll;
`;

const Label =  styled.span`
  font-size: 32px;
  text-transform: capitalize;
`;

const NavButton = props => (
  <Link href={props.path}>
    <Button>
      <Label>{props.label}</Label>
    </Button>
  </Link>
);

export default NavButton;