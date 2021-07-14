import React from 'react';
import {Button} from "react-bootstrap";

import {useHistory } from 'react-router';

const EnrolledList = (props) => {
    const {applied_for, name, mobile, email, transaction_id, mobile_wallet_provider, id } = props.admission;

    let history = useHistory();

    let singleEnrolledDetails = (id) =>{
        const url = `enrolled-details/${id}`;
        history.push(url);
    }


    return (
        <>
            <tr>
                <td>{applied_for}</td>
                <td>{name}</td>
                <td>{mobile}</td>
                <td>{email}</td>
                <td>{transaction_id}</td>
                <td>{mobile_wallet_provider}</td>
                <td>

                        <Button className='btn btn-main btn-md ml-2'

                            onClick={() => singleEnrolledDetails(id)}>
                            View</Button>

                    {/*<LinkContainer to='/enrolled-details'>*/}
                    {/*    <Button className='btn btn-main btn-sm ml-2'>Delete</Button>*/}
                    {/*</LinkContainer>*/}

                </td>
            </tr>
        </>
    );
};

export default EnrolledList;