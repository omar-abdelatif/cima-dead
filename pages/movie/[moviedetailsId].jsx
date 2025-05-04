import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import requests from '../../utils/requests';
import { useRouter } from 'next/router';
import MainNav from '../../components/header/main-nav';

function MovieDetails({ results }) {
    const router = useRouter()
    const moviedetails = router.query.moviedetailsId
    const Movie = results;
    const [Details] = [...Movie.filter((e) => {
        return e.id === parseInt(moviedetails)
    })];
    console.log(results)
    return (
        <React.Fragment>
            <MainNav />
            <section className="details">
                <div className="container-fluid p-0">
                    {Details && (
                        <div className="row g-0">
                            <div className="col-12">
                                <div className="movie text-center">
                                    <div className="movie_backdrop" style={{
                                        backgroundImage: `url(https://image.tmdb.org/t/p/w500${Details.backdrop_path})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}>
                                        <div className='movie_poster'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </React.Fragment>
    )
}
export default MovieDetails

export async function getServerSideProps(context) {
    const genre = context.query.genre;
    const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(res => res.json());
    return {
        props: {
            results: request.results,
        }
    }
}