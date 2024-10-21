import React, { useEffect, useState } from 'react';
import './MyOrdersPage.css';

const MyOrdersPage = () => {
    const images = [
        { id: 1, src: 'order1.png', alt: 'Order Image 1', caption: 'Amount: $10 - Delivery Date: 2024-10-22' },
        { id: 2, src: 'order2.png', alt: 'Order Image 2', caption: 'Amount: $20 - Delivery Date: 2024-10-25' },
        { id: 3, src: 'ord3.png', alt: 'Order Image 3', caption: 'Amount: $30 - Delivery Date: 2024-10-26' },
        { id: 4, src: 'order4.png', alt: 'Order Image 4', caption: 'Amount: $40 - Delivery Date: 2024-10-27' },
        { id: 5, src: 'order5.png', alt: 'Order Image 5', caption: 'Amount: $50 - Delivery Date: 2024-10-28' },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="orders-page">
            <header className="orders-header">
                <img src={process.env.PUBLIC_URL + '/try1.png'} alt="Header Background" className="header-image" />
                <div className="header-text">
                    <h1>My Orders</h1>
                </div>
            </header>

            <div className="carousel-container">
                {/* Vertical Image */}
                <img src={process.env.PUBLIC_URL + 'vertical.png'} alt="Vertical Image" className="vertical-image" />
                
                {images.map((image, index) => (
                    <div
                        key={image.id}
                        className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}
                    >
                        <img src={process.env.PUBLIC_URL + '/' + image.src} alt={image.alt} />
                        <p>{image.caption}</p>
                    </div>
                ))}
            </div>

            {/* Horizontal Image at the bottom */}
            <img src={process.env.PUBLIC_URL + 'bottom.png'} alt="Horizontal Image" className="horizontal-image" />
        </div>
    );
}

export default MyOrdersPage;
