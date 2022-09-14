import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from '../assets/logo.svg';
import { Container, Header } from "../styles/pages/app";

import Image from 'next/future/image';
import { CartButton } from "../components/CartButton";
import { Cart } from "../components/Cart";
import { PurchaseListContextProvider } from "../contexts/PurchaseListContext";
import { useState } from "react";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
	const [isCartOpen, setIsCartOpen] = useState(false);

	function handleCloseCart() {
		setIsCartOpen(false);
	}

	function handleToggleCart() {
		setIsCartOpen((state) => {
			return !state;
		});
	}

  	return (
		<PurchaseListContextProvider>
			<Container>
				<Header>
					<Link href='/' prefetch={false}>
						<a>
							<Image src={logoImg} alt="" />
						</a>
					</Link>

					<CartButton handleToggleCart={handleToggleCart} />
					{isCartOpen && (
						<Cart key={Math.random()} handleCloseCart={handleCloseCart} />
					)}
				</Header>
				<Component {...pageProps} />
			</Container>

		</PurchaseListContextProvider>
	);
}