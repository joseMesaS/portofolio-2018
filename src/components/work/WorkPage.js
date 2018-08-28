import React, {PureComponent} from 'react'
import './WorkPage.css'
import {slideR} from '../../transitions'
import {Image, Modal, Button} from 'react-bootstrap'

const artwork = [require("../../assets/artWork/port6.jpg"),require("../../assets/artWork/port8.jpg"),require("../../assets/artWork/port10.jpg"),require("../../assets/artWork/port11.jpg")
,require("../../assets/artWork/port15.gif"),require("../../assets/artWork/port16.gif"),require("../../assets/artWork/port17.gif")]
const Labels = ['Lana del Rey','Cate B.','Jude Law','Christopher Walken','Cara Delevingne','Hugh Jackman', 'Ragnar Lodbrok' ]
const webWork = [require("../../assets/web/mastermind.png"),require("../../assets/web/hangman.png"),require("../../assets/web/Uticket.png")]
const LabelsW = ['Mastermind','React-Hangman', 'U-tickets']


export default class WorkPage extends PureComponent {

    state = { artBtnStatus : '' ,
              artStatus: '',
              webBtnStatus: '', 
              webStatus: '', 
              picZoom: false, 
              urlActImg: '', 
              labelActImg: ''}

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

    renderArtCards = (url, label,index) => {
        return (
            <div className="card" key={index} onClick={() => {this.handleShow(url, label)}}>
             <img className="thumbN" src={url} alt="" />
                <div className="imageLabel">
                 <p>{label}</p>
             </div>
            </div>
        )
    }

    renderWebCards = (url, label,index) => {
        return (
            <div className="card" key={index}>
             <img className="thumbN" src={url} alt="" />
                <div className="imageLabel">
                 <p>{label}</p>
             </div>
            </div>
        )
    }

    handleClose = () => {
        console.log(this.state.picZoom)
        this.setState({ picZoom: false,  urlActImg: '' });
    }

    handleShow = (url, label) => {
        this.setState({ picZoom: true, urlActImg: url, labelActImg: label  });
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

                        <Modal show={this.state.picZoom} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{this.state.labelActImg}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Image className="zoonImg" src={this.state.urlActImg} alt="" responsive/>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.handleClose}>Close</Button>
                            </Modal.Footer>
                        </Modal>

                        {artwork.map((element,index) => this.renderArtCards(element,Labels[index],index)) }

                    
                    </div>
                </div>
                <div className={`web ${ this.state.webStatus }`}  >
                    <div id="webWork" className={`${ this.state.webStatus }`} >
                        <h3>Under construction...</h3>   
                        <div className="webCards">
                            <a href="https://mastermindjr.herokuapp.com/">{this.renderWebCards(webWork[0],LabelsW[0],0)}</a>
                            <a href="https://react-hangtheman.herokuapp.com/">{this.renderWebCards(webWork[1],LabelsW[1],1)}</a>
                            <a href="https://secret-temple-98908.herokuapp.com/">{this.renderWebCards(webWork[2],LabelsW[2],2)}</a>
                        </div>
                        <p>You can check the code and my other projects on <a href="https://github.com/joseMesaS">GitHub </a></p>
                        
                    </div>
                </div>
            </div>

        )
    }
}