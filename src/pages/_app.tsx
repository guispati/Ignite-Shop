import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from '../assets/logo.svg';
import { Container, Header } from "../styles/pages/app";

import Image from 'next/future/image';
import { CartButton } from "../components/CartButton";
import { Cart } from "../components/Cart";
import { PurchaseListContextProvider } from "../contexts/PurchaseListContext";


globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  	return (
		<PurchaseListContextProvider>
			<Container>
				<Header>
					<Image src={logoImg} alt="" />

					<CartButton />
					<Cart />
				</Header>
				<Component {...pageProps} />
			</Container>

		</PurchaseListContextProvider>
	);
}