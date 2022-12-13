import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRoute } from '../../contexts/RouteContext';
import { RulesAdjectivesGroup } from './RulesAdjectivesGroup';

export const RulesAdjectives = ({ part, prev, next }) => {
    const { setRoute } = useRoute();
    const groups = Object.keys(part).map((field) => {
        return (
            <div key={field} className='border-top border-1 my-2 pt-2'>
                <RulesAdjectivesGroup field={field} />
            </div>
        );
    });
    return (
        <Container fluid className='mt-3'>
            <Row>
                <Col className='d-flex justify-content-center fw-bolder text-center'>DEGREE</Col>
                <Col className='d-flex justify-content-center fw-bolder text-center'>EXAMPLE WORDFORM</Col>
                <Col className='d-flex justify-content-center fw-bolder text-center'>EXAMPLE LEMMA</Col>
                <Col className='d-flex justify-content-center fw-bolder text-center'>RULES - SAME AS LEMMA?</Col>
                <Col className='d-flex justify-content-center fw-bolder text-center'>RULES - PREFIX</Col>
                <Col className='d-flex justify-content-center fw-bolder text-center'>RULES - SUFIX</Col>
                <Col className='d-flex justify-content-center fw-bolder text-center'>RULES - OTHER</Col>
                <Col className='d-flex justify-content-center fw-bolder text-center'>EXCEPTIONS TO RULE</Col>
            </Row>
            {groups}
            <Row>
                <Col className='d-flex justify-content-end fw-bolder gap-3 mb-2' xs={{ span: 1, offset: 11 }}>
                    <Button
                        className={{ disabled: !prev }}
                        variant={prev ? 'primary' : 'secondary'}
                        as={Link}
                        to={`/rules/${prev}`}
                        onClick={() => {
                            setRoute(`/rules/${prev}`);
                        }}
                    >
                        Previous
                    </Button>

                    <Button
                        className={{ disabled: !next }}
                        variant={next ? 'primary' : 'secondary'}
                        as={Link}
                        to={`/rules/${next}`}
                        onClick={() => {
                            setRoute(`/rules/${next}`);
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
