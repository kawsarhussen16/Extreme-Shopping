import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


const StripeButton = ({ price }) => {
    const priceinCents = price * 100;
    const publishKey = "pk_test_DyJU11n3PfnuW4O4F72nNJlp00FJ6E9SXC";
    const onToken = token => {
        console.log(token)
        alert("Payment Successfull")
    }
    return (

        <StripeCheckout
            label="Pay Now"
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceinCents}
            name="Extreme Shopping Ltd."
            token={onToken}
            stripeKey={publishKey}
            image='https://image.shutterstock.com/image-vector/ink-hand-drawn-letter-e-260nw-410423812.jpg'
        />
    )
}

export default StripeButton;