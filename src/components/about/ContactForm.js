import React from 'react';
import { FormGroup, ControlLabel, FormControl, InputGroup, Button } from 'react-bootstrap';
import './ContactForm.css'
export default class ContactForm extends React.Component {
    state = {
        name: 'Composed TextField',
    };

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
       
        return (
            <form className="cForm">
                <FormGroup controlId="formBasicText" >
                
                    <ControlLabel>Full Name</ControlLabel>
                    <InputGroup>
                        <InputGroup.Addon><i class="fas fa-user-astronaut"></i></InputGroup.Addon>
                        <FormControl
                            type="text"
                            value={this.state.value}
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
                            type="text"
                            value={this.state.value}
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                    </InputGroup>
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Msg</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="Msg" />
                </FormGroup>

                <Button>Send</Button>

            </form>
        );
    }
}
