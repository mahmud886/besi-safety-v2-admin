import React from 'react';
import {Button, Container, Form,} from "react-bootstrap";

import {apiEndpoint} from "../../../../App";

const CreateCourse = () => {

    const createCourse = (event) => {
        event.preventDefault();
        const reg_last_date = event.target[0].value;
        const course_title = event.target[1].value;
        const class_type = event.target[2].value;
        const class_starting_date = event.target[3].value;
        const class_location = event.target[4].value;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                reg_last_date: reg_last_date,
                course_title: course_title,
                class_type: class_type,
                class_starting_date: class_starting_date,
                class_location: class_location,
            }),
        };
        fetch(`${apiEndpoint}/booknows`, requestOptions)
            // .then((response) => response.json())
            .then((data) => alert('Course Created'));
    }




    return (
        <>
            <Container>
                <div className="">
                    <div className="py-5">
                        <h2 className=' text-center p-3 rounded h1'>
                            CREATE UPCOMING BATCH
                        </h2>
                        <Form className='border p-4 rounded' onSubmit={createCourse}>

                            {/*/!* 01 Month *!/*/}
                            {/*<Form.Group controlId="formMonth">*/}
                            {/*    <Form.Label>Month</Form.Label>*/}
                            {/*    <Form.Control type="month"  placeholder="dd-mm-yyyy" />*/}
                            {/*</Form.Group>*/}

                            {/* 02 Date */}
                            <Form.Group controlId="formDate">
                                <Form.Label>End Date of Registration</Form.Label>
                                <Form.Control type="date" placeholder="dd-MM-yyyy" locate='pt-br' format='dd-MM-yyyy' />
                            </Form.Group>

                            {/* 03 Title*/}
                            <Form.Group controlId="formTitle">
                                <Form.Label>Course Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Course title" />
                            </Form.Group>

                            {/* 04 Class Type*/}
                            <Form.Group controlId="formClassType">
                                <Form.Label>Class Types</Form.Label>
                                <Form.Control type="text" placeholder="Enter Course Class Type" />
                            </Form.Group>

                            {/* 05 Start Time*/}
                            <Form.Group controlId="formClassType">
                                <Form.Label>Class Start Date</Form.Label>
                                <Form.Control type="date" placeholder="dd-MM-yyyy" locate='pt-br' format='dd-MM-yyyy' />
                            </Form.Group>

                            {/* 06 Location*/}
                            <Form.Group controlId="formClassType">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" placeholder="Enter location" />
                            </Form.Group>



                            <Button  type="submit" className='btn btn-main'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CreateCourse;
