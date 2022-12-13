import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRoute } from '../../contexts/RouteContext';
import { DepsAdjectivesGroup } from './DepsAdjectivesGroup';

export const DepsAdjectives = ({ part, prev, next }) => {
    const { setRoute } = useRoute();
    const groups = Object.keys(part).map((field, i) => {
        console.log(part[field]);
        return (
            <div key={i} className='border-top border-1 my-2 pt-2'>
                {Object.keys(part[field]).map((item, i) => {
                    return <DepsAdjectivesGroup key={i} index={i} field={field} item={item} />;
                })}
            </div>
        );
    });
    return (
        <Container fluid className='mt-3'>
            <Row>
                <Col className='d-flex justify-content-center fw-bolder'>FEATURE</Col>
                <Col className='d-flex justify-content-center fw-bolder'>VALUES</Col>
                <Col className='d-flex justify-content-center fw-bolder'>DEGREE</Col>
            </Row>
            {groups}
            <Row>
                <Col className='d-flex justify-content-end fw-bolder gap-3 mb-2' xs={{ span: 1, offset: 11 }}>
                    <Button
                        className={{ disabled: !prev }}
                        variant={prev ? 'primary' : 'secondary'}
                        as={Link}
                        to={`/dependencies/${prev}`}
                        onClick={() => {
                            setRoute(`/dependencies/${prev}`);
                        }}
                    >
                        Previous
                    </Button>

                    <Button
                        className={{ disabled: !next }}
                        variant={next ? 'primary' : 'secondary'}
                        as={Link}
                        to={`/dependencies/${next}`}
                        onClick={() => {
                            setRoute(`/dependencies/${next}`);
                        }}
                    >
                        Next
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-end fw-bolder' xs={{ span: 1, offset: 11 }}>
                    <Button variant='primary'>Submit</Button>
                </Col>
            </Row>
        </Container>
    );
};
