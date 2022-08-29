import React from 'react';
import icon1 from '../assets/images/icon-1.png';
import icon2 from '../assets/images/icon-2.png';
import icon3 from '../assets/images/icon-3.png';
import icon4 from '../assets/images/icon-4.png';
import icon5 from '../assets/images/icon-5.png';
import icon6 from '../assets/images/icon-6.png';

export default function About() {
    return (
        <React.Fragment>
            <nav className="navbar">
                <a href="index.html"> <i className="fas fa-home"></i> <span>home</span> </a>
                <a href="about.html"> <i className="fas fa-user"></i> <span>about</span> </a>
                <a href="portfolio.html"> <i className="fas fa-briefcase"></i> <span>portfolio</span> </a>
                <a href="blogs.html"> <i className="fas fa-blog"></i> <span>blogs</span> </a>
                <a href="contact.html"> <i className="fas fa-address-book"></i> <span>contact</span> </a>
            </nav>



            <section className="about">

                <h1 className="heading"> about <span>me</span> </h1>

                <div className="row">

                    <div className="info-container">

                        <h1>personal info</h1>

                        <div className="box-container">

                            <div className="box">
                                <h3> <span>name : </span> sana shaikh </h3>
                                <h3> <span>age : </span> 22 </h3>
                                <h3> <span>email : </span> sanashaikh@gmail.com </h3>
                                <h3> <span>address : </span> mumbai, india - 400104 </h3>
                            </div>

                            <div className="box">
                                <h3> <span>freelance : </span> available </h3>
                                <h3> <span>skill : </span> front-end </h3>
                                <h3> <span>experience : </span> 2 years </h3>
                                <h3> <span>language : </span> hindi, english </h3>
                            </div>

                        </div>

                        <a href="#" className="btn"> download CV <i className="fas fa-download"></i> </a>

                    </div>

                    <div className="count-container">

                        <div className="box">
                            <h3>2+</h3>
                            <p>years of experience</p>
                        </div>

                        <div className="box">
                            <h3>450+</h3>
                            <p>happy clients</p>
                        </div>

                        <div className="box">
                            <h3>390+</h3>
                            <p>project completed</p>
                        </div>

                        <div className="box">
                            <h3>10+</h3>
                            <p>awards won</p>
                        </div>

                    </div>

                </div>

            </section>



            <section className="skills">

                <h1 className="heading"> <span>my</span> skills </h1>

                <div className="box-container">
                    <div className="box">
                        <img src={icon1} />
                        <h3>html</h3>
                    </div>
                    <div className="box">
                        <img src={icon2} />
                        <h3>css</h3>
                    </div>
                    <div className="box">
                        <img src={icon3} />
                        <h3>javascript</h3>
                    </div>
                    <div className="box">
                        <img src={icon4} />
                        <h3>sass</h3>
                    </div>
                    <div className="box">
                        <img src={icon5} />
                        <h3>jquery</h3>
                    </div>
                    <div className="box">
                        <img src={icon6} />
                        <h3>react.js</h3>
                    </div>
                </div>

            </section>



            <section className="education">

                <h1 className="heading"> <span>my</span> education </h1>

                <div className="box-container">

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2015 - 2016</span>
                        <h3>front-end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2016 - 2017</span>
                        <h3>front-end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2017 - 2018</span>
                        <h3>front-end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2018 - 2019</span>
                        <h3>front-end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2019 - 2020</span>
                        <h3>front-end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-graduation-cap"></i>
                        <span>2020 - 2021</span>
                        <h3>front-end development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
                    </div>

                </div>

            </section>

        </React.Fragment>
    )
}
