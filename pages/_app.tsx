import Head from 'next/head';
import { AppProps } from '../node_modules/next/app';
import '../styles/globals.css';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return <>
		<Head>
			<title>MyTop</title>
			<link rel="icon" href="/favicon.ico" />
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com"/>
			<link href="https://fonts.googleapis.com/css2?family=Merienda&family=Noto+Sans+Display:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
		</Head>
		<Component {...pageProps} />
	</>;
}

export default MyApp;