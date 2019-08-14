import React from 'react';
import { ClipLoader } from 'react-spinners';
import PropTypes from 'prop-types';

import Col from '../../common/col/Col';
import Row from '../../common/row/Row';
import ContainerFluid from '../../common/container/ContainerFluid';

const ImagesGrid = (props) => {
  const { images } = props;
  const alignCenter = {
    textAlign: 'center',
  };

  let grid = [];

  if (images.data) {
    const sortedImages = images.data.sort((a, b) => {
      if (a.webformatHeight < b.webformatHeight) {
        return -1;
      }

      return 0;
    });

    grid = sortedImages.map((image) => (
      <Col key={`div_${image.id}`} size="4" padding="5px 15px 5px">
        <a href={image.pageURL}>
          <img width="100%" src={image.webformatURL} alt={image.tags} />
        </a>
      </Col>
    ));
  }

  const notFound = grid.length === 0 && !images.loading;

  return (
    <ContainerFluid
      height="100%"
      minHeight="100vh"
      backgroundColor="#10278a"
      padding="5px"
    >
      {images.loading && (
        <Col size={12}>
          <ClipLoader size={400} />
        </Col>
      )}
      {grid.length > 0 && (
        <Row justify type="center">
          {grid}
        </Row>
      )}

      {notFound && (
        <div style={alignCenter}>
          <img
            src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
            alt="not found"
          />
        </div>
      )}
    </ContainerFluid>
  );
};


ImagesGrid.propTypes = {
  images: PropTypes.shape({
    data: PropTypes.instanceOf(Array),
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ImagesGrid
