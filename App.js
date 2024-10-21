import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProductPage from './components/ProductPage';
import MyOrdersPage from './components/MyOrdersPage';
import AccountPage from './components/AccountPage';
import PaymentPage from './components/PaymentPage';
import PaymentSuccess from './components/PaymentSuccess';
import ProductDetailPage from './components/ProductDetailPage'; // Corrected import

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} /> {/* Added ProductDetailPage route */}
                    <Route path="/orders" element={<MyOrdersPage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                    <Route path="/payment-success" element={<PaymentSuccess />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
