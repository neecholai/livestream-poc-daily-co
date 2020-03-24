import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

function CreatorDetailCard({ creator }) {
  const { name, bio, twitter, instagram, website, email, photo_url } = creator;

  return (
    <Card className="my-4">
      <Container>
        <Card.Body>
          <Row>
            <Card.Title> About {name} </Card.Title>
          </Row>
          <Row>
            <Col sm={3}>
              <Card.Text>
                <img
                  src={photo_url}
                  style={{ height: "150px", width: "150px" }}
                  alt="default-user"
                />
              </Card.Text>
            </Col>
            <Col sm={7} className="d-flex flex-column justify-content-between">
              <Card.Text>{bio}</Card.Text>
              <Card.Text>
                {twitter && (
                  <a href={`https://www.twitter.com/${twitter}`} target="blank">
                    <i className="fab fa-twitter fa-2x fa-fw"></i>
                  </a>
                )}
                {instagram && (
                  <a href={`https://www.instagram.com/${instagram}`} target="blank">
                    <i className="fab fa-instagram fa-2x fa-fw"></i>
                  </a>
                )}
                {email && (
                  <a href={`mailto:${email}`}>
                    <i className="fas fa-envelope fa-2x fa-fw"></i>
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
