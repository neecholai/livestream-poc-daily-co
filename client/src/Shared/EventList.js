import React from "react";
import EventCard from "./EventCard";

function EventList({ events, creatorName }) {
  return (
    <div className="my-2 col-lg-8">
      <h4>Other Upcoming Content from {creatorName}</h4>
      {events.length > 0 ? (
        <ul className="list-unstyled ">
          {events.map(event => (
            <EventCard key={event.id} event={event} page="event" />
          ))}
        </ul>
      ) : (
        <h5>{creatorName} does not currently have any upcoming events.</h5>
      )}
    </div>
  );
}

export default EventList;
