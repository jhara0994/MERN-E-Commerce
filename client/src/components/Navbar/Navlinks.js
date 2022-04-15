import React, { useState } from 'react';
import {motion} from 'framer-motion';
import Auth from '../../utils/auth';
import { Nav, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../SignupForm/SignupForm';
import LoginForm from '../LoginForm/LoginForm';


const Navlinks = (props) => {
    const from = {opacity:0, y: 50}
    const to = {opacity:1, y: 0}
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <ul>
            <motion.li
            initial = {from}
            animate = {to}
             onClick={()=>props.mobile && props.closeMenu()}>
                <a href="#home">Home</a>
            </motion.li>
            <motion.li
            initial = {from}
            animate = {to}
            transition = {{delay: .1}}
            onClick={()=>props.mobile && props.closeMenu()}>
                <a href="#dashboard">Dashboard</a>
            </motion.li>
            <motion.li 
            initial = {from}
            animate = {to}
            transition = {{delay: .2}}
            onClick={()=>props.mobile && props.closeMenu()}>
                <a href="#search">Search</a>
            </motion.li>
            <motion.li 
            initial = {from}
            animate = {to}
            transition = {{delay: .2}}
            onClick={()=>props.mobile && props.closeMenu()}>
                <a href="#contact">Contact</a>
            </motion.li>
            {Auth.loggedIn() ? (
            <motion.li 
            initial = {from}
            animate = {to}
            transition = {{delay: .2}}
            onClick={()=>props.mobile && props.closeMenu()}>
                <p onClick={Auth.logout}>Logout</p>
            </motion.li>
            ): 
            (<motion.li 
                initial = {from}
                animate = {to}
                transition = {{delay: .2}}
              >
                    <p onClick={() => setShowModal(true)}>Login/Sign Up</p>
                </motion.li>)}
            
        </ul>
        <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
        </>
    );
}

export default Navlinks;