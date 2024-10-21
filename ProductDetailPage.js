import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ProductDetailPage.css'; // Import the CSS for styles

const ProductDetailPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product; // Safely access the product

    // State to keep track of added products
    const [addedProducts, setAddedProducts] = useState([]);

    const handleAddToCart = () => {
        if (product) {
            setAddedProducts((prevProducts) => [...prevProducts, product]);
        }
    };

    const handleRemoveFromCart = () => {
        // Logic to remove the product from cart can go here
        navigate('/products'); // Navigate to products or any other page
    };

    if (!product) {
        return <div>No product details available.</div>; // Handle case where no product is passed
    }

    return (
        <div>
            <img src="bg.png" alt="Background" className="background-image" /> {/* Background image */}
            <div className="product-detail-container">
                <div className="product-info">
                    <h2>{product.name}</h2>
                    <img src={product.imgSrc} alt={product.name} style={{ width: '300px' }} />
                    <p>Price: ${product.price}</p>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
                <div className="additional-video">
                    <video 
                        src="video.mp4" 
                        autoPlay 
                        loop 
                        style={{ width: '400px', marginLeft: '20px' }} 
                        controls 
                    />
                </div>
            </div>
            <div className="added-products">
                <h3>Added Products:</h3>
                <div className="added-product-images">
                    {addedProducts.map((item, index) => (
                        <img 
                            key={index} 
                            src={item.imgSrc} 
                            alt={item.name} 
                            style={{ width: '100px', margin: '5px' }} 
                        />
                    ))}
                </div>
            </div>
            <div className="button-container">
                <button className="proceed-payment-button">Proceed to Payment</button>
            </div>
        </div>
    );
};

export default ProductDetailPage;
