import { Title } from "@solidjs/meta";
import { Container, Nav, Navbar, NavDropdown } from "solid-bootstrap";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <Navbar bg="light" expand="lg">

        <Container>

          <Navbar.Brand href="#home">Solid-Bootstrap</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">

            <Nav class="me-auto">

              <Nav.Link href="#home">Home</Nav.Link>

              <Nav.Link href="#link">Link</Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown">

                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>

              </NavDropdown>

            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>
    </main>
  );
}
