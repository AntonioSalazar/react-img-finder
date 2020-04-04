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
      const url = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABY_API}&q=${searchApp}&per_page=${imgNumber}&page=${currentPage}`;

      const request = await fetch(url);
      const response = await request.json();
      setImgs(response.hits)

      //Calculate the total of pages

      const calculateTotalPages = Math.ceil(response.totalHits / imgNumber);

      setTotalPages(calculateTotalPages);

      //move the screen to the top when refreshing
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth'})
    }

    apiRequest();

  }, [searchApp, currentPage])

    //function for the previous page
    const previousPage = () => {
    const newCurrentPage = currentPage - 1;

    if(newCurrentPage === 0 ) return

    setCurrentPage(newCurrentPage)
  }

  //function for next page

  const nextPage = () => {
    const newCurrentPage = currentPage + 1;
    if(newCurrentPage > totalPages) return

    setCurrentPage(newCurrentPage);
  }

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

        {
          (currentPage === 1) ? null :(
            <button
            className='btn btn-info mr-1 mb-5'
            type='button'
            onClick={previousPage}
          >&laquo; Anterior</button>
          )  
        }

        {
          (currentPage === totalPages) ? null : (
        <button
          className='btn btn-info mr-1 mb-5'
          type='button'
          onClick={nextPage}
        >Siguiente &raquo;</button>        
          )
        }


      </div>

    </div>
  );
}

export default App;
