import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <li>
        <Link href="/pages/job" >
          Todo
        </Link>
      </li>
      <li>
        <Link href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link href="/pages/chat">
          Post
        </Link>
      </li>
      <li>
        <Link href="/pages/abot" >
          Product
        </Link>
      </li>
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: green;
`;


export default Header;
