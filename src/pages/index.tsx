import Head from "next/head";
import Image from "next/future/image";
import Link from 'next/link';

import { useKeenSlider } from 'keen-slider/react'

import { AddToCartContainer, HomeContainer, Product } from "../styles/pages/home";

import 'keen-slider/keen-slider.min.css';
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { Handbag } from "phosphor-react";
import { useContext } from "react";
import { PurchaseListContext } from "../contexts/PurchaseListContext";
import { convertPriceToString } from "../utils/convertPriceToString";

interface HomeProps {
	products: {
		id: string;
		name: string;
		imageUrl: string;
		price: number;
		defaultPriceId: string;
	}[];
}

export default function Home({ products }: HomeProps) {
	const { addItemToCart } = useContext(PurchaseListContext);
	const [sliderRef] = useKeenSlider({
		slides: {
			perView: 3,
			spacing: 48,
		}
	})

	return (
		<>
			<Head>
				<title>Home | Ignite Shop</title>
			</Head>
			<HomeContainer ref={sliderRef} className='keen-slider'>
				{products.map(product => {
					return (
						<Product className="keen-slider__slide" key={product.id}>
							<Link href={`/product/${product.id}`} prefetch={false}>
								<Image src={product.imageUrl} width={520} height={480} alt="" />
							</Link>

							<footer>
								<div>
									<strong>{product.name}</strong>
									<span>{convertPriceToString(product.price)}</span>
								</div>
								<AddToCartContainer onClick={() => addItemToCart(product, 1)}>
									<Handbag size={32} color="#FFF" weight="bold" />
								</AddToCartContainer>
							</footer>
						</Product>
					)
				})}
			</HomeContainer>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await stripe.products.list({
		expand: ['data.default_price']
	});


	const products = response.data.map(product => {
		const price = product.default_price as Stripe.Price;

		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: price.unit_amount,
			defaultPriceId: price.id,
		};
	});

	return {
		props: {
			products,
		},
		revalidate: 60 * 60 * 2, // 2 hours
	}
}