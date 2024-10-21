import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Ensure this file is created as described below
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const HomePage = () => {
    return (
        <div className="homepage">
            <header className="navbar navbar-light bg-light d-flex justify-content-between p-3">
                <div className="logo">Pixorus</div>
                <div className="user-info d-flex align-items-center">
                    <span className="me-3">Diego Morata</span>
                    <Link to="/orders" className="me-3">Orders</Link>
                    <Link to="/cart">Cart</Link>
                </div>
                <input type="text" placeholder="Search product" className="form-control w-25" />
            </header>

            <div className="container my-4">
                <aside className="sidebar col-md-3">
                    <h2>Categories</h2>
                    <ul className="list-unstyled">
                        <li><Link to="/traditional-wear">Traditional Wear</Link></li>
                        <li><Link to="/western-wear">Western Wear</Link></li>
                        <li><Link to="/swim-beachwear">Swim & Beachwear</Link></li>
                        <li><Link to="/winter-seasonal">Winter & Seasonal Wear</Link></li>
                        <li><Link to="/beauty-grooming">Beauty & Grooming</Link></li>
                        <li><Link to="/jewellery">Jewellery</Link></li>
                        <li><Link to="/appliances">Personal Care Appliances</Link></li>
                        <li><Link to="/brands">International Brands</Link></li>
                        <li><Link to="/footwear">Foot Wear</Link></li>
                        <li><Link to="/watches">Watches</Link></li>
                        <li><Link to="/accessories">Accessories</Link></li>
                    </ul>
                </aside>
                <main className="main-content col-md-9">
                    <section className="offers">
                        <img src="chair.png" alt="Offers Header" className="offer-image img-fluid" />
                        <h2>Biggest Offer Revealed</h2>
                        <p>More deals inside up to 50% off!</p>
                        <Link to="/wishlist" className="btn btn-primary">Wishlist Now</Link>
                    </section>

                    {/* New Section for Login, Products, Orders, and Account Bars */}
                    <section className="account-bars" style={{ backgroundColor: 'white', padding: '10px', margin: '20px 0', borderRadius: '5px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-around', color: 'black' }}>
                             <Link to="/login">Login</Link>

                            <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}>Products</Link>
                            <Link to="/orders" style={{ textDecoration: 'none', color: 'black' }}>Orders</Link>
                            <Link to="/account" style={{ textDecoration: 'none', color: 'black' }}>Account</Link>
                        </div>
                    </section>

                    <section className="deals-of-the-day">
                        <h2>Deals of the Day</h2>
                        <div className="row">
                            <div className="col-6 col-md-4 mb-3">
                                <div className="product-card">
                                    <img src="gucci.png" alt="Red leather GUCCI bag" className="product-image img-fluid" />
                                    <p>Red leather GUCCI bag</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 mb-3">
                                <div className="product-card">
                                    <img src="cream.png" alt="LEXRX face cream" className="product-image img-fluid" />
                                    <p>LEXRX face cream</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 mb-3">
                                <div className="product-card">
                                    <img src="camera.png" alt="Fuji Film DSLR camera" className="product-image img-fluid" />
                                    <p>Fuji Film DSLR camera</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 mb-3">
                                <div className="product-card">
                                    <img src="shoe.png" alt="Sky blue kids shoe" className="product-image img-fluid" />
                                    <p>Sky blue kids shoe</p>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 mb-3">
                                <div className="product-card">
                                    <img src="purse.png" alt="Brown leather wallet" className="product-image img-fluid" />
                                    <p>Brown leather wallet</p>
                                </div>
                            </div>
 <div className="col-6 col-md-4 mb-3">
                                <div className="product-card">
                                    <img src="dress.png" alt="Net Boat Neck Shift Dress" className="product-image img-fluid" />
                                    <p>Net Boat Neck Shift Dress</p>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="suggestions">
                        <h2>Suggestions for You</h2>
                        <div className="suggestion-cards">
                            <div className="suggestion-card">Suggested Item 1</div>
                            <div className="suggestion-card">Suggested Item 2</div>
                            <div className="suggestion-card">Suggested Item 3</div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default HomePage;
