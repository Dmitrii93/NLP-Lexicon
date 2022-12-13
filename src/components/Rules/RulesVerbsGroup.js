import { Col, Form, Row } from 'react-bootstrap';

export const RulesVerbsGroup = ({ number, person, tense, verbForm }) => {
    return (
        <Row className='align-items-center mb-1'>
            <Col className='d-flex justify-content-center'>
                {person === '1' &&
                    tense === 'past' &&
                    verbForm === 'gerund' &&
                    `${number[0].toUpperCase()}` + number.slice(1)}
            </Col>
            <Col className='d-flex justify-content-center'>{person}</Col>
            <Col className='d-flex justify-content-center'>{tense}</Col>
            <Col className='d-flex justify-content-center'>{verbForm}</Col>
            <Col className='d-flex justify-content-center'>
                <Form.Control as='textarea' rows={1} />
            </Col>
            <Col className='d-flex justify-content-center'>
                <Form.Control as='textarea' rows={1} />
            </Col>
            <Col className='d-flex justify-content-center'>
                <Form.Control as='textarea' rows={1} />
            </Col>
            <Col className='d-flex justify-content-center'>
                <Form.Control as='textarea' rows={1} />
            </Col>
            <Col className='d-flex justify-content-center'>
                <Form.Control as='textarea' rows={1} />
            </Col>
            <Col className='d-flex justify-content-center'>
                <Form.Control as='textarea' rows={1} />
            </Col>
            <Col className='d-flex justify-content-center'>
                <Form.Control as='textarea' rows={1} />
            </Col>
        </Row>
    );
};
