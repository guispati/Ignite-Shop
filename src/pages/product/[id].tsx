import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import { useContext, useState } from 'react';
import Stripe from 'stripe';
import { PurchaseListContext } from '../../contexts/PurchaseListContext';
import { stripe } from '../../lib/stripe';
import { ButtonLg } from '../../styles/components/buttonLg';
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product';
import { convertPriceToString } from '../../utils/convertPriceToString';

interface ProductProps {
    product: {
		id: string;
		name: string;
		imageUrl: string;
		price: number;
        description: string;
        defaultPriceId: string;
	};
}

export default function Product({ product }: ProductProps) {
    // Para fallback: true no getStaticPaths
    // const { isFallback } = useRouter();

    // if (isFallback) {
    //     return <p>Loading...</p>
    // }

    const { addItemToCart } = useContext(PurchaseListContext);

    return (
        <>
            <Head>
				<title>{product.name} | Ignite Shop</title>
			</Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>

                <ProductDetails>
                    <div>
                        <h1>{product.name}</h1>
                        <span>{convertPriceToString(product.price)}</span>

                        <p>{product.description}</p>
                    </div>

                    <ButtonLg onClick={() => addItemToCart(product, 1)}>
                        Colocar na sacola
                    </ButtonLg>
                </ProductDetails>
            </ProductContainer>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_MPToUTcAhwRH4p'}}
        ],
        fallback: 'blocking',
    }
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    });

    const price = product.default_price as Stripe.Price;

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount,
                description: product.description,
                defaultPriceId: price.id
            },
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
};