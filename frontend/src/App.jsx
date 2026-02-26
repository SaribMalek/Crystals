import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'
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
import ReikiTools from './pages/ReikiTools'
import CrystalJewelry from './pages/CrystalJewelry'
import Trainings from './pages/Trainings'
import Services from './pages/Services'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import MyOrders from './pages/MyOrders'
import Login from './pages/Login'
import Signup from './pages/Signup'

const PAGE_TITLES = [
    { path: '/', title: 'Home | AS Crystals' },
    { path: '/shop', title: 'Shop | AS Crystals' },
    { path: '/product/:id', title: 'Product Details | AS Crystals' },
    { path: '/cart', title: 'Cart | AS Crystals' },
    { path: '/checkout', title: 'Checkout | AS Crystals' },
    { path: '/orders', title: 'My Orders | AS Crystals' },
    { path: '/login', title: 'Login | AS Crystals' },
    { path: '/signup', title: 'Signup | AS Crystals' },
    { path: '/about', title: 'About Us | AS Crystals' },
    { path: '/contact', title: 'Contact | AS Crystals' },
    { path: '/gifts', title: 'Gift Sets | AS Crystals' },
    { path: '/remedies', title: 'Remedies | AS Crystals' },
    { path: '/healing-stones', title: 'Healing Stones | AS Crystals' },
    { path: '/reiki-tools', title: 'Reiki Tools | AS Crystals' },
    { path: '/crystal-jewelry', title: 'Crystal Jewelry | AS Crystals' },
    { path: '/trainings', title: 'Trainings | AS Crystals' },
    { path: '/services', title: 'Services | AS Crystals' },
    { path: '/privacy', title: 'Privacy Policy | AS Crystals' },
    { path: '/terms', title: 'Terms & Conditions | AS Crystals' },
]

const updatePageTitle = (pathname) => {
    const matched = PAGE_TITLES.find((page) => matchPath({ path: page.path, end: true }, pathname))
    document.title = matched?.title || 'AS Crystals | Premium Healing Crystals & Jewelry'
}

function AppRoutes() {
    const location = useLocation()

    useEffect(() => {
        updatePageTitle(location.pathname)
    }, [location.pathname])

    useEffect(() => {
        const targets = Array.from(document.querySelectorAll(
            'main section, main article, main [class*="card"], main .luxury-product-card, main .btn-luxury'
        ))

        if (targets.length === 0) {
            return undefined
        }

        targets.forEach((el) => el.classList.add('reveal-on-scroll'))

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
        )

        targets.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [location.pathname])

    return (
        <div className="route-shell" key={location.pathname}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/orders" element={<MyOrders />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/gifts" element={<Gifts />} />
                <Route path="/remedies" element={<Remedies />} />
                <Route path="/healing-stones" element={<HealingStones />} />
                <Route path="/reiki-tools" element={<ReikiTools />} />
                <Route path="/crystal-jewelry" element={<CrystalJewelry />} />
                <Route path="/trainings" element={<Trainings />} />
                <Route path="/services" element={<Services />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </div>
    )
}

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const hideLoader = () => setIsLoading(false)

        if (document.readyState === 'complete') {
            const timer = setTimeout(hideLoader, 500)
            return () => clearTimeout(timer)
        }

        window.addEventListener('load', hideLoader)
        return () => window.removeEventListener('load', hideLoader)
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <AuthProvider>
            <CartProvider>
                <Router>
                    <div className="app">
                        <Header />
                        <main style={{ marginTop: '160px' }}>
                            <AppRoutes />
                        </main>
                        <Footer />
                    </div>
                </Router>
            </CartProvider>
        </AuthProvider>
    )
}

export default App
