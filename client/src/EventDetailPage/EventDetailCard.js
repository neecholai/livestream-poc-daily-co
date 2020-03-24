import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import * as moment from "moment";

function EventDetailCard({ event, monthlyPrice }) {
  const { title, description, dateTime, price } = event;

  const registerForEvent = () => {
    console.log("PUT THIS IN PROP AND DEFINE IN HIGHER COMPONENT LATER");
  };

  const purchaseMonthlyPass = () => {
    console.log("PUT THIS IN PROP AND DEFINE IN HIGHER COMPONENT LATER");
  };

  const registrationButtons = !monthlyPrice ? (
    <Button variant="primary" onClick={registerForEvent}>
      Register for this event | ${price}
    </Button>
  ) : (
      <div className="buttons">
        <Button className="mx-1 mt-2" variant="primary" onClick={purchaseMonthlyPass}>
          Get a Monthly Pass | ${monthlyPrice}
        </Button>
        <Button className="mx-1 mt-2" variant="primary" onClick={registerForEvent}>
          Register for this event | ${price}
        </Button>
      </div>
    );

  return (
    <Jumbotron className="text-center my-2 col-lg-8 container">

      <h4>{title}</h4>
      <i><h6>
        {moment()
          .startOf(dateTime)
          .fromNow()}
      </h6></i>
      <p>{description}</p>
      <p>
        {registrationButtons}
      </p>
    </Jumbotron>
  );
}

export default EventDetailCard;
