import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRoute } from '../contexts/RouteContext';
export const Subheader = ({ section, parts }) => {
    const { route, setRoute } = useRoute();
    const links = parts.map((item) => (
        <Nav.Link
            key={item}
            as={Link}
            to={`/${section}/${item}`}
            onClick={() => {
                setRoute(`/${section}/${item}`);
            }}
            className={{ 'text-primary': route.split('/').slice(-1)[0] === item }}
        >
            {item[0].toLocaleUpperCase() + item.slice(1)}
        </Nav.Link>
    ));
    return (
        <Navbar bg='light' className='sticky-top overflow-auto no-scrollbar'>
            <Container fluid>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                    <Nav className='d-flex justify-content-between'>{links}</Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
