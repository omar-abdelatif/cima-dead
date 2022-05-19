import React from 'react'

function Movielist({ results }) {
    console.log(results);
    return (
        <section className="movies">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {results.map(results => (
                        <div className="col-xl-2 col-md-4 col-sm-6" key={results.id}>
                            <div className="movie-item text-center">
                                <div className="movie-thumb">
                                    <img src={`https://image.tmdb.org/t/p/w500${results.poster_path}`} width={200} height={300} alt="" />
                                </div>
                                <div className="movie-content">
                                    <h4 className="movie-title">{results.original_title || results.original_name}</h4>
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