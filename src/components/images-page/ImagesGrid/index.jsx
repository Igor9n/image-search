import React from 'react';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';

export const ImagesGrid = (props) => {
  const { images } = props;
  const style = {
    backgroundColor: '#10278a',
    paddingTop: '10px',
  };

  let grid = [];

  if (images.data) {
    const sortedImages = images.data.sort((a, b) => {
      if (a.webformatHeight < b.webformatHeight) {
        return -1;
      }

      return 0;
    });

    grid = sortedImages.map((image, id) => (
      <div key={`div_${id}`} className="col-4" align="center" style={{ paddingTop: '10px' }}>
        <a href={image.pageURL}>
          <img width="100%" src={image.webformatURL} alt={image.tags}/>
        </a>
      </div>
    ));
  }

  const notFound = grid.length === 0 && !images.loading;

  return (
    <div className="container-fluid min-vh-100 h-100" style={style}>
      {images.loading && (
        <div className="col-12" align="center">
          <ClipLoader size={400} />
        </div>
      )}
      {grid.length > 0 && (
        <div className="row justify-content-around">
          {grid}
        </div>
      )}

      {notFound && (
        <div align="center">
          <img
            src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
            alt="not found"
          />
        </div>
      )}
    </div>
  );
};


ImagesGrid.propTypes = {
  images: PropTypes.shape({
    data: PropTypes.instanceOf(Array).isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};
