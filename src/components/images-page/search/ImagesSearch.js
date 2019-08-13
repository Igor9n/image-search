import React from 'react';

import Row from '../../common/row/Row';
import Col from '../../common/col/Col';
import Input from '../../common/input/Input';
import Button from '../../common/button/Button';
import ContainerFluid from '../../common/container/ContainerFluid';

const ImagesSearch = (props) => {
  const { height, value, onInputChange, onSearch } = props;

  return (
    <ContainerFluid height={height} backgroundColor="#544150">
      <Row justify align type="center" height="100%">
        <Col size={6}>
          <Input
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

export default ImagesSearch;
