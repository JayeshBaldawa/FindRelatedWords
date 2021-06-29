import React from "react";
import {Navbar,Container}  from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="">
              Related Words
            </Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default NavBar;