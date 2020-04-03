import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({imgsArray}) => {
    
    return (
        <div className='col-12 p-5 row'>
            {imgsArray.map(imgs => (
                    <ImageCard
                        key={imgs.id}
                        imgs={imgs}  
                    />
            ))}
        </div>
     );
}
 
export default ImageList;