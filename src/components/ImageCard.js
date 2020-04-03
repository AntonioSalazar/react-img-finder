import React from 'react';

const ImageCard = ({imgs}) => {

     const { largeImageURL, likes, previewURL, tags, views } = imgs;

    return ( 
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
            <div className='card'>
                <img src={previewURL} alt={tags} className='card-img-top'></img>
            </div>
        </div>
     );
}
 
export default ImageCard;