import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    NavLink
} from 'reactstrap';
import Webcam from 'react-webcam';
class Camera extends Component {
    state = {
        modal: false,
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };
    render() {
        return(
            <div>
            <NavLink onClick={this.toggle} href="#">
                Scan
            </NavLink>
            <Modal 
            isOpen={this.state.modal}
            toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>New Scan</ModalHeader>
                <ModalBody>
                    <Webcam width="250" height="250">
                    </Webcam>
                    <Button color="dark" style ={{marginTop: '2rem'}} block>Capture</Button>
                </ModalBody>
            </Modal>
        </div>
        );
    }
}

export default Camera;
