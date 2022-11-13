import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Title>
        <Link href={`/`}>
          <img src="/Yoko's portoforio.png" />
        </Link>
        <Link href={`/`}>
          <h1>Leaf Field</h1>
        </Link>
      </Title>
      <Nav>
        <ul>
          <li>portfolio</li>
          <li>
            <Link href={`/page/1`}>blog</Link>
          </li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </Nav>
    </Container>
  );
};

export default Header;

const Title = styled.div`
  display: flex;

  img {
    width: 75px;
    height: 75px;
    object-fit: fill;
  }

  h1 {
    margin-left: 15px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Nav = styled.nav`
  width: 400px;
  margin-right: 40px;
  margin-top: 20px;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    li {
      list-style: none;
      color: white;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -7px;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: black;
      }
    }
  }
`;
