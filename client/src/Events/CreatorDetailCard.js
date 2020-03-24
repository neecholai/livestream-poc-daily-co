import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function CreatorDetailCard({ creator }) {
  const { name, bio, twitter, instagram, website, email, photo_url } = creator;

  return (
    <Card >
      <Container>
        <Card.Body>
          <Row>
            <Card.Title> About {name} </Card.Title>
          </Row>
          <Card.Text className=".d-flex justify-content-start">
            <Row>
              <Col sm={3}>
                <img src={photo_url} style={{ height: "150px", width: "150px" }} />
              </Col>
              <Col sm={7}>
                <div className='align-items-between'> {bio}</div>
                {[
                  twitter && <a class="fab fa-twitter" href={`www.twitter.com/${twitter}`} target="blank"></a>,
                  instagram && <a class="fab fa-instagram" href={`www.instagram.com/${instagram}`} target="blank"></a>,
                  email && <i class="fas fa-envelope" href={`mailto:${email}`}></i>,
                  website && <a href={website}> {website}</a>
                ]}
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Container>
    </Card>
  );
};

export default CreatorDetailCard;