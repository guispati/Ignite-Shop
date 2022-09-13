import { CartButtonContainer } from "../styles/components/cartButton";
import { Handbag } from "phosphor-react";

export function CartButton() {

    return (
        <CartButtonContainer>
            <Handbag size={24} color="#8D8D99" weight="bold" />
        </CartButtonContainer>
    );
}