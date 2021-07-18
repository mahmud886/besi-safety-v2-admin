import React from 'react';



import {Card} from 'react-bootstrap';


const Blog = (props) => {
    const { img, title, description, created_at ,id} = props.blog;

    return (
        <>
            <Card style={{ width: '24rem' }} className='mx-auto m-4'>
                <Card.Img variant="top" src={img} className='img-fluid'/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>


                    <Card.Footer className="d-flex justify-content-between">{created_at}
                        <button className='btn btn-outline-danger btn-sm'
                                onClick={()=> props.deleteBlog(id)}
                        >
                            DELETE </button>
                    </Card.Footer>





            </Card>
        </>
    );
};

export default Blog;