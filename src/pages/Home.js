import React from "react";
import { HomePage } from "../components/styled-components/Home.styled";
import { Container } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";

function Home() {
  const { theme } = useTheme();
  return (
    <HomePage theme={theme}>
      <div className="banner">
        <Container fluid="md">
          <h1 className="title display-1">React Projects</h1>
          <p className="description lead">
            Welcome to our ReactJS Demo Hub! Our website is a showcase of
            diverse demo projects meticulously crafted in ReactJS, offering a
            hands-on experience for developers and enthusiasts alike.
          </p>
          <p className="version">
            Current Version: {process.env.REACT_APP_VERSION}
          </p>
        </Container>
      </div>
      <div className="details container d-flex flex-column flex-md-row gap-3">
        <div className="text-center">
          <h6 className="display-6">Demo Application</h6>
          Explore our collection of captivating projects, each highlighting the
          versatility and capabilities of ReactJS. With every project, find a
          convenient Github link, granting you access to the codebase for deeper
          exploration and learning.
        </div>
        <div className="text-center">
          <h6 className="display-6">Demo Application</h6>
          Explore our collection of captivating projects, each highlighting the
          versatility and capabilities of ReactJS. With every project, find a
          convenient Github link, granting you access to the codebase for deeper
          exploration and learning.
        </div>
        <div className="text-center">
          <h6 className="display-6">Demo Application</h6>
          Explore our collection of captivating projects, each highlighting the
          versatility and capabilities of ReactJS. With every project, find a
          convenient Github link, granting you access to the codebase for deeper
          exploration and learning.
        </div>
      </div>
    </HomePage>
  );
}

export default Home;
