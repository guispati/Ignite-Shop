import { useContext, useState } from "react";
import { ItemList, PurchaseListContext } from "../contexts/PurchaseListContext";
import { ButtonLg } from "../styles/components/buttonLg";
import { CartContainer, CartDetails, CartSummary, CartSummaryRow, FinalPriceSpan, Qtd, QtdValue, TotalValue } from "../styles/components/cart";
import { convertPriceToString } from "../utils/convertPriceToString";
import { CartItem } from "./CartItem";
import { X } from 'phosphor-react'
import axios from "axios";

interface CartProps {
    handleCloseCart: () => void;
}

export function Cart({ handleCloseCart }: CartProps) {
    const { cart, clearCart } = useContext(PurchaseListContext);

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

    const purchaseList: ItemList[] = cart;

    const totalCartItens = cart.reduce((prev, current) => {
        return prev + +current.quantity;
    }, 0);

    const totalCartValue = purchaseList.reduce((prev, current) => {
        return prev + +(current.product.price * current.quantity);
    }, 0);

    async function handleBuyProducts() {
        try {
            setIsCreatingCheckoutSession(true);
            
            const response = await axios.post('/api/checkout', {
                lineItems: cart.map((product) => {
                    return {
                        price: product.product.defaultPriceId,
                        quantity: product.quantity,
                    }
                }),
            });

            clearCart();

            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl;
        } catch (err) {
            setIsCreatingCheckoutSession(false);

            alert(err.message);
        }
    }

    return (
        <CartContainer>
            <h2>Sacola de compras</h2>

            <X size={24} fill={"#8D8D99"} onClick={handleCloseCart} />

            <CartDetails>
                {cart.map(product => (
                    <CartItem key={product.product.id} product={product} />
                ))}
            </CartDetails>

            <CartSummary>
                <CartSummaryRow>
                    <Qtd>Quantidade</Qtd>
                    <QtdValue>{totalCartItens} ite{totalCartItens === 1 ? 'm' : 'ns'}</QtdValue>
                </CartSummaryRow>

                <CartSummaryRow>
                    <TotalValue>Valor total</TotalValue>
                    <FinalPriceSpan>{convertPriceToString(totalCartValue)}</FinalPriceSpan>
                </CartSummaryRow>
                
                <ButtonLg onClick={handleBuyProducts} disabled={isCreatingCheckoutSession}>
                    Finalizar compra
                </ButtonLg>
            </CartSummary>

        </CartContainer>
    );
}