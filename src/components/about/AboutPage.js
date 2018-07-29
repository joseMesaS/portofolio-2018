import React, {PureComponent} from 'react'
import {slideL} from '../../transitions'
import './AboutPage.css'

export default class AboutPage extends PureComponent { 

    navHandler = (scroll) => {
        
        this.containerInf.scrollTop = scroll
    }

    render() {
        return (
            <div className="about">
                <a className="prev" onClick={() => this.props.history.push({ pathname: '/', state: slideL })}><i className="fa fa-arrow-right"></i></a>
                <div className="navAbout">
                    <div className="headerNav">
                        <a className = "Name" href="#/Main"><p>JOSE ANTONIO MESA</p></a>
                    </div>
                    <ul className="nav" >
                        <li className="nav-item"><a onClick={()=> this.navHandler(0)} id="Who" href="#">About Me</a></li>
                        <li className="nav-item"><a onClick={()=> this.navHandler(680)} id="ProFor" href="#" >Development as developer</a></li>
                        <li className="nav-item"><a onClick={()=> this.navHandler(1335)} id="Skills" href="#">Skills</a></li>
                        <li className="nav-item"><a onClick={()=> this.navHandler(2000)} id="Contac" href="#">Contact Info</a></li>
                    </ul>
                </div>


                <div className="containerInf" ref={(div) => { this.containerInf = div; }}>
                    <div className="infoContent">
                        <div className="container">
                            <div className="page">
                                <div className="logo"></div>
                                <section className="WhoI" >
                                    <p className="sectionHeader" >Origins.</p>
                                    <p>Before I wanted to become a front-end developer, I wanted to become a few other things, of those things was electric engineering that stuck along. At that time I was living in Venezuela where I was born and raised, a beautiful land of warm people and breathtaking landscapes, and was while studying engineering that for the first time I got a grasp of computer programming and discovered my love for it.</p>
                                    <p>Right  after I achieved my degree as electric engineer I took the decision of moving to Amsterdam hopping  to learn and live new experiences, the kind of experiences that you get from living into such a multicultural and vibrating city.</p>
                                    <p>Once I got establish I started searching for the last tendencies and most uptrending thecnologies about software programing, looking for the area that would best fit to my interests. I have always feel passionate about art and graphic designing so it was just natural that I had decided to study web programming were I could incorporate my sense of designing as well.</p>
                                </section>
                            </div>
                            <div className="page">
                                <section className="ProFor" >
                                    <p className="sectionHeader">Getting into it</p>
                                    <p>The moment that  you start studying web programming by yourself can be more complicated that you were expecting, you would think that just googling "how to build a website?" will give you all the answers, and it could be  but  even if you don't know exactly what to ask you will end even more lost.</p>
                                    <p>So lets said that I start learning how to build a full-stack website using NodeJS and just learning the bases of css3, html5 and JS. After a few headaches I started getting more deep with CSS,html and javaScript then into using Jquery,Ajax,Json and some basic technologies to bring some more functionalities. Also I started learning to use Adobe Photoshop and illustrator to improve my workflow being able to design before code and render my own graphic media and for image optimization purposes. I also followed the freeCodeCamp Online course to become front-end developer and other online courses. Most recently I have been studying AngularJs 4 in typeScript looking for a better methodologies for building web applications. </p>
                                </section>
                            </div>
                            <div className="page">
                                <section className="skills">
                                    <p className="sectionHeader">Skills</p>
                                    <p className="text-left">Thecnicalls:</p>
                                    <p>Programming Languages:<span className="pinkFont">C, Python, JavaScript, Visual Basic.</span></p>
                                    <p>Markup Languagues:  <span className="pinkFont">CSS3, HTML5</span></p>
                                    <p>Frameworks:  <span className="pinkFont">Node.js, Express.js, PyQT4, jQuery,Angular.js</span></p>
                                    <br/>
                                    <p className="text-left">Hobbies:</p>
                                    <p className="pinkFont" >Drawing and Painting with Oils, charcoal, color pencils and digital with graphic tablet; Play piano and guitar, sports and crossfit, reading.</p>
                                    <br/>
                                    <p >To get some more details you can also download a copy of my <a className="pinkFont" href="../../assets/CurriculumVitae.pdf" download>CV!</a></p>
                                </section>
                            </div>
                            <div className="page">
                                <section className="contactMe ">
                                    <h1 className="contactHeader">Contact me today</h1>
                                    <p>Please feel free to reach out to me if you have any question or just to send a friendly hello.</p>
                                    <br/>
                                    <p className="sectionHeader">Contact Information</p>
                                    <br/>
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
                            <caption id="aFallsCap"class="text-right float-right">Angel Falls Canaima, Venezuela.</caption>
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
                        {/* <app-contact-form></app-contact-form> */}
                        </div>                     
                    </div>
                </div>

            </div>
        )
    }
}