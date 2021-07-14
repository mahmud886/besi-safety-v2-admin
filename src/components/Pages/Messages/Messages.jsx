import React, {useEffect, useState} from 'react';
import {Container, Table} from "react-bootstrap";
import Message from "./Message";

import {apiEndpoint} from "../../../App";


// const contactMessages = [
//     {
//         name: 'Snigdho',
//         email: 'snigdho@gmail.com',
//         phone: '01670161693',
//         message: 'I Want to take a course. Which course you will prepare.'
//     },
//     {
//         name: 'Mahmud',
//         email: 'Mahmud@gmail.com',
//         phone: '01752255886',
//         message: 'I Want to take a course. Which course you will prepare.'
//     },
//     {
//         name: 'Meer',
//         email: 'meer@gmail.com',
//         phone: '01670171993',
//         message: 'I Want to take a course. Which course you will prepare.'
//     },
//     {
//         name: 'Meer2',
//         email: 'meer@gmail.com',
//         phone: '01670171993',
//         message: 'I Want to take a course. Which course you will prepare.'
//     },
// ]

const Messages = () => {

    const [messages, setMessages] = useState([]);



    useEffect(() => {
        fetch(`${apiEndpoint}/contactus`)
            .then((res) => res.json())
            .then((messages)=> {
                setMessages(messages);
            })
    },[]);

    return (
        <>
            <Container fluid>
                <div className="pt-5">
                    <h2 className=' text-center p-3 rounded h1'>
                        ALL MESSAGES FROM CONTACT PAGE
                    </h2>
                    <div className="py-5">
                        <Table striped bordered hover size='md' className='text-center'>
                            <thead>
                            <tr className='main-color'>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Messages</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                messages.map((message)=>
                                    <Message message={message} />
                                )
                            }
                            </tbody>
                        </Table>
                    </div>

                </div>
            </Container>
        </>
    );
};

export default Messages;
