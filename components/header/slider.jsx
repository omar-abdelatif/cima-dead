import React from 'react'
import Slider from 'react-slick'
import Link from 'next/link'
// import Image from 'next/image'
function Slide({ results }) {
    // const slides = [
    //     {
    //         id: 1,
    //         title: 'The Shawshank Redemption',
    //         image: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    //     },
    //     {
    //         id: 2,
    //         title: 'The Godfather',
    //         image: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
    //     },
    //     {
    //         id: 3,
    //         title: 'The Dark Knight',
    //         image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    //     },
    //     {
    //         id: 4,
    //         title: '12 Angry',
    //         image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
    //     },
    //     {
    //         id: 5,
    //         title: 'Schindler',
    //         image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
    //     },
    //     {
    //         id: 6,
    //         title: 'The Lord of the Rings',
    //         image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
    //     },
    //     {
    //         id: 7,
    //         title: 'The Lord of the Rings',
    //         image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
    //     },
    //     {
    //         id: 8,
    //         title: 'The Lord of the Rings',
    //         image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
    //     },
    //     {
    //         id: 9,
    //         title: 'The Lord of the Rings',
    //         image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
    //     },
    // ]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    }
    return (
        <section className="slider">
            <div className="container-fluid p-0">
                <div className="slider-content">
                    <Slider {...settings}>
                        {results.map(result => (
                            <div className="slide-item" key={result.id}>
                                <div className="layer"></div>
                                <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} width={212} height={320} alt={result.original_title || result.original_name} />
                                <div className="pref">
                                    <Link className='btn' href='/'>
                                        <h4 className='text-white'>{result.original_title || result.original_name}</h4>
                                    </Link>
                                    <p className='desc text-white'>movie description</p>
                                </div>
                                <div className="play">
                                    <Link href='/'>
                                        <i className="fas fa-play"></i>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div> 
        </section>
    )
}
export default Slide