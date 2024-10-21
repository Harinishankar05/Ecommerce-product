import React from 'react';

const PaymentPage = () => {
    const handlePayment = () => {
        // Logic to process payment
        alert('Payment Successful!');
    };

    return (
        <div>
            <h1>Payment</h1>
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    );
}

export default PaymentPage;
