import React, { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {

  const [searchApp , setSearchApp ] = useState('');

  useEffect(() => {
    const apiRequest = async () => {
      if (searchApp === '') return;

      const imgNumber = 30;
      const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABY_API}&q=${searchApp}&per_page=${imgNumber}`;

      const request = await fetch(url);
      const response = await request.json();
      setSearchApp(response.hits)
    }

    apiRequest();

  }, [searchApp])

  return (
    <div className='container'> 
      <div className='jumbotron'>
        <p className='text-center header'>Pixaby image search</p>
        <Form
          setSearchApp={setSearchApp}
        />
      </div>

    </div>
  );
}

export default App;
