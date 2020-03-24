import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import * as moment from "moment";

function EventCard({ event, page }) {
  const {
    category,
    title,
    dateTime,
    photo_url,
    attendees,
    creatorName,
    ...rest
  } = event;

  return (
    <Card>
      <Container>
        <Card.Body>
          <Row className=".d-flex justify-content-start">
            <Col xs={12} sm={5} md={4} lg={3}>
              <Card.Text>
                <img
                  src={photo_url}
                  style={{ height: "150px", width: "150px" }}
                  alt="default-event"
                />
              </Card.Text>
            </Col>
            <Col xs={12} sm={7} md={8} lg={9}>
              <Card.Text>
                {category} |{" "}
                {moment()
                  .startOf(dateTime)
                  .fromNow()}
              </Card.Text>
              <Card.Text>
                <b>{title}</b>
              </Card.Text>
              {page !== "event" && `| ${creatorName} | ${attendees} attending`}
            </Col>
          </Row>
        </Card.Body>
      </Container>
    </Card>
  );
}

export default EventCard;
