import React, {useEffect, useState} from 'react';
import {Button, Card, Container, Table} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import {apiEndpoint} from "../../../App";
import Result from "./Result";

const Results = () => {


    const [results, setResults] = useState([]);

    useEffect(()=>{
        fetch(`${apiEndpoint}/courseresults`)
            .then((res)=> res.json())
            .then((results)=> {
                setResults(results)
            });
    }, []);


    return (
        <>
            <Container>
                <div className="py-3">
                    <h2 className=' text-center p-3 rounded h1'>
                        RESULT PAGE
                    </h2>
                </div>
                <div className="d-flex justify-content-end pb-3">

                   <LinkContainer to='/create-result-sheet'>
                       <Button className='btn btn-main'>Create Result Sheet</Button>
                   </LinkContainer>
                </div>

                <div className="border rounded">
                    <Card>
                        <Card.Header className='main-color text-center'>ALL RESULT SHEET</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover size="lg" className='text-center' >
                                <thead>
                                <tr className='h5'>
                                    <th>NO</th>
                                    <th>STUDENT NAME</th>
                                    <th>COURSE CATEGORY</th>
                                    <th>STUDENT SERIAL NO</th>
                                    <th>STUDENT CERTIFICATE NO</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    results.map((result)=>(
                                        <Result result ={result}/>
                                    ))
                                }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </div>


            </Container>
        </>
    );
};

export default Results;
