import React from 'react';
import PropTypes from 'prop-types';

import Row from '../../common/row/Row';
import Col from '../../common/col/Col';
import Input from '../../common/input/Input';
import Button from '../../common/button/Button';
import ContainerFluid from '../../common/container/ContainerFluid';

const ImagesSearch = (props) => {
  const {
    height,
    value,
    onInputChange,
    onSearch,
  } = props;

  const onEnter = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <ContainerFluid height={height} backgroundColor="#544150">
      <Row justify align type="center" height="100%">
        <Col size={6}>
          <Input
            onKeyPress={onEnter}
            placeholder="tags"
            value={value}
            onChange={onInputChange}
            type="text"
          />
        </Col>
        <Col size={2}>
          <Button
            onClick={onSearch}
          >
            Search
          </Button>
        </Col>
      </Row>
    </ContainerFluid>
  );
};

ImagesSearch.propTypes = {
  height: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default ImagesSearch;
