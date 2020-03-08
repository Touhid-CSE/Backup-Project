import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import users from './TestimonialsData'
import './Testimonials.css'

export default function Testimonials() {

    let settings = {
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
    
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },

            {
                breakpoint: 667,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div>
            <section className="testimonials py-5">
                <div className="container py-md-3">
                    <h3 className="heading text-capitalize mb-sm-5 mb-4 text-center">Testimonials</h3>
                    <div className="">
                        <div className="testimonial-item-list">
                            {
                                users.length === 0  ? (
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                ):(
                                    <Slider {...settings}>
                                        { users.map(user => (
                                                <div className="testimonial-item" key={user.id}>
                                                    <div className="feedback-info">
                                                        <div className="feedback-top p-4">
                                                            <p> {user.message} </p>
                                                        </div>
                                                        <div className="feedback-grids">
                                                            <div className="feedback-img">
                                                                <img src={user.imgUrl} className="img-fluid" alt="not found" />
                                                            </div>
                                                            <div className="feedback-img-info">
                                                                <h5>{user.name}</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )) }
                                    </Slider>
                                ) 
                            }
                           
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
