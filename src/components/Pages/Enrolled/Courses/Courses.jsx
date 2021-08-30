import React, {useEffect, useState} from 'react';
import {Container,Button} from "react-bootstrap";
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


    const courseDelete = (courseKey) => {
        console.log('course clicked..', courseKey );

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        fetch(`${apiEndpoint}/booknows/${courseKey}`,requestOptions)
            .then((res) => res)
            .then((course)=>{

                const newCourse = courses.filter(course => course.id !== courseKey);
                setCourses(newCourse);

            })

    }



    return (
        <>
            <Container>
                <div className="py-5">
                    <h2 className=' text-center p-3 rounded h1'>
                        ALL UPCOMING BATCH
                    </h2>
                    <div className="d-flex justify-content-end mr-3">
                       <LinkContainer to='/create-new-batch'>
                           <Button className='btn btn-main'>Create New Batch</Button>
                       </LinkContainer>
                    </div>

                    {   courses.length === 0 ? 'No record to display':
                        courses.map((course)=> (
                            <UpcomingCourse
                                course={course}
                                key={course.id}
                                courseDelete={courseDelete}
                            />
                        ))
                    }

                </div>
            </Container>
        </>
    );
};

export default Courses;
