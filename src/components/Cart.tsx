import { CartContainer, CartDetails } from "../styles/components/cart";
import { CartItem } from "./CartItem";

export function Cart() {
    return (
        <CartContainer>
            <h2>Sacola de compras</h2>

            <CartDetails>
                <CartItem />
            </CartDetails>
        </CartContainer>
    );
}