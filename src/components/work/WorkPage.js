import React, {PureComponent} from 'react'
import './WorkPage.css'
import {slideL} from '../../transitions'

export default class WorkPage extends PureComponent {
    render() {
        return (
            <div className="workContainer"  >
                <a className="prev" routerLink="/Main" routerLinkActive="active" href="#">Home</a>
                <a routerLink="/Main" routerLinkActive="active"  href="#"><img className="logoR" src={require("../../assets/logoRed.png")} alt="" /></a>
                <a routerLink="/Main" routerLinkActive="active"  href="#"><img className="logoW" src={require("../../assets/logoWhite.png")} alt="" /></a>
                <a id="art" className="artBtn" href="#" >Art</a>
                <a id="web" className="webBtn" href="#" >Web</a>

                <div className="art" >
                    <div id="artWork" className="container" >
                    
                    </div>
                </div>
                <div className="web" >
                    <p>In Construction!</p>
                </div>
            </div>

        )
    }
}