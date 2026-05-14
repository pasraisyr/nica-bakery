import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: string; // Unique key: productId + option
  productId: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  selectedOption?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: any, quantity?: number, selectedOption?: string, extraPrice?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('bakery-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('bakery-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: any, quantity: number = 1, selectedOption?: string, extraPrice: number = 0) => {
    const variantId = selectedOption ? `${product.id}-${selectedOption}` : `${product.id}`;
    
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === variantId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === variantId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      
      const newItem: CartItem = {
        id: variantId,
        productId: product.id,
        name: product.name,
        price: product.price + extraPrice,
        quantity,
        image: product.image,
        selectedOption
      };
      
      return [...prevCart, newItem];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === cartItemId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div style={{ position: 'relative' }}>
      <CartContext.Provider value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        totalItems, 
        totalPrice,
        isCartOpen,
        setIsCartOpen
      }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
