import { createContext, ReactNode, useEffect, useState } from "react";
import { produce } from 'immer';

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    defaultPriceId: string;
}

export type ItemList = {
    product: Product;
    quantity: number;
}

interface PurchaseList {
    cart: ItemList[];
    addItemToCart: (product: Product, quantity: number) => void;
    changeQuantityOnCart: (product: Product, quantity: number) => void;
    removeItemFromCart: (product: Product) => void;
    clearCart: () => void;
}

export const PurchaseListContext = createContext({} as PurchaseList);

interface ProductsContextProviderProps {
    children: ReactNode;
}

export function PurchaseListContextProvider({ children }: ProductsContextProviderProps) {
    const [ cart, setCart ] = useState<ItemList[]>([]);

    function addItemToCart(product: Product, quantity: number) {
        const itemPositionOnArray = cart.findIndex(item => item.product.id === product.id);

        if (itemPositionOnArray >= 0) {
            setCart(produce(cart, draft => {
                draft[itemPositionOnArray].quantity += quantity;
            }));
        } else {
            const newList = [...cart, { product, quantity }];
            setCart(newList);
        }
    }

    function changeQuantityOnCart(product: Product, quantity: number) {
        const itemPositionOnArray = cart.findIndex(item => item.product.id === product.id);

        if (itemPositionOnArray >= 0) {
            setCart(produce(cart, draft => {
                draft[itemPositionOnArray].quantity = quantity;
            }));
        }
    }

    function removeItemFromCart(product: Product) {
        const itemPositionOnArray = cart.findIndex(item => item.product.id === product.id);

        if (itemPositionOnArray >= 0) {
            setCart(produce(cart, draft => {
                draft.splice(itemPositionOnArray, 1);
            }));
        }
    }

    function clearCart() {
        setCart([]);
    }

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <PurchaseListContext.Provider value={{ cart, addItemToCart, changeQuantityOnCart, clearCart, removeItemFromCart }}>
            {children}
        </PurchaseListContext.Provider>
    );
}