import React from "react";
import Container from "../components/Container/Container";
import SocialFooter from "../components/SocialFooter/SocialFooter";
import Row from "../components/Row/Row";
// import Login from "../components/Login/Login";
import Col from "../components/Col/Col";
import Background from "../components/Background/Background";

function CodeCollector() {
  return (
    <>
    <Background backgroundColor="black"/>
      <Container>
        <Row>
        <Col size="lg-12">

          <h2 style={{marginTop:"100px", color: "white", textAlign:"center", }}>Code CodeCollector</h2>
        </Col>
          {/* <Col size="md-3"></Col> */}
        </Row>
        <Row>
            <Col size="md-2"></Col>
            {/* <Col size="md-10"> */}
        <iframe src="https://i.simmer.io/@Ky24/code-collection" style={{width:"740px", height:"400px", justifyContent: "center"}}></iframe>
            {/* </Col> */}
            <Col size="md-3"></Col>

        </Row>
      </Container>
      <SocialFooter />
    </>
  );
}

export default CodeCollector;