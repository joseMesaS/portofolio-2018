import React, {PureComponent} from 'react'
import {slideL} from '../../transitions'
import './AboutPage.css'
import ContactForm from './ContactForm'

export default class AboutPage extends PureComponent { 

    navHandler = (scroll) => {
       
        this.containerInf.scrollTop = scroll
    }

    render() {
        return (
            <div className="about">
                <a className="prevAb" onClick={() => this.props.history.push({ pathname: '/', state: slideL })}><i className="fa fa-arrow-right"></i></a>
                <div className="navAbout">
                    <div className="headerNav">
                    <div className="Name" onClick={() => this.props.history.push({ pathname: '/', state: slideL })}><p>JOSE ANTONIO MESA</p></div>
                    </div>
                    <ul className="navi" >
                        <li className="navi-item"><p onClick={()=> this.navHandler(0)} id="Who" >About Me</p></li>
                        <li className="navi-item"><p onClick={()=> this.navHandler(680)} id="ProFor" >Developer Road</p></li>
                        <li className="navi-item"><p onClick={()=> this.navHandler(1335)} id="Skills">Skills</p></li>
                        <li className="navi-item"><p onClick={()=> this.navHandler(2000)} id="Contac">Contact Info</p></li>
                    </ul>
                </div>


                <div className="containerInf" ref={(div) => { this.containerInf = div; }}>
                    <div className="infoContent">
                        <div className="containerC">
                            <div className="page">
                                <div className="logo"></div>
                                <section className="WhoI" >
                                    <h3>About Me</h3>
                                    <p>Before becoming a developer, I had a few other aspirations but was electrical engineering that stuck along with me. At that time, I was living in Venezuela where I was born, a beautiful country, full of warm people, unbelievable landscapes, and arepas (crazy good food you got to try it), and was while studying engineering that for the first time I got a little taste of code and discovered my love for it.</p>
                                    <p>Right after I achieved my degree, I decided to move to Amsterdam looking for a new adventure, looking to learn and live new experiences, the kind that you get from such a multicultural and vibrant city.</p>
                                    <p>Since then I have been working in a few restaurants as line cook and occasionally as chef de partie. However, I never lost the sight from my goals, becoming a developer.</p>
                                </section>
                            </div>
                            <div className="page">
                                <section className="ProFor" >
                                    <h3>Getting into it</h3>
                                    <p>Trying to learn web programming by yourself can be harder than you expected, you think that by just googling "how to build a website?" will give you the answer. Boy, was I wrong because truth is that if you don't know exactly how to ask something, you will end up even more lost.</p>
                                    <p>So lets said that I start following this online course how to build a full-stack website using NodeJS without even knowing the bases of CSS, HTML and JS, yeah... I was pretty lost indeed. So after a few headaches and some bumps in the road, I started learning the bases, together with some technologies like JQuery, Ajax, and AngularJs.</p>
                                    <p>I started using Photoshop and illustrator to improve my workflow being able to design before code and render my own graphic media.</p>
                                    <p>Went through books, tutorials, videos, blogs, followed some online bootcamps, prayed to the gods. And at some point, I was kind of there but not entirely. The more I learned the more aware I was of my ignorance.</p>
                                    <p>Then I found this awesome Programming academy, Codaisseur. 10 weeks of intensive learning, to become a Full Stack developer and more than learning some of the best technologies and tools for web development, I learned how much I love to code. Now hungry for some more I'm in the hunt for a job to start coding for real.</p>
                                </section>
                            </div>
                            <div className="page">
                                <section className="skills">
                                    <h3>Skills</h3>
                                    <p className="text-left">Latest Stack</p>
                                    <p>Base: <span className="pinkFont"> JavaScript / CSS3 / HTML5 / TypeScript.</span></p>
                                    <p>Front-end Frameworks:  <span className="pinkFont">ReactJs / Redux / AngularJs</span></p>
                                    <p>Back-end Frameworks:  <span className="pinkFont">Node.js / Express.js / GraphQL / Koa / SQL Databases </span></p>
                                    <p>Tools:  <span className="pinkFont"> Git collaboration / Docker / Adobe Photoshop / Adobe Illustrator</span></p>
                                    <br/>
                                    <p className="text-left">Hobbies:</p>
                                    <p className="pinkFont" >Painting with oils, charcoal and color pencils. Playing piano and guitar, crossfit, reading and food.</p>
                                    <br/>
                                    <p >To get some more details you can also download a copy of my <a className="pinkFont" href={require("../../assets/cvJose2018.pdf")}download>CV!</a></p>
                                </section>
                            </div>
                            <div className="page">
                                <section className="contactMe ">
                                    <h1 className="contactHeader">Contact me today</h1>
                                    <p>Please feel free to reach out to me if you have any question or just to send a friendly hello.</p>
                                    <br className="br"/>
                                    <h3>Contact Information</h3>
                                    <br className="br"/>
                                    <small className="personalInfo">joseantoniomesa.com <br/>
                                    Jan Eversenstraat 26 1 <br/>
                                    1065 EC AMSTERDAM <br/>
                                    +31-6-12400595 <br/>
                                    jose.mesa.solorano@gmail.com</small>
                                </section>
                            </div>
                           
                        </div>
                    </div>


                    <div className="media">
                        <div className="page front">
                            <div className="aFallsW " alt= "Angel Falls"></div>
                            <div id="aFallsCap" className="text-right float-right">Angel Falls Canaima, Venezuela.</div>
                        </div>

                        <div className="page front">
                            <div className="Iamsterdam">
                                <img className="plane" src={require("../../assets/plane.png")} alt=""/>
                                <div className="ams text-right ">
                                <p className="red">I am</p>
                                <p>sterdam</p>
                                </div>
                            </div>

                        </div>

                        <div className="page front">
                            <img className="tablet" src={require("../../assets/tablet.png")} alt=""/>
                            <img className="mask" src={require("../../assets/mask.png")} alt=""/>
                        </div>

                        <div id="cont" className="page front">
                        <ContactForm></ContactForm>
                        </div>                     
                    </div>
                </div>

            </div>
        )
    }
}