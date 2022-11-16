import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

const Header = ({ isActive }) => {
  return (
    <Container isActive={isActive}>
      <Title>
        <Link href={`/`}>
          <img src="/Yoko's portoforio.png" />
        </Link>
        <Link href={`/`}>
          <h1>Leaf Field</h1>
        </Link>
      </Title>
      {isActive ? <p>active</p> : <p>noActive</p>}
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
  width: 1280px;
  height: 75px;
  position: fixed;
  transition: all 0.3s;
  background-color: white;
  ${(props) =>
    props.isActive ||
    css`
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0px 5px 49px 4px rgba(17, 17, 26, 0.18);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      border: 1px solid rgba(255, 255, 255, 0.18);
    `}
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
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -7px;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: black;
        transform: scale(0);
        transform-origin: center;
        transition: all 0.3s;
      }
      &:hover::after {
        transform: scale(1);
      }
    }
  }
`;
