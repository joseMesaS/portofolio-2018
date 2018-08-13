import React, {PureComponent} from 'react'
import './WorkPage.css'
import {slideR} from '../../transitions'
const artwork = [require("../../assets/artWork/port6.jpg"),require("../../assets/artWork/port8.jpg"),require("../../assets/artWork/port10.jpg"),require("../../assets/artWork/port11.jpg")
,require("../../assets/artWork/port15.gif"),require("../../assets/artWork/port16.gif"),require("../../assets/artWork/port17.gif")]
const Labels = ['Lana del Rey','Cate B.','Jude Law','Christopher Walken','Cara Delevingne','Hugh Jackman', 'Ragnar Lodbrok' ]

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

    renderCards = (url, label,index) => {
        return (
            <div className="card" key={index}>
             <img className="thumbN" src={url} alt="" />
                <div className="imageLabel">
                 <p>{label}</p>
             </div>
            </div>
        )
    }



    render() {
        return (
            <div className="workContainer"  >
                <p className="prevW" onClick={() => this.props.history.push({ pathname: '/', state: slideR })} >HOME</p>
                <div><img className="logoR" src={require("../../assets/logoRed.png")} alt="" /></div>
                <div ><img className="logoW" src={require("../../assets/logoWhite.png")} alt="" /></div>
                <p id="art" className={`artBtn ${ this.state.artBtnStatus }`} onClick={this.handleArtView}>Art</p>
                <p id="web" className={`webBtn ${ this.state.webBtnStatus }`} onClick={this.handleWebView}>Web</p>

                <div className={`art ${ this.state.artStatus }`}  >
                    <div id="artWork" className={`${ this.state.artStatus }`} >
                        {artwork.map((element,index) => this.renderCards(element,Labels[index],index)) }

                    
                    </div>
                </div>
                <div className={`web ${ this.state.webStatus }`}  >
                    <div id="webWork" className={`${ this.state.webStatus }`} >
                        <h3>Under construction...</h3>  
                        <p>You can check my <a href="https://github.com/joseMesaS">GitHub </a> instead </p>    
                    </div>
                </div>
            </div>

        )
    }
}