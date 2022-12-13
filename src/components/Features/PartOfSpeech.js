import { Button, Col, Container, Row } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useRoute } from '../../contexts/RouteContext';
import { Group } from './Group';

export const PartOfSpeech = ({ part, prev, next }) => {
    const { setRoute } = useRoute();
    const groups = Object.keys(part).map((field, i) => {
        return (
            <div key={i} className='border-top border-1 my-2 pt-2'>
                {part[field].map((item, i) => {
                    return <Group key={i} index={i} field={field} item={item} />;
                })}
                <Row>
                    <Col
                        xs={{ span: 3, offset: 3 }}
                        className='d-flex justify-content-center align-items-center gap-2 '
                    >
                        <Button
                            className='p-0 rounded-circle d-flex justify-content-center align-items-center'
                            style={{ height: '21px', width: '21px' }}
                        >
                            <Plus size={21} />
                        </Button>
                        ADD VALUE
                    </Col>
                </Row>
            </div>
        );
    });
    return (
        <Container fluid className='mt-3'>
            <Row>
                <Col className='d-flex justify-content-center fw-bolder'>FEATURE</Col>
                <Col className='d-flex justify-content-center fw-bolder'>VALUES</Col>
                <Col className='d-flex justify-content-center fw-bolder'>SALIENT</Col>
                <Col className='d-flex justify-content-center fw-bolder'>COMMENTS</Col>
            </Row>
            {groups}
            <Row>
                <Col className='d-flex justify-content-end fw-bolder gap-3 mb-2' xs={{ span: 1, offset: 11 }}>
                    <Button
                        className={{ disabled: !prev }}
                        variant={prev ? 'primary' : 'secondary'}
                        as={Link}
                        to={`/features/${prev}`}
                        onClick={() => {
                            setRoute(`/features/${prev}`);
                        }}
                    >
                        Previous
                    </Button>

                    <Button
                        className={{ disabled: !next }}
                        variant={next ? 'primary' : 'secondary'}
                        as={Link}
                        to={`/features/${next}`}
                        onClick={() => {
                            setRoute(`/features/${next}`);
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
