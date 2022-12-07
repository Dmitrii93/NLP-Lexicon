import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { parts } from '../mocks/parts.mock';
export const Header = () => {
    const links = Object.keys(parts).map((part, i) => (
        <Nav.Link key={i} as={Link} to={`/${part}`}>
            {part[0].toUpperCase() + part.slice(1)}
        </Nav.Link>
    ));
    return (
        <Navbar bg='light'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>
                    NLP Lexicon
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='w-100 d-flex justify-content-between'>{links}</Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
