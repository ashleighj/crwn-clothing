import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51GyNpdCj26ry6rnLAgHTl795zEGI1CraZblUObJHbjAsziyAKi9Y4kwOR4NNT9CHtJKsN0mngNZww19ByXrWsiNK00MG92pRzD";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
