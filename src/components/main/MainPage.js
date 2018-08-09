import React, {PureComponent} from 'react'
import './MainPage.css'
import {slideR, slideL} from '../../transitions'

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

            <p className="aboutBtn" onClick={() => this.props.history.push({ pathname: '/aboutMe', state: slideR })} >ABOUT</p>
            <p className="workBtn" onClick={() => this.props.history.push({ pathname: '/work', state: slideL })}>WORK</p>

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
                <p className="higl"><span className="openP">Hey there I'm Jose </span> and I recently graduated as a Full Stack Developer from
                  Codaisseur Academy <span className="openP">:&#123;)</span>, where I've learnt some of the most wicked and cuting edge JavaScript technologies.
                  Having a background as Electrical Engineer, allowed me to develop a great 
                  ability for solving problems. Combined with my
                  passion for exploring new things and challenging myself, I’m ready to take the
                  next step in my career as a web developer.</p>
              </div>

            </div>

            <div className="content-footer active" >
             
              <a className="social" href=""><i className="fab fa-github-alt fa-2x"></i></a>
              <a className="social" href="https://www.linkedin.com/in/jose-antonio-mesa-solorzano/"><i className="fab fa-linkedin fa-2x"></i></a>
              

            </div>

          </div>

        </div>

        
      </div>

    )
  
  
  }
}

