import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'

// New Premium Pages
import Gifts from './pages/Gifts'
import Remedies from './pages/Remedies'
import HealingStones from './pages/HealingStones'
import Trainings from './pages/Trainings'
import Services from './pages/Services'

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="app">
                    <Header />
                    <main style={{ marginTop: '160px' }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/shop" element={<Shop />} />
                            <Route path="/product/:id" element={<ProductDetails />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />

                            <Route path="/gifts" element={<Gifts />} />
                            <Route path="/remedies" element={<Remedies />} />
                            <Route path="/healing-stones" element={<HealingStones />} />
                            <Route path="/trainings" element={<Trainings />} />
                            <Route path="/services" element={<Services />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </CartProvider>
    )
}

export default App
