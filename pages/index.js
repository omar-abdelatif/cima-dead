import React from 'react';
import Head from 'next/head';
import LogoNav from '../components/header/logonav';
import MainNav from '../components/header/main-nav';
import Slider from './../components/header/slider';
import Category from './../components/header/category';
import Movielist from './../components/movies/movielist';
import Years from '../components/years';
import Footer from '../components/footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
import requests from '../utils/requests';

export default function Home({ results }) {
	useEffect(() => {
		typeof document !== 'undefined' ? require('../node_modules/bootstrap/dist/js/bootstrap.bundle.min') : null;
		const script = document.createElement('script');
		const link = document.createElement('link');
		const BlueNav = document.querySelector('.blue-sky');
		script.src = '/js/custom.js';
		document.body.appendChild(script);

		link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css';
		link.rel = 'stylesheet';
		document.head.appendChild(link);

		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				BlueNav.classList.add('fixed-nav');
			} else {
				BlueNav.classList.remove('fixed-nav');
			}
		});
	}, []);
	return (
		<React.Fragment>
			<Head>
				<title>Cima Dead</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* Header */}
			<LogoNav />
			<MainNav />
			<Slider results={results} />
			<Category />
			{/* Results */}
			<Movielist results={results} />
			{/* Footer */}
			<Years />
			<Footer />
		</React.Fragment>
	)
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;
	const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(res => res.json());
	return {
		props: {
			results: request.results,
		}
	}
}