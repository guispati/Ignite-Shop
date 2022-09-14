import { CartButtonContainer } from "../styles/components/cartButton";
import { Handbag } from "phosphor-react";
import { useContext } from "react";
import { PurchaseListContext } from "../contexts/PurchaseListContext";

interface CartButtonProps {
    handleToggleCart: () => void
}

export function CartButton({ handleToggleCart }: CartButtonProps) {
    const { cart } = useContext(PurchaseListContext);

    const totalCartItens = cart.reduce((prev, current) => {
        return prev + +current.quantity;
    }, 0);

    return (
        <CartButtonContainer onClick={handleToggleCart}>
            <Handbag size={24} color="#8D8D99" weight="bold" />
            {totalCartItens !== 0 && <span>{totalCartItens}</span>}
        </CartButtonContainer>
    );
}