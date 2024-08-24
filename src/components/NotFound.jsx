
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
    return (
        <>
        <div className='flex justify-center items-center flex-col gap-4 mt-5'>
        <h1 className='text-4xl font-bold'>404 Error - Page Not Found</h1>
        <Link to='/' className='bg-gray-500 text-white text-2xl p-2'>Go to Home</Link>
        </div>
        </>
    );
}

export default NotFound;
