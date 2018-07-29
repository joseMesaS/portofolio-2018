import React, {PureComponent} from 'react'
import './MainPage.css'
import {slideR} from '../../transitions'

export default class MainPage extends PureComponent {
  state = {
    scrollPos: 0
  }

  scrollHandler = (e) => {
    this.setState({
      scrollPos: e.target.scrollTop
    })
  }

  render() {

    return (
      <div className="parallax" onScroll={this.scrollHandler}>

        <div className="bk-intro layer">
        </div>

        <div className="front-intro layer">
          <div className="intro-body">
            <div className="logoMain"></div>

            <a className="aboutBtn" onClick={() => this.props.history.push({ pathname: '/aboutMe', state: slideR })} >ABOUT</a>
            <a className="workBtn" href="#/Work">WORK</a>

            <div className="heading-ph">
              <p className="intro-heading" >JOSE ANTONIO MESA</p>
            </div>
          </div>


          <div className="intro-footer">
            <hr/>
            <p className="footerCont">Full Stack Developer / Electrical Engineer / Graphic Artist. </p>
          </div>

          <div className="content">
            <img  className="JApic" src={require("../../assets/JoseMesa.gif")} alt=""/>
            <div className={`content-body ${ (this.state.scrollPos > 400 ) && 'active'}`} >
              <div className="missionHeader">
                  <h1 >MISSION</h1>
              </div>

              <div className="mission">
                <p>Hi there, I'm Jose. <br/>And I'm a Web developer aspirant. My goal is to listen
                and observe what my clients wants and to understand the essence of what they trully need, and to
                give them back a concept that hopefully would surpass their spectations. A concept designed to bring
                together beautifull aesthetics, great User Experiece and the latest features and technologies that takes full
                advantages of the website capabilities. <br/>I want to master this practices and hopefully turn them
                into a craft.</p>
              </div>

            </div>

            <div className="content-footer active" >
             
              <a className="social" href=""><i className="fa fa-github-alt fa-2x" ></i></a>
              <a className="social" href="https://www.linkedin.com/in/jose-antonio-mesa-solorzano/"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
              

            </div>

          </div>

        </div>

        
      </div>

    )
  
  
  }
}

