import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ImagesList from './components/ImagesList';

function App() {

  const [searchApp , setSearchApp ] = useState('');
  const [imgsArray, setImgs ] = useState([]);
  //pagination states
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);

  useEffect(() => {
    const apiRequest = async () => {
      if (searchApp === '') return;

      const imgNumber = 30;
      const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABY_API}&q=${searchApp}&per_page=${imgNumber}`;

      const request = await fetch(url);
      const response = await request.json();
      setImgs(response.hits)

      //Calculate the total of pages

      const calculateTotalPages = Math.ceil(response.totalHits / imgNumber);
      
      setTotalPages(calculateTotalPages);
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

      <div className='row justify-content-center'>
        <ImagesList
          imgsArray={imgsArray}
        />  
      </div>

    </div>
  );
}

export default App;
