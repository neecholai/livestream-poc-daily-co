import React from 'react';
import EventCard from '../Shared/EventCard';
import { Card, Container, Row, Col } from 'react-bootstrap';


function EventList({ events, creatorName }) {

  console.log({ events })
  return (
    <Container>
      <Card className="my-4">
        <Card.Body>
          <Card.Title>
            Other Upcoming Content from {creatorName}
          </Card.Title>
          {
            events.map(event => <EventCard key={event.id} event={event} page="event" />)
          }
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventList;