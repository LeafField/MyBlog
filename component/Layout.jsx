import React, { useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";

import Header from "./Header";
import { useEffect, useRef } from "react";

const Layout = ({ children }) => {
  const headerRef = useRef();
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsActive(false);
      } else {
        setIsActive(true);
      }
    });
    observer.observe(headerRef.current);
  }, []);

  return (
    <>
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
