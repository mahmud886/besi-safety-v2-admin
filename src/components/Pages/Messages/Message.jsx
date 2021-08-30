import React from 'react';



const Message = (props) => {
    const {name, email, phone, message,id} = props.message;
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{message}</td>
                <td>

                    <button className='btn btn-outline-danger btn-sm'
                            onClick={()=> props.deleteMessage(id)}
                        >
                        Delete</button>
                </td>
            </tr>
        </>
    );
};

export default Message;