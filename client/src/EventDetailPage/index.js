import React from 'react';
import { useParams } from 'react-router-dom';
import EventDetailCard from './EventDetailCard';
import CreatorDetailCard from '../Shared/CreatorDetailCard';
import EventList from '../Shared/EventList';
import { Container } from 'react-bootstrap';


const mockEvent = {
  id: 1,
  title: "Event title",
  description: "Really cool event. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu convallis nisl. Vivamus sollicitudin dui ante, id sagittis nibh scelerisque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu convallis nisl.",
  price: 10,
  creatorId: 1,
  creatorName: "Creator Name",
  category: "yoga",
  dateTime: new Date(2020, 4, 3, 12, 0).toString(),
  photo_url: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  attendees: 10
}

// new Date(2020, 4, 1, 12, 0),

const mockEvent2 = {
  id: 2,
  title: "Another Cool Event",
  description: "Really cool event2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu convallis nisl. Vivamus sollicitudin dui ante, id sagittis nibh scelerisque vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu convallis nisl. Vivamus sollicitudin dui ante, id sagittis nibh scelerisque vitae.",
  price: 10,
  category: "workout",
  creatorId: 1,
  creatorName: "Creator Name",
  dateTime: new Date(2020, 4, 5, 12, 0).toString(),
  photo_url: "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  attendees: 2000
}



const mockCreator = {
  id: 1,
  name: "Joe Smith",
  bio: "I am a really cool creator. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu convallis nisl. Vivamus sollicitudin dui ante, id sagittis nibh scelerisque vitae. Etiam faucibus nulla elit, at interdum turpis dictum a. Proin vestibulum, enim sed scelerisque rhoncus, lorem urna hendrerit erat, ut sodales nisi mi sed risus. Cras vehicula in odio.",
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
    <Container className='d-flex flex-column justify-content-center align-items-center'>
      <EventDetailCard event={mockEvent} monthlyPrice={mockCreator.monthlyPrice} />
      <CreatorDetailCard creator={mockCreator} />
      <EventList events={mockCreator.events} creatorName={mockCreator.name} />
    </Container>
  );

};

export default EventDetailPage;