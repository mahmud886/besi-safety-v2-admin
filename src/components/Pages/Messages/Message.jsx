import React from 'react';
import {Button, Table} from "react-bootstrap";


const Message = (props) => {
    const {name, email, phone, message} = props.message;
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{message}</td>
                <td>
                    <Button className='btn btn-main btn-md ml-2'>View</Button>
                    <Button className='btn btn-main btn-md ml-2'>Delete</Button>
                </td>
            </tr>
        </>
    );
};

export default Message;