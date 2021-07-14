import React, {useEffect, useState} from 'react';
import {Card, Container, ListGroup, ListGroupItem} from "react-bootstrap";
import {apiEndpoint} from "../../../App";

import {useParams} from "react-router";

const EnrolledDetails = () => {

    const {id} = useParams();

    const [enrolleds, setEnrolleds] = useState([]);



    useEffect(() => {
        fetch(`${apiEndpoint}/coursebookings/${id}`)
            .then((res) => res.json())
            .then((enrolleds)=> {
                setEnrolleds(enrolleds);
            })
    },[id]);

    const { applied_for, name, mobile, fathers_name, fathers_mobile,mothers_name , mothers_mobile,  gender, email, marital_status, date_of_birth,
        blood_group,  nationality, religion, present_address, permanent_address, educational_qualification, institution, passing_year, gpa, major,
        total_fees, discount, reference, transaction_id, mobile_wallet_provider, created_at
    } = enrolleds;

    return (
        <>
            <Container>
                <div className="py-5">
                    <h2 className=' text-center p-3 rounded h1'>
                        ENROLLED DETAILS PAGE
                    </h2>
                </div>
                <div className="border rounded p-3">
                        <Card>
                            <Card.Header className='text-center main-color'>Student Details</Card.Header>
                            <ListGroup variant='flush'>

                                <ListGroupItem> Date : {created_at}</ListGroupItem>
                                <ListGroupItem> Applied For : {applied_for}</ListGroupItem>

                                <ListGroupItem> Name : {name}</ListGroupItem>
                                <ListGroupItem> Mobile : {mobile}</ListGroupItem>
                                <ListGroupItem> Fathers Name : {fathers_name}</ListGroupItem>
                                <ListGroupItem> Fathers Mobile : {fathers_mobile}</ListGroupItem>
                                <ListGroupItem> Mothers Name : {mothers_name}</ListGroupItem>
                                <ListGroupItem> Mothers Mobile : {mothers_mobile}</ListGroupItem>
                                <ListGroupItem> Gender : {gender}</ListGroupItem>
                                <ListGroupItem> Email : {email}</ListGroupItem>
                                <ListGroupItem> Marital Status : {marital_status}</ListGroupItem>
                                <ListGroupItem> Date of Birth : {date_of_birth}</ListGroupItem>
                                <ListGroupItem> Blood Group : {blood_group}</ListGroupItem>
                                <ListGroupItem> Nationality : {nationality}</ListGroupItem>
                                <ListGroupItem> Religion : {religion}</ListGroupItem>
                                <ListGroupItem> Present Address : {present_address}</ListGroupItem>
                                <ListGroupItem> Permanent Address : {permanent_address}</ListGroupItem>
                                <ListGroupItem> Name of Exam : {educational_qualification}</ListGroupItem>
                                <ListGroupItem> Name of Institute : {institution}</ListGroupItem>
                                <ListGroupItem> Year : {passing_year}</ListGroupItem>
                                <ListGroupItem> Grade : {gpa}</ListGroupItem>
                                <ListGroupItem> Group : {major}</ListGroupItem>
                                <ListGroupItem> Total Payment : {total_fees}</ListGroupItem>
                                <ListGroupItem> Discount : {discount}</ListGroupItem>
                                <ListGroupItem> Reference : {reference}</ListGroupItem>
                                <ListGroupItem> Transaction ID : {transaction_id}</ListGroupItem>
                                <ListGroupItem> Transaction Method : {mobile_wallet_provider}</ListGroupItem>

                            </ListGroup>
                        </Card>
                </div>

            </Container>
        </>
    );
};

export default EnrolledDetails;
