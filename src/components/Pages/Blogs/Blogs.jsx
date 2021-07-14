import React, {useEffect, useState} from 'react';
import {Row, Col, Container, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import Blog from "./Blog";
import {apiEndpoint} from "../../../App";


// const blogData = [
//     {
//         img: 'https://image.shutterstock.com/image-vector/safety-first-construction-concept-yellow-260nw-1274750773.jpg',
//         title: 'This is title page of the page',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         create_at: '25-04-2031',
//     },
//     {
//         img: 'https://image.shutterstock.com/image-vector/safety-first-construction-concept-yellow-260nw-1274750773.jpg',
//         title: 'This is title page of the page',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         create_at: '25-04-2031',
//     },
//     {
//         img: 'https://image.shutterstock.com/image-vector/safety-first-construction-concept-yellow-260nw-1274750773.jpg',
//         title: 'This is title page of the page',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         create_at: '25-04-2031',
//     },
//     {
//         img: 'https://image.shutterstock.com/image-vector/safety-first-construction-concept-yellow-260nw-1274750773.jpg',
//         title: 'This is title page of the page',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         create_at: '25-04-2031',
//     }
//     ,
//     {
//         img: 'https://image.shutterstock.com/image-vector/safety-first-construction-concept-yellow-260nw-1274750773.jpg',
//         title: 'This is title page of the page',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         create_at: '25-04-2031',
//     }
//     ,
//     {
//         img: 'https://image.shutterstock.com/image-vector/safety-first-construction-concept-yellow-260nw-1274750773.jpg',
//         title: 'This is title page of the page',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         create_at: '25-04-2031',
//     }
//     ,
//     {
//         img: 'https://image.shutterstock.com/image-vector/safety-first-construction-concept-yellow-260nw-1274750773.jpg',
//         title: 'This is title page of the page',
//         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
//         create_at: '25-04-2031',
//     }
// ]







const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch(`${apiEndpoint}/blogposts`)
            .then((res)=> res.json())
            .then((blogs)=> {
                setBlogs(blogs)
            });
    }, []);

    const blogsCart =()=> {
        return blogs.map((blog) => {
            return (
                <Col sm={12} xs={12} md={6} lg={2} xl={2}>
                    <Blog blog={blog}/>
                </Col>
            )
        });
    }

    return (
        <>
            <Container fluid>
                <div className="pt-5">
                    <h2 className=' text-center p-3 rounded h1'>
                        ALL MESSAGES FROM CONTACT PAGE
                    </h2>
                </div>
                <LinkContainer to='/create-blogs'>
                    <div className="d-flex justify-content-end m-1">
                        <Button className='btn btn-main btn-md'>Create a Blog</Button>
                    </div>
                </LinkContainer>
                <Row className='border rounded m-1'>

                    {blogsCart()}
                </Row>
            </Container>

        </>
    );
};

export default Blogs;
