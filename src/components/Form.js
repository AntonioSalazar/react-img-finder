import React, { useState } from 'react';
import Error from './Error';

const Form = ({setSearchApp}) => {

    const [ searchStringForm, setSearch ] = useState('');
    const [ error, setError ] = useState(false);

    const imgSearch = e => {
        e.preventDefault();

        //validate the form

        if(searchStringForm.trim() === ''){
            setError(true);
            return;
        }

        setError(false);

        //send the info to the main component
        setSearchApp(searchStringForm);
    }


    return ( 
        <form 
            onSubmit={imgSearch}
        >
            <div className='row'>
                <div className='form-group col-md-8'>
                    <input 
                        type='text' 
                        className='form-control form-control-lg' 
                        placeholder='Search for an image, i.e. beach, airplane'
                        onChange={e => setSearch(e.target.value)}    
                    />
                </div>  

                <div className='form-group col-md-4'>
                    <input type='submit' className='btn btn-lg search-btn btn-outline-secondary' value='Search &rsaquo;' />
                </div>    
            </div>
            {
                error ? <Error message='What do you want to search?'/> : null
            }              
        </form>
     );
}
 
export default Form;