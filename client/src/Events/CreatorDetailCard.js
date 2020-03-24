import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./CreatorDetailCard.scss";

function CreatorDetailCard({ creator }) {
  const { name, bio, twitter, instagram, website, email, photo_url } = creator;

  return (
    <Card className="my-2 col-lg-8">
      <Container>
        <Card.Body>
          <Row className="text-justify-xs">
            <Card.Title> About {name} </Card.Title>
          </Row>
          <Row>
            <Col xs={12} sm={4} md={3} className="my-2 text-justify-xs">
              <Card.Text>
                <img
                  src={photo_url}
                  style={{ height: "125px", width: "125px" }}
                  alt="default-user"
                />
              </Card.Text>
            </Col>
            <Col
              sm={8}
              md={9}
              className="d-flex flex-column justify-content-between"
            >
              <Card.Text>{bio}</Card.Text>
              <Card.Text>
                {twitter && (
                  <a href={`www.twitter.com/${twitter}`} target="blank">
                    <i className="fab fa-twitter fa-lg fa-fw"></i>
                  </a>
                )}
                {instagram && (
                  <a href={`www.instagram.com/${instagram}`} target="blank">
                    <i className="fab fa-instagram fa-lg fa-fw"></i>
                  </a>
                )}
                {email && (
                  <a href={`mailto:${email}`}>
                    <i className="fas fa-envelope fa-lg fa-fw"></i>
                  </a>
                )}
                {website && <a href={website}> {website}</a>}
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Container>
    </Card>
  );
}

export default CreatorDetailCard;
