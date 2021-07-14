import React from 'react';
import {Link} from "react-router-dom";

const UpcomingCourse = (props) => {
    const {class_location, class_starting_date, class_type, course_title, reg_last_date } = props.course;
    return (
        <>
            <div className='pt-3'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div className='single-batch border main-color rounded '>
                        <div className='row pt-3 '>
                            <div className='col-xl-2 col-lg-2 col-md-2 col-sm-12 col-xs-12 '>
                                <div className='batch-content py-5   '>
                                    <h5 className='display- text-white text-center'>
                                        {reg_last_date}
                                    </h5>
                                </div>
                            </div>
                            <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 col-xs-12'>
                                <div className='batch-content text-white text-center'>
                                    <h4 className='display-5'>
                                        {course_title}
                                    </h4>
                                    <div className='span-content'>
                                        <span> Class Type: {class_type}</span>{' '}
                                        <br />
                                        <p>
                                            Class Starting Date:{' '}
                                            {class_starting_date} <br />
                                            Location: {class_location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 '>
                                <div className='batch content py-5 text-center'>
                                    <Link to='/admission-form'>
                                        <button
                                            className='btn btn-outline-danger'
                                            type='button'>
                                            DELETE NOW
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpcomingCourse;