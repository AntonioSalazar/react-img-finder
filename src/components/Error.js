import React from 'react';

const Error = ({message}) => {
    return ( 
        <p className='alert alert-primary my-3 p-4 text-center'>{message}</p>
     );
}
 
export default Error;