import React from 'react';
import moment from 'moment';
import { Container, Row, Col } from 'react-bootstrap';

function EventCard({ event, page }) {
  const { category, title, dateTime, photo_url, attendees, creatorName } = event;

  return (
    <Row>
      <Col sm={2}>
        <img src={photo_url} style={{ height: "200px", width: "200px" }} />
      </Col>
      <Col sm={10}>
        {category} | {moment(dateTime).fromNow()}
        <br />
        {
          page === "event" ?
            { title } :
            { title } | { creatorName } | { attendees }
        }
      </Col>
    </Row>
  )
};

export default EventCard;