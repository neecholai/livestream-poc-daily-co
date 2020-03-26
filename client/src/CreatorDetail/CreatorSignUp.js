import React from "react";
import { Button } from "react-bootstrap";
import './CreatorSignUp.scss'


function CreatorSignUp({ creator }) {
  const { name, monthlyPrice } = creator;

  const purchaseMonthlyPass = () => {
    console.log("PUT THIS IN PROP AND DEFINE IN HIGHER COMPONENT LATER")
  }

  return (
    <div className="Creator-SignUp text-center my-2 col-lg-8">
      <Button variant="primary" onClick={purchaseMonthlyPass}>
        Get a monthly pass for {name} | ${monthlyPrice}
      </Button>
    </div>
  );
}


export default CreatorSignUp;