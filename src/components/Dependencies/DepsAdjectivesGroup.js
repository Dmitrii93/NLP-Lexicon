import { Col, Form, Row } from 'react-bootstrap';

export const DepsAdjectivesGroup = ({ field, item, index }) => {
    return (
        <Row className='align-items-center mb-1'>
            <Col className='d-flex justify-content-center'>
                {index === 0 && `${field[0].toUpperCase()}` + field.slice(1)}
            </Col>
            <Col className='d-flex justify-content-center'>{item}</Col>
            <Col className='d-flex justify-content-center'>
                <Form.Control type='number' />
            </Col>
        </Row>
    );
};
