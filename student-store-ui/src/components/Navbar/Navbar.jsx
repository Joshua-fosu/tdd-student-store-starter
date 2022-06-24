import * as React from "react";
import {
  Navbar,
  Container,
  Form,
  Nav,
  NavDropdown,
  FormControl,
  Button,
} from "react-bootstrap";
import { Search_Navbar } from "../sub_navbar/Sub_navbar";
import { Link } from "react-router-dom";

export default function Navvbar({ queryProduct, setQueryProduct }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/">
          <Navbar.Brand href="#">My Store</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/">
              <Nav.Link href="/">Home</Nav.Link>
            </Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#contact">Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Search_Navbar
              queryProduct={queryProduct}
              setQueryProduct={setQueryProduct}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
