import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import { Group } from '../components/Group';

export const PartOfSpeech = ({ part }) => {
    const groups = Object.keys(part).map((field, i) => {
        return (
            <div key={i} className='border border-1 my-2 pt-1'>
                {part[field].map((item, i) => {
                    return <Group key={i} index={i} field={field} item={item} />;
                })}
                <Row>
                    <Col xs={3} className='d-flex justify-content-center align-items-center gap-2 py-2'>
                        <Button
                            className='p-0 rounded-circle d-flex justify-content-center align-items-center'
                            style={{ height: '32px', width: '32px' }}
                        >
                            <Plus size={26} />
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
        </Container>
    );
};
