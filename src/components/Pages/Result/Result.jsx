import React from 'react';

const Result = (props) => {
    const {student_name, student_id, student_category, student_certificate_no, id} = props.result;

    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{student_name}</td>
                <td>{student_category}</td>
                <td>{student_id}</td>
                <td>{student_certificate_no}</td>
            </tr>
        </>
    );
};

export default Result;