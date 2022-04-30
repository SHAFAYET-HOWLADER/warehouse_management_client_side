import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='container d-flex justify-content-center align-center py-5'>
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;