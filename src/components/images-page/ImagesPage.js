import React, { Component } from 'react';
import './styles.css';
import PropTypes from 'prop-types';

import ImagesSearch from './search/ImagesSearch';
import ImagesGrid from './grid/ImagesGrid';

class ImagesPage extends Component {
  state = {
    searchValue: '',
    showImages: false,
  };

  onInputChangeHandler = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  onSearchHandler = () => {
    this.setState({ showImages: true });

    const { searchValue } = this.state;
    const { fetchImages } = this.props;

    const query = `q=${encodeURI(searchValue)}`;
    fetchImages({ query });
  };

  render() {
    const { searchValue, showImages } = this.state;
    const { images } = this.props;

    const height = showImages ? '10vh' : '100vh';

    return (
      <>
        <ImagesSearch
          height={height}
          value={searchValue}
          onInputChange={this.onInputChangeHandler}
          onSearch={this.onSearchHandler}
        />
        {showImages && <ImagesGrid images={images} />}
      </>
    );
  }
}

ImagesPage.propTypes = {
  images: PropTypes.shape({
    data: PropTypes.instanceOf(Array),
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  fetchImages: PropTypes.func.isRequired,
};

export default ImagesPage;
