import React, {useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import {apiEndpoint} from "../../../App";
import EnrolledList from "./EnrolledList";


const Enrolled = () => {

    const [admissions, setAdmissions] = useState([]);



    useEffect(() => {
        fetch(`${apiEndpoint}/coursebookings`)
            .then((res) => res.json())
            .then((admission)=> {
                setAdmissions(admission);
            })
    },[]);


    return (
        <>
            <Container fluid>
                <div className="py-5">
                    <h2 className=' text-center p-3 rounded h1'>
                        ALL LIST OF ENROLLMENTS
                    </h2>

                </div>
                <div className="">
                    <Table striped bordered hover size='md' className='text-center'>
                        <thead>
                        <tr className='main-color'>
                            <th>Applied For</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Transaction ID</th>
                            <th>Transaction Method</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            admissions.map((admission)=> (
                                <EnrolledList admission={admission}/>
                            ))
                        }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    );
};

export default Enrolled;
