import React from 'react'
import Slider from 'react-slick'
import Link from 'next/link'
import Image from 'next/image'
function Slide({ results }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    }
    return (
        <section className="slider">
            <div className="container-fluid p-0">
                <div className="slider-content">
                    <Slider {...settings}>
                        {results.map(result => (
                            <div className="slide-item" key={result.id}>
                                <div className="layer"></div>
                                <Image src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} width={230} height={320} alt={result.original_title || result.original_name} />
                                <div className="pref">
                                    <Link className='btn' href='#'>
                                        <h4 className='text-white'>{result.original_title || result.original_name}</h4>
                                    </Link>
                                    <p className='desc text-white'>movie description</p>
                                </div>
                                <div className="play">
                                    <Link href='#'>
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