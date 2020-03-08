import React from 'react'
import './ServicesTemplate1.css'
import Testimonials from './Testimonials'
import WhyChooseUs from './WhyChooseUs'

const Services = () => {
    return (
        <div className="">
        {/* services */}
            <section className="services py-5">
                <div className="container py-lg-5 py-3">
                    <h3 className="heading text-center mb-sm-5 mb-4">Our Services</h3>
                    <div className="row service-grids">
                        <div className="col-md-4 service-grid1">
                            <i className="fa clr1 fa-video"></i>
                            <h4>Video Editing</h4>
                            <p>Duis fringilla velit ipsum dignissim init ipsum elementum. Curabitur fermentum libero acsit amet consectetur dolor sit. </p>
                        </div>
                        <div className="col-md-4 mt-md-0 mt-5 service-grid1">
                            <i className="fa clr2 fa-camera"></i>
                            <h4>Photo Editing</h4>
                            <p>Duis fringilla velit ipsum dignissim init ipsum elementum. Curabitur fermentum libero acsit amet consectetur dolor sit. </p>
                        </div>
                        <div className="col-md-4 mt-md-0 mt-5 service-grid1">
                            <i className="fa clr3 fa-images"></i>
                            <h4>Banner Desing</h4>
                            <p>Duis fringilla velit ipsum dignissim init ipsum elementum. Curabitur fermentum libero acsit amet consectetur dolor sit. </p>
                        </div>
                        <div className="col-md-4 mt-5 service-grid2 text-center">
                            <i className="fa clr3 fa-images"></i>
                            <h4>Logo Design</h4>
                            <p>Duis fringilla velit ipsum dignissim init acd ipsum elementum. Curabitur fermen libero lacsit amet consectetur dolor sit. </p>
                        </div>
                        <div className="col-md-4 mt-5 service-grid2 text-center">
                            <i className="fa clr2 fa-images"></i>
                            <h4>My text</h4>
                            <p>Duis fringilla velit ipsum dignissim init acd ipsum elementum. Curabitur fermen libero lacsit amet consectetur dolor sit. </p>
                        </div>
                        <div className="col-md-4 mt-5 service-grid2 text-center">
                            <i className="fa clr1 fa-images"></i>
                            <h4>My Text</h4>
                            <p>Duis fringilla velit ipsum dignissim init acd ipsum elementum. Curabitur fermen libero lacsit amet consectetur dolor sit. </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* services */}

            <WhyChooseUs></WhyChooseUs>
            <Testimonials></Testimonials>
        </div>
    )
}

export default Services