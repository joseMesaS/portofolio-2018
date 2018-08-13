import React from 'react';
import { FormGroup, ControlLabel, FormControl, InputGroup, Button, Popover, OverlayTrigger } from 'react-bootstrap';
import './ContactForm.css'
import * as request from 'superagent'

const baseUrl = 'https://glacial-cove-99092.herokuapp.com' 

export default class ContactForm extends React.Component {
    state = {
        name: '',
        email: '',
        message: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()
        request
            .post(`${baseUrl}/send`)
            .send(this.state)
            .then(response => console.log(response.body))
            .catch(err => alert(err))
        
        this.setState({
            name: '',
            email: '',
            message: ''
        })    
    }

    render() {

        const popoverFocus = (
            <Popover id="popover-trigger-focus">
              <strong>Message Send!</strong>
            </Popover>
        )
          
        return (
            <form className="cForm" onSubmit={this.handleSubmit}>
                <FormGroup controlId="formBasicText" >
                
                    <ControlLabel>Full Name</ControlLabel>
                    <InputGroup>
                        <InputGroup.Addon><i className="fas fa-user-astronaut"></i></InputGroup.Addon>
                        <FormControl
                            name="name"
                            type="text"
                            value={this.state.name}
                            placeholder="Full Name"
                            onChange={this.handleChange}
                        />
                    </InputGroup>
                </FormGroup>

                <FormGroup controlId="formBasicText" >
                    <ControlLabel>Email</ControlLabel>
                    <InputGroup>
                        <InputGroup.Addon>@</InputGroup.Addon>
                        <FormControl
                            name="email"
                            type="text"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                    </InputGroup>
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Msg</ControlLabel>
                    <FormControl 
                        name="message"
                        componentClass="textarea" 
                        value={this.state.message}
                        placeholder="Msg"  
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <OverlayTrigger trigger="focus" placement="left" overlay={popoverFocus}>
                    <Button type="submit">Send</Button>
                </OverlayTrigger>

            </form>
        );
    }
}
