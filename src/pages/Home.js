import React from "react";
import { HomePageBanner } from "../components/styled-components/Home.styled";
import { Container } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";

function Home() {
  const { theme } = useTheme();
  return (
    <HomePageBanner theme={theme}>
      <Container fluid="md">
        <h1 className="title display-1">React Projects</h1>
        <p className="description lead">
          Welcome to our ReactJS Demo Hub! Our website is a showcase of diverse
          demo projects meticulously crafted in ReactJS, offering a hands-on
          experience for developers and enthusiasts alike.
        </p>
        <p className="version">
          Current Version: {process.env.REACT_APP_VERSION}
        </p>
      </Container>
    </HomePageBanner>
  );
}

export default Home;
