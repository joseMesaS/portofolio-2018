import React, {PureComponent} from 'react'
import './WorkPage.css'
import {slideR} from '../../transitions'

export default class WorkPage extends PureComponent {
    state = { artBtnStatus : '' , artStatus: '', webBtnStatus: '', webStatus: ''}

    handleArtView = () => {
        if(this.state.artBtnStatus === '' && this.state.artStatus === '' && this.state.webBtnStatus === '' && this.state.webStatus === ''){
            this.setState({
                artBtnStatus: 'active',
                artStatus: 'activeFI',
                webBtnStatus: 'inactive',
                webStatus: 'inactiveFI'

            })
        }else if(this.state.artBtnStatus === 'inactive' && this.state.artStatus === 'inactiveFI' && this.state.webBtnStatus === 'active' && this.state.webStatus === 'activeFI'){
            this.setState({
                artBtnStatus: 'active',
                artStatus: 'active',
                webBtnStatus: 'inactive',
                webStatus: 'inactive'
            })
        }else if(this.state.artBtnStatus === 'inactive' && this.state.artStatus === 'inactive' && this.state.webBtnStatus === 'active' && this.state.webStatus === 'active'){
            this.setState({
                artBtnStatus: 'active',
                artStatus: 'active',
                webBtnStatus: 'inactive',
                webStatus: 'inactive'

            })
        }

    }

    handleWebView = () => {
        if(this.state.artBtnStatus === '' && this.state.artStatus === '' && this.state.webBtnStatus === '' && this.state.webStatus === ''){
            this.setState({
                artBtnStatus: 'inactive',
                artStatus: 'inactiveFI',
                webBtnStatus: 'active',
                webStatus: 'activeFI'

            })
        }else if(this.state.artBtnStatus === 'active' && this.state.artStatus === 'activeFI' && this.state.webBtnStatus === 'inactive' && this.state.webStatus === 'inactiveFI'){
            this.setState({
                artBtnStatus: 'inactive',
                artStatus: 'inactive',
                webBtnStatus: 'active',
                webStatus: 'active'

            })
        }else if(this.state.artBtnStatus === 'active' && this.state.artStatus === 'active' && this.state.webBtnStatus === 'inactive' && this.state.webStatus === 'inactive'){
            this.setState({
                artBtnStatus: 'inactive',
                artStatus: 'inactive',
                webBtnStatus: 'active',
                webStatus: 'active'

            })
        }
    }

    render() {
        return (
            <div className="workContainer"  >
                <a className="prevW" onClick={() => this.props.history.push({ pathname: '/', state: slideR })} >HOME</a>
                <a href="#"><img className="logoR" src={require("../../assets/logoRed.png")} alt="" /></a>
                <a href="#"><img className="logoW" src={require("../../assets/logoWhite.png")} alt="" /></a>
                <p id="art" className={`artBtn ${ this.state.artBtnStatus }`} onClick={this.handleArtView}>Art</p>
                <p id="web" className={`webBtn ${ this.state.webBtnStatus }`} onClick={this.handleWebView}>Web</p>

                <div className={`art ${ this.state.artStatus }`}  >
                    <div id="artWork" className="container" >
                    
                    </div>
                </div>
                <div className={`web ${ this.state.webStatus }`}  >
                   
                </div>
            </div>

        )
    }
}