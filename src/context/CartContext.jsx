import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('kweffa-cart');
        if (savedCart) {
            setCartItems(JSON.parse(savedCart));
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('kweffa-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to cart
    const addToCart = (item) => {
        const existingItem = cartItems.find(i => i.id === item.id && i.type === item.type);

        if (existingItem) {
            // Already in cart, don't add duplicate
            alert('This item is already in your cart!');
            return;
        }

        setCartItems([...cartItems, item]);
        setIsCartOpen(true);
    };

    // Remove item from cart
    const removeFromCart = (itemId, itemType) => {
        setCartItems(cartItems.filter(item => !(item.id === itemId && item.type === itemType)));
    };

    // Clear entire cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Calculate total
    const getTotal = () => {
        return cartItems.reduce((sum, item) => sum + (item.price || 0), 0);
    };

    // Toggle cart sidebar
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const value = {
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
        toggleCart,
        setIsCartOpen
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
