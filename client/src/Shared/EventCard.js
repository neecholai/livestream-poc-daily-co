import React from 'react';
// import moment from 'moment';
import { Card, Container, Row, Col } from 'react-bootstrap';

function EventCard({ event, page }) {
  console.log("in the event card", { event })
  const { category, title, dateTime, photo_url, attendees, creatorName, ...rest } = event;

  console.log({ photo_url })

  return (
    <Card>
      <Container>
        <Card.Body>
          <Card.Text className=".d-flex justify-content-start">
            <Row>
              <Col sm={3}>
                <img src={photo_url} style={{ height: "150px", width: "150px" }} />
              </Col>
              <Col sm={7}>
                {category} | {dateTime}}<br />
                {title}
                {(page !== "event") && `| ${creatorName} | ${attendees} attendees`
                }
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Container>
    </Card>
  );
};

export default EventCard;