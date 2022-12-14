import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRoute } from '../contexts/RouteContext';
export const Header = () => {
    const sections = ['Morphological Features', 'Morphological Dependencies', 'Morphological Rules'];
    const { route, setRoute } = useRoute();
    const links = sections.map((item) => (
        <Nav.Link
            key={item}
            as={Link}
            to={`/${item.split(' ')[1].toLocaleLowerCase()}/nouns`}
            onClick={() => {
                setRoute(`/${item.split(' ')[1].toLocaleLowerCase()}/nouns`);
            }}
            className={{ 'text-primary': route.includes(`${item.split(' ')[1].toLocaleLowerCase()}`) }}
        >
            {item}
        </Nav.Link>
    ));
    return (
        <Navbar bg='light' className='sticky-top overflow-auto no-scrollbar'>
            <Container fluid>
                <Navbar.Brand as={Link} onClick={() => setRoute('/')} to='/'>
                    NLP Lexicon
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                    <Nav className='d-flex justify-content-between'>{links}</Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
