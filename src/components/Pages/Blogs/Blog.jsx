import React from 'react';

import {Card,Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Blog = (props) => {
    const { img, title, description, created_at } = props.blog;
    return (
        <>
            <Card style={{ width: '18rem' }} className='mx-auto m-4'>
                <Card.Img variant="top" src={img} className='img-fluid'/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{created_at}</Card.Footer>
                {/*<LinkContainer to='/blog/blog-details'>*/}
                {/*    <Button className='btn btn-main'>See Details</Button>*/}
                {/*</LinkContainer>*/}

            </Card>
        </>
    );
};

export default Blog;