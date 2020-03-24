import React from "react";
import Media from "react-bootstrap/Media";
import * as moment from "moment";

function EventCard({ event, page }) {
  const {
    category,
    title,
    dateTime,
    photo_url,
    attendees,
    creatorName
  } = event;

  return (
    <Media className="my-2" as="li">
      <img
        className="mx-1"
        src={photo_url}
        style={{ height: "64px", width: "64px", borderRadius: "4px" }}
        alt="default-event"
      />
      <Media.Body className="d-flex flex-column justify-content-between">
        <div>
          {category} |{" "}
          {`${moment()
            .startOf(dateTime)
            .fromNow()}`}
        </div>
        <div>
          <b>{title}</b>
          {page !== "event" && `| ${creatorName} | ${attendees} attending`}
        </div>
      </Media.Body>
    </Media>
  );
}

export default EventCard;
