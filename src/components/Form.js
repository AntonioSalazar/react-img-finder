import React from 'react';

const Form = () => {
    return ( 
        <form className='row'>
            <div className='form-group col-md-10'>
                <input type='text' className='form-control form-control-lg' placeholder='Search for an image, i.e. beach, airplane' />
            </div>  

            <div className='form-group col-md-2'>
                <input type='submit' className='btn btn-lg search-btn btn-outline-secondary' value='Search &rsaquo;' />
            </div>                  
        </form>
     );
}
 
export default Form;