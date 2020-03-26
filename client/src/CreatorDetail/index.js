import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CreatorDetailCard from '../Shared/CreatorDetailCard';
import EventList from '../Shared/EventList';
import { Container, Jumbotron } from 'react-bootstrap';
import CreatorSignUp from './CreatorSignUp';
import './CreatorDetail.scss';

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
}



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
}

function CreatorDetail() {
  const [creator, setCreator] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const creator = mockCreator;
    setCreator(creator);
  }, [id]);

  return (
    <Container className='CreatorDetail' >
      {creator.name ?
        (<><Jumbotron className="col-lg-8 header" >
          <h1>{creator.name}</h1>
          <CreatorSignUp creator={creator} />
        </Jumbotron >
          <CreatorDetailCard creator={creator} />
          <EventList events={creator.events} creatorName={creator.name} page="Creator" /></>)
        :
        "Loading..."
      }
    </Container >
  );
};

export default CreatorDetail;