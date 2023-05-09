import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

OrderForm.propTypes = {
    userData: PropTypes.object.isRequired,
    onPrev: PropTypes.func.isRequired,
    onNext: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}

function OrderForm({ userData, onPrev, onNext, onChange }) {
    let [ formData, setFormData ] = useState({...userData});

    function changeName(event) {
        let newFormData = { ...formData, name: event.target.value };
        setFormData(newFormData);
        onChange(newFormData)
    }

    function changeEmail(event) {
        let newFormData = { ...formData, email: event.target.value };
        setFormData(newFormData);
        onChange(newFormData)
    }

    function changePhone(event) {
        let newFormData = { ...formData, phone: event.target.value };
        setFormData(newFormData);
        onChange(newFormData)
    }


    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter name..." 
                        value={ formData.name } 
                        onChange={ changeName } 
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email..." 
                        value={ formData.email }
                        onChange={ changeEmail }
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone number:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter phone..." 
                        value={ formData.phone }
                        onChange={ changePhone }
                    />
                    <Form.Text className="text-muted">
                        We'll never share your phone number with anyone else.
                    </Form.Text>
                </Form.Group>
            </Form>

            <div className='d-flex'>
                <Button variant="secondary" className='me-2' onClick={ onPrev }>
                    Prev step
                </Button>

                <Button variant="primary" onClick={ onNext }>
                    Next step
                </Button>
            </div>
        </div>
    );
};

export default OrderForm;