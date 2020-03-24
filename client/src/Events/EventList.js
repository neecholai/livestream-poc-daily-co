import React from 'react';
import EventCard from '../Shared/EventCard';
import { Container, Row, Col } from 'react-bootstrap';


function EventList({ events, creatorName }) {

  console.log({ events })
  return (
    <Container>
      <Row>
        <Col>
          Other Upcoming Content from {creatorName}
        </Col>
      </Row>
      {
        events.map(event => <EventCard key={event.id} event={event} page="event" />)
      }
    </Container>
  );
};

export default EventList;