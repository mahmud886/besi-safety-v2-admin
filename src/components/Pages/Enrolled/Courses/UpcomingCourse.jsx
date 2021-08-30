import React from 'react';


const UpcomingCourse = (props) => {
    const {id, class_location, class_starting_date, class_type, course_title, reg_last_date  } = props.course;


    return (
        <>
            <div className='pt-3'>
                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <div className='single-batch border bg-light  rounded shadow-lg '>
                        <div className='row pt-3 '>
                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 '>
                                <div className='batch content py-5 text-center'>
                                    <button
                                        className='btn btn-outline-success btn-md h4'
                                        type='button'>
                                        {reg_last_date}
                                    </button>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                <div className='batch-content text-dark text-center'>
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

                                        <button
                                            onClick={()=> props.courseDelete(id) }
                                            className='btn btn-outline-danger btn-md'
                                            type='button'>
                                            DELETE NOW
                                        </button>

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