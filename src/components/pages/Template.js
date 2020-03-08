import React from 'react'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import  Footer  from '../components/footer/Footer'
// import '../App.css'

export default function Template() {
    const portfolioLinks = [
        {
            title: "window",
            caption: "Photography"
        },
        {
            title: "window",
            caption: "Photography"
        },
        {
            title: "window",
            caption: "Photography"
        },
        {
            title: "window",
            caption: "Photography"
        },
        {
            title: "window",
            caption: "Photography"
        },
    ]
    return (
        <div className="App">
            {/* <!-- Navigation --> */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>

            {/* <!-- Header --> */}
            <header className="masthead">
                <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in">Welcome To Our Studio!</div>
                    <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
                    <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
                </div>
                </div>
            </header>

            {/* <!-- Services --> */}
            <section className="page-section" id="services">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">E-Commerce</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">Responsive Design</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">Web Security</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
                </div>
            </section>

           <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
           
            {/* <!-- Team --> */}
            <section className="bg-light page-section" id="team">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="img/team/1.jpg" alt=""/>
                        <h4>Kay Garland</h4>
                        <p className="text-muted">Lead Designer</p>
                        <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                            <a href="#">
                            <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                            <i className="fa fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                            <i className="fa fa-linkedin-in"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="img/team/2.jpg" alt=""/>
                        <h4>Larry Parker</h4>
                        <p className="text-muted">Lead Marketer</p>
                        <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                            <a href="#">
                            <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                            <i className="fa fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                            <i className="fa fa-linkedin-in"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-sm-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="img/team/3.jpg" alt=""/>
                        <h4>Diana Pertersen</h4>
                        <p className="text-muted">Lead Developer</p>
                        <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                            <a href="#">
                            <i className="fa fa-twitter"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                            <i className="fa fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                            <i className="fa fa-linkedin-in"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                    <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                    </div>
                </div>
                </div>
            </section>

            {/* <!-- Clients --> */}
            <section className="py-5">
                <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                    <a href="#">
                        <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
                    </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <a href="#">
                        <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
                    </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <a href="#">
                        <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
                    </a>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <a href="#">
                        <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
                    </a>
                    </div>
                </div>
                </div>
            </section>



            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}
