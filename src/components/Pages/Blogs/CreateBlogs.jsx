import React from 'react';
import {Container, Form, Button} from "react-bootstrap";



import {apiEndpoint} from "../../../App";

const CreateBlogs = () => {
    // const [validated, setValidated] = useState(false);
    //
    // let handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

        // setValidated(true);

    let handleSubmit = (event) => {
        event.preventDefault()

        const title = event.target[0].value;
        const description = event.target[1].value;
        const thumbnail_small = event.target[2].value;
        const thumbnail_big = event.target[2].value;
        const created_by = 'ADMIN';


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                description: description,
                thumbnail_small: thumbnail_small,
                thumbnail_big: thumbnail_big,
                created_by: created_by,
            }),
        };
        fetch(`${apiEndpoint}/blogposts`, requestOptions)
            // .then((response) => response.json())
            .then((data) => alert('Blog Created'));
    };

    return (
        <>
            <Container>
                <div className="">
                    <div className="pt-5">
                        <h2 className=' text-center p-3 rounded h1'>
                            ALL MESSAGES FROM CONTACT PAGE
                        </h2>
                    </div>

                    {/*POST*/}

                    <Form
                        noValidate
                        // validated={validated}
                        onSubmit={handleSubmit}
                        >

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Blog Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Blog Title" required />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formDescription">
                            <Form.Control
                                as="textarea"
                                placeholder="Enter Blogs Descriptions"
                                style={{ height: '400px' }} required
                            />
                            <Form.Control.Feedback>
                                Looks good!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Input Blog Image</Form.Label>
                            <Form.Control type="file" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" required />
                        </Form.Group>

                        <Button  type="submit" className='btn btn-main btn-md'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
};

export default CreateBlogs;
