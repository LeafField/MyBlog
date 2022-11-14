import React, { useState } from "react";
import styled from "styled-components";
import Head from "next/head";

import Header from "./Header";
import { useEffect, useRef } from "react";

const Layout = ({ children }) => {
  const headerRef = useRef();
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
    observer.observe(headerRef.current);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>Leaf Field</title>
      </Head>
      <GlobalContainer>
        <Header isActive={isActive} />
        <EmptyDiv ref={headerRef} />
        {children}
      </GlobalContainer>
    </>
  );
};

export default Layout;

const GlobalContainer = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyDiv = styled.div`
  width: auto;
  height: 75px;
`;
