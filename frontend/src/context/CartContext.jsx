import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const toNumber = (value) => {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : 0;
};

const toQuantity = (value) => {
    const parsed = Number.parseInt(value, 10);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
};

const normalizeCartItem = (item) => ({
    ...item,
    price: toNumber(item?.price),
    quantity: toQuantity(item?.quantity),
});

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem('as_crystals_cart');
            if (!savedCart) {
                return [];
            }

            const parsedCart = JSON.parse(savedCart);
            if (!Array.isArray(parsedCart)) {
                return [];
            }

            return parsedCart.map(normalizeCartItem);
        } catch (error) {
            console.error('Invalid cart data in localStorage:', error);
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('as_crystals_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity = 1) => {
        const normalizedProduct = normalizeCartItem({
            ...product,
            quantity
        });

        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === normalizedProduct.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === normalizedProduct.id ? { ...item, quantity: item.quantity + normalizedProduct.quantity } : item
                );
            }
            return [...prevItems, normalizedProduct];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        const normalizedQuantity = toQuantity(quantity);
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, quantity: normalizedQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartTotal = cartItems.reduce((total, item) => total + toNumber(item.price) * toQuantity(item.quantity), 0);
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            cartTotal,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};
