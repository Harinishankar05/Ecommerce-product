import React from 'react';
import './ProductPage.css'; // Ensure you have the necessary styles
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

// Example product data with categories and images
const products = {
    traditionalWear: [
        { id: 1, name: 'Traditional Dress 1', price: 50, imgSrc: '/trad1.png' },
        { id: 2, name: 'Traditional Dress 2', price: 60, imgSrc: '/trad2.png' },
        { id: 3, name: 'Traditional Dress 3', price: 70, imgSrc: '/trad3.png' },
        { id: 4, name: 'Traditional Dress 4', price: 80, imgSrc: '/trad4.png' },
    ],
    westernWear: [
        { id: 5, name: 'Western Dress 1', price: 40, imgSrc: '/wes1.png' },
        { id: 6, name: 'Western Dress 2', price: 50, imgSrc: '/wes3.png' },
        { id: 7, name: 'Western Dress 3', price: 60, imgSrc: '/web2.png' },
        { id: 8, name: 'Western Dress 4', price: 70, imgSrc: '/wes4.png' },
    ],
    jewellery: [
        { id: 9, name: 'Jewellery Item 1', price: 30, imgSrc: '/jew1.png' },
        { id: 10, name: 'Jewellery Item 2', price: 35, imgSrc: '/jew2.png' },
        { id: 11, name: 'Jewellery Item 3', price: 40, imgSrc: '/jew3.png' },
        { id: 12, name: 'Jewellery Item 4', price: 45, imgSrc: '/jew4.png' },
    ],
    internationalBrands: [
        { id: 13, name: 'Brand Item 1', price: 100, imgSrc: '/int1.png' },
        { id: 14, name: 'Brand Item 2', price: 110, imgSrc: '/int2.png' },
        { id: 15, name: 'Brand Item 3', price: 120, imgSrc: '/int3.png' },
        { id: 16, name: 'Brand Item 4', price: 130, imgSrc: '/int4.png' },
    ],
};

const ProductPage = () => {
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        // Navigate to the product details page, passing the product's ID
        navigate(`/product/${product.id}`, { state: { product } });
    };

    return (
        <div>
            {/* Header with image instead of background-image */}
            <div className="product-header">
                <img src="head.png" alt="Product Header" className="header-image" />
                <h1 className="header-title">Products</h1>
            </div>

            {Object.entries(products).map(([category, items]) => (
                <div key={category}>
                    <h2 style={{ background: '#5F9EA0', color: 'white', padding: '10px' }}>
                        {category.replace(/([A-Z])/g, ' $1')}
                    </h2>
                    <div className="product-category">
                        {items.map((product) => (
                            <div key={product.id} className="product-item">
                                <img
                                    src={product.imgSrc}
                                    alt={product.name}
                                    className="product-image"
                                />
                                <p>{product.name} - ${product.price}</p>
                                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;
