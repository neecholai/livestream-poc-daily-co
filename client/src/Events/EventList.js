import React from "react";
import EventCard from "../Shared/EventCard";

function EventList({ events, creatorName }) {
  return (
        <div className="my-2 col-lg-8">
          <h4>Other Upcoming Content from {creatorName}</h4>
          <ul className="list-unstyled ">
            {events.map(event => (
              <EventCard key={event.id} event={event} page="event" />
            ))}
          </ul>
        </div>
  );
}

export default EventList;
