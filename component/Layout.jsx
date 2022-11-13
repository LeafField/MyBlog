import React from "react";
import styled from "styled-components";
import Head from "next/head";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>Leaf Field</title>
      </Head>
      <GlobalContainer>
        <Header />
        {children}
      </GlobalContainer>
    </>
  );
};

export default Layout;

const GlobalContainer = styled.div`
  margin: 0 auto;
  width: 1024px;
  background-color: #bce0bc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
