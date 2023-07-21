import React from "react";
import styled from "styled-components";

import backgroundImage from "./background.png";
import NotificationCard from "./Components/NotificationCard";
import SignInButton from "./Components/SignInButton";
import SignInButton2 from "./Components/SignInButton2";

export default function App() {
  return (
    <Wrapper>
      <Background src={backgroundImage} alt="background" />
      <Title>Conditional Rendering</Title>

      <SectionWrapper>
        <Description>The logical AND (&&) operator</Description>
        <NotificationCard />
      </SectionWrapper>

      <SectionWrapper>
        <Description>If...else statement</Description>
        <SignInButton />
      </SectionWrapper>

      <SectionWrapper>
        <Description>If...else statement</Description>
        <SignInButton2 />
      </SectionWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 150px 0;
  margin: 0 auto;
  display: grid;
  justify-items: center;
  gap: 40px;
`;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const SectionWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
`;

const Description = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 48px;
  color: #ffffff;
  text-align: center;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: 0px;
  z-index: -1;
`;
