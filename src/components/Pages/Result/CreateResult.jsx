import React from 'react';
import {Container, Form, Button} from "react-bootstrap";
import {apiEndpoint} from "../../../App";

const CreateResult = () => {


    let handleResultSubmit = (event) => {
        event.preventDefault()

        const student_name = event.target[0].value;
        const student_category = event.target[1].value;
        const student_serial_no = event.target[2].value;
        const student_certificate_no = event.target[3].value;
        const is_passed = true;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                student_name: student_name,
                student_category: student_category,
                student_serial_no: student_serial_no,
                student_certificate_no: student_certificate_no,
                is_passed: is_passed,
            }),
        };
        fetch(`${apiEndpoint}/courseresults`, requestOptions)
            // .then((response) => response.json())
            .then((data) => alert('Result Sheet Created..'));
    };


    return (
        <>
            <Container>
                <div className="py-5">
                    <h2 className=' text-center p-3 rounded h1'>
                        CREATE RESULT SHEET
                    </h2>
                </div>
                <div className="pt-2 border rounded">
                    <Form className='m-3'
                        onSubmit={handleResultSubmit}
                        >


                        <Form.Group controlId="formStudentName" className='pt-2'>
                            <Form.Label>Student Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Student Name" required />
                        </Form.Group>


                        <Form.Group controlId="formCoursesCategory" className='pt-2'>
                            <Form.Label>Courses Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter Courses Category " required/>
                        </Form.Group>


                        <Form.Group controlId="formStudentSerialNumber" className='pt-2'>
                            <Form.Label>Student Serial Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Student Serial Number" required/>
                        </Form.Group>


                        <Form.Group controlId="formStudentCertificateNumber" className='pt-2'>
                            <Form.Label>Student Certificate Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Student Certificate Number" required/>
                        </Form.Group>



                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Please Re-check" className='text-danger' required/>
                        </Form.Group>


                        <Button className='btn btn-main btn-md' type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
};

export default CreateResult;
