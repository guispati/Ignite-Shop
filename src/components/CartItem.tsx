import { useContext } from "react";
import { ItemList, PurchaseListContext } from "../contexts/PurchaseListContext";
import { CartItemContainer, CartItemDetails, ImageContainer } from "../styles/components/cartItem";
import Image from "next/future/image";
import { convertPriceToString } from "../utils/convertPriceToString";

interface CartItemProps {
    product: ItemList;
}

export function CartItem({ product }: CartItemProps) {
    const { removeItemFromCart } = useContext(PurchaseListContext);

    const handleDelete = () => {
        removeItemFromCart(product.product);
    }

    return (
        <CartItemContainer>
            <ImageContainer>
                <Image src={product.product.imageUrl} width={94} height={94} alt="" />
            </ImageContainer>
            <CartItemDetails>
                <h3>{product.product.name}</h3>
                <strong>{convertPriceToString(product.product.price)}</strong>
                <a onClick={handleDelete}>Remover</a>
            </CartItemDetails>
        </CartItemContainer>
    )
}