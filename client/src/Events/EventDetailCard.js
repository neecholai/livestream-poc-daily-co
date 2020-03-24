import React from "react";
import { Card, Button } from "react-bootstrap";
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
    <div>
      <Button className="mx-1" variant="primary" onClick={purchaseMonthlyPass}>
        Get a Monthly Pass | ${monthlyPrice}
      </Button>
      <Button className="mx-1" variant="primary" onClick={registerForEvent}>
        Register for this event | ${price}
      </Button>
    </div>
  );

  return (
    <Card className="text-center my-4">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {moment()
            .startOf(dateTime)
            .fromNow()}
        </Card.Text>
        <Card.Text>{description}</Card.Text>
        {registrationButtons}
      </Card.Body>
    </Card>
  );
}

export default EventDetailCard;
