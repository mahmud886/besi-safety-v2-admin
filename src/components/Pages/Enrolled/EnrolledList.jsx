import React from 'react';


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
            <tr className=''>
                <td>{applied_for}</td>
                <td>{name}</td>
                <td>{mobile}</td>
                <td>{email}</td>
                <td>{transaction_id}</td>
                <td>{mobile_wallet_provider}</td>
                <td>

                        <button className='btn btn-outline-success btn-md ml-2'

                            onClick={() => singleEnrolledDetails(id)}>
                            DETAILS</button>


                        <button className='btn btn-outline-danger btn-md ml-2'
                            onClick={()=> props.deleteAdmission(id)}
                        >
                            DELETE</button>


                </td>
            </tr>
        </>
    );
};

export default EnrolledList;