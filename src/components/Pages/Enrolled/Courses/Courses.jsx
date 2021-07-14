import React, {useEffect, useState} from 'react';
import {Container, Form, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

import UpcomingCourse from "./UpcomingCourse";

import {apiEndpoint} from "../../../../App";



const Courses = () => {


    const [courses, setCourses] = useState([]);



    useEffect(() => {
        fetch(`${apiEndpoint}/booknows`)
            .then((res) => res.json())
            .then((courses)=> {
                setCourses(courses);
            })
    },[]);




    return (
        <>
            <Container>
                <div className="py-5">
                    <h2 className=' text-center p-3 rounded h1'>
                        ALL UPCOMING BATCH
                    </h2>
                    <div className="d-flex justify-content-end">
                       <LinkContainer to='/create-new-batch'>
                           <Button className='btn btn-main'>Create New Batch</Button>
                       </LinkContainer>
                    </div>

                    {
                        courses.map((course)=> (
                            <UpcomingCourse course={course} />
                        ))
                    }

                </div>
            </Container>
        </>
    );
};

export default Courses;
