import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import moment from "moment";
import "./EventDetailCard.scss";

function EventDetailCard({ event, monthlyPrice }) {
  const { title, description, dateTime, price } = event;

  const registerForEvent = () => {
    console.log("DIRECT USER TO PAGE TO EITHER STRIPE OR SIGN IN SO THEY CAN PAY, SEND IN EVENT DETAILS TO THIS PAGE");
  };

  const purchaseMonthlyPass = () => {
    console.log("PUT THIS IN PROP AND DEFINE IN HIGHER COMPONENT LATER, ALSO ON CREATOR DETAIL PAGE");
  };

  const registrationButtons = !monthlyPrice ? (
    <Button variant="primary" onClick={registerForEvent}>
      Register for this event | ${price}
    </Button>
  ) : (
      <div className='buttons'>
        <Button
          className="mx-1 mt-2"
          variant="primary"
          onClick={purchaseMonthlyPass}
        >
          Get a Monthly Pass | ${monthlyPrice}
        </Button>
        <Button
          className="mx-1 mt-2"
          variant="primary"
          onClick={registerForEvent}
        >
          Register for this event | ${price}
        </Button>
      </div>
    );

  return (
    <Jumbotron className="text-center col-lg-8 EventDetailCard" >
      <h4>{title}</h4>
      <i>
        <h6>
          {moment()
            .startOf(dateTime)
            .fromNow()}
        </h6>
      </i>
      <div>{description}</div>
      <div>{registrationButtons}</div>
    </Jumbotron>
  );
}

export default EventDetailCard;
