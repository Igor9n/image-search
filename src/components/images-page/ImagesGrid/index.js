import React from 'react';
import { ClipLoader } from 'react-spinners';

export const ImagesGrid = props => {
  const { images } = props;
  const style = {
    backgroundColor: '#0f36b5',
    paddingTop: '10px'
  };

  let grid = null;

  if (images.data) {
    grid = images.data.map((image, id) => (
      <div key={ `div_${ id }` } className="col-4" align="center" style={ { paddingTop: '10px' } }>
        <a key={ `a_${ id }` } href={ image.pageURL }>
          <img key={ `img_${ id }` } width="100%"
               src={ image.webformatURL } alt={ image.tags }/>
        </a>
      </div>
    ));
  }

  return (
    <div className="container-fluid min-vh-100 h-100" style={ style }>
      { images.loading && (
        <div className="col-12" align="center">
          <ClipLoader size={ 400 }/>
        </div>
      ) }
      { grid && (
        <div className="row justify-content-around">
          { grid }
        </div>
      ) }
    </div>
  );
};