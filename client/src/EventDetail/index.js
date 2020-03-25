import React, { useState, useEffect } from 'react';
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
};

const mockCreator = {
  id: 1,
  name: "Joe Smith",
  bio: "I am a really cool creator. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu convallis nisl. Vivamus sollicitudin dui ante, id sagittis nibh scelerisque vitae. Etiam faucibus nulla elit, at interdum turpis dictum a. Proin vestibulum, enim sed scelerisque rhoncus, lorem urna hendrerit erat, ut sodales nisi mi sed risus. Cras vehicula in odio.",
  monthlyPrice: 45,
  social: {
    twitter: "creatorhandle",
    instagram: "creatorighandle",
    website: "www.creator.com",
  },
  email: "email@email.com",
  photo_url: "https://i2.wp.com/www.msahq.org/wp-content/uploads/2016/12/default-avatar.png?ssl=1",
  events: [
    mockEvent,
    mockEvent2
  ]
};

function EventDetail() {
  const [event, setEvent] = useState(null);
  const [creator, setCreator] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const event = mockEvent;
    const creator = mockCreator;
    setEvent(event);
    setCreator(creator);
  }, [id]);

  return (
    <>
      {
        event && creator ?
          <Container className='d-flex flex-column justify-content-center align-items-center'>
            <EventDetailCard event={event} monthlyPrice={creator.monthlyPrice} />
            <hr />
            <CreatorDetailCard creator={creator} />
            <hr />
            <EventList events={creator.events} creatorName={creator.name} />
          </Container>
          :
          "Loading..."
      }
    </>
  );
};

export default EventDetail;