import React from "react";
import { Banner } from "../styled-components/HomePageBanner.styled";
import { Container } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeContext";
import HomeMetadata from '../../metadata/Home.metadata.json';
import { Theme } from "../../constants/Constants";

function HomePageBanner() {
    const {theme} = useTheme();
  return (
    <Banner style={{"--banner-bg-color" : theme === Theme.DARK ? "#415a77" : "#bde0fe"}}>
      <Container fluid="md" className="text-center lead">
        <h1 className="display-1 text-body-emphasis">{HomeMetadata.title}</h1>
        <p className="text-body fs-4">{HomeMetadata.description}</p>
      </Container>
    </Banner>
  );
}

export default HomePageBanner;
