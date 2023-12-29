import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeMetadata from "../../metadata/Home.metadata.json";

const Feature = ({ classsName = '', title, paras }) => {
  return (
    <div className={`${classsName}`}>
      <h6 className="display-6">{title}</h6>
      {paras.map((para, index) => <p key={index}>{para}</p>)}
    </div>
  );
};

function HomePageFeatures() {
  return (
    <section className="my-3">
      <Container fluid="md">
        <Row className="gap-4">
          {HomeMetadata.features.map((feature, index) => (
            <Col md={true} key={`feature-${index}`}>
              <Feature title={feature.title} paras={feature.paragraps} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default HomePageFeatures;
