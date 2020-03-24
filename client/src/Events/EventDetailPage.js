import React from 'react';
import { useParams } from 'react-router-dom';
import EventDetailCard from './EventDetailCard';
import CreatorDetailCard from './CreatorDetailCard';
import EventList from './EventList';
import { Container } from 'react-bootstrap';


const mockEvent = {
  id: 1,
  title: "Event title",
  description: "Really cool event",
  price: 10,
  creatorId: 1,
  creatorName: "Creator Name",
  category: "yoga",
  dateTime: new Date(2020, 4, 1, 12, 0).toString(),
  photo_url: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  attendees: 10
}

// new Date(2020, 4, 1, 12, 0),

const mockEvent2 = {
  id: 2,
  title: "Event title2",
  description: "Really cool event2",
  price: 10,
  category: "workout",
  creatorId: 1,
  creatorName: "Creator Name",
  dateTime: new Date(2020, 4, 1, 12, 0).toString(),
  photo_url: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  attendees: 2000
}

const mockCreater = {
  id: 1,
  name: "Creator Name",
  bio: "I am a really cool creator",
  monthlyPrice: 45,
  twitter: "creatorhandle",
  instagram: "creatorighandle",
  website: "www.creator.com",
  email: "email@email.com",
  photo_url: "https://i2.wp.com/www.msahq.org/wp-content/uploads/2016/12/default-avatar.png?ssl=1",
  events: [
    mockEvent,
    mockEvent2
  ]
}

function EventDetailPage() {
  // NOTE: Implement params ID once we have routes and data.
  const { id } = useParams();

  return (
    <Container>
      <EventDetailCard event={mockEvent} monthlyPrice={mockCreater.monthlyPrice} />
      {<CreatorDetailCard creator={mockCreater} />}
      {<EventList events={mockCreater.events} creatorName={mockCreater.name} />}
    </Container>
  );

};

export default EventDetailPage;