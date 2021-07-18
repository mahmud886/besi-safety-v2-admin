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

    const deleteBlog = (blogKey) =>{
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        fetch(`${apiEndpoint}/blogposts/${blogKey}`,requestOptions)
            .then((res) => res)
            .then((blog)=>{
                alert('Blogs will be deleted...')

                const newBlogs = blogs.filter(blog => blog.id !== blogKey);
                setBlogs(newBlogs);

            })
    }





    const blogsCart =()=> {
        return(
            blogs.length === 0 ? 'No record to display':
                blogs.map((blog, key) => {
                return (
                    <Col sm={12} xs={12} md={6} lg={3} xl={3}>
                        <Blog blog={blog}
                              key={blog.id}
                              index={key}
                              deleteBlog={deleteBlog}
                        />
                    </Col>
                )
            }))

    }

    return (
        <>
            <Container fluid>
                <div className="pt-5">
                    <h2 className=' text-center p-3 rounded h1'>
                        ALL BLOGS
                    </h2>
                </div>
                <LinkContainer to='/create-blogs'>
                    <div className="d-flex justify-content-end m-1 mb-3">
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
