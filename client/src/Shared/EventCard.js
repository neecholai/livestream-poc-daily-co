import React from "react";
import Media from "react-bootstrap/Media";
import moment from "moment";
import './EventCard.scss';

function EventCard({ event, page }) {
  const {
    id,
    category,
    title,
    dateTime,
    photo_url,
    attendees,
    creatorName
  } = event;

  return (
    <Media className="EventCard my-2" as="li">
      <img
        style={{ width: "64px", height: "64px" }}
        className="mx-1 EventCard-image"
        src={photo_url}
        alt={`event-${title}`}
      />
      <Media.Body className="d-flex flex-column justify-content-between ml-1 text-muted">
        <div>
          {category} |{" "}
          {`${moment()
            .startOf(dateTime)
            .fromNow()}`}
        </div>
        <div>
          <a className="EventCard-title" href={`/events/${id}`}>{title}</a>
          {page !== "event" && <span className="text-muted"> | {creatorName} | {attendees} attending </span>}
        </div>
      </Media.Body>
    </Media >
  );
}

export default EventCard;
