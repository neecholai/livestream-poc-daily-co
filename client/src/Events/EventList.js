import React from 'react';
import EventCard from '../Shared/EventCard';
import { Card } from 'react-bootstrap';


function EventList({ events, creatorName }) {

  return (
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
  );
};

export default EventList;