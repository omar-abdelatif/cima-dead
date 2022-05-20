import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Movielist({ results }) {
    console.log(results)
    return (
        <section className="movies">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {results.map(results => (
                        <div className="col-xl-2 col-md-4 col-sm-6" key={results.id}>
                            <div className="movie-item text-center">
                                <div className="movie-thumb">
                                    <Image src={`https://image.tmdb.org/t/p/w500${results.poster_path}`} width={200} height={300} alt="" />
                                </div>
                                <div className="back">
                                    <Link href={`/movie/${results.id}`}>
                                        <h6 className="movie-title">{results.original_title || results.original_name}</h6>
                                    </Link>
                                    <div className="data">
                                        <span className="date">{results.release_date || results.first_air_date}</span>
                                        <span className="rate">{results.vote_average}</span>
                                        <p className="lang">اللغة: {results.original_language}</p>
                                        <Link href={`/movie/${results.id}`}>
                                            <a className="view btn btn-primary" href="">View Movie</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Movielist