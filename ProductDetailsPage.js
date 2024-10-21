import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to receive product data

const ProductDetails = () => {
    const location = useLocation();
    const { product } = location.state; // Get the product data passed from ProductPage

    const handleProceedToPayment = () => {
        // Implement payment logic here
        console.log('Proceeding to payment for:', product.name);
    };

    return (
        <div>
            <div className="product-header">
                <img src="head.png" alt="Header" className="header-image" />
                <h1 className="header-title">Product Details</h1>
            </div>

            <div className="product-details">
                <img src={product.imgSrc} alt={product.name} className="product-image" />
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <button onClick={handleProceedToPayment}>Proceed to Payment</button>
            </div>
        </div>
    );
};

export default ProductDetails;
