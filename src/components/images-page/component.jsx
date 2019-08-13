import React, { Component } from 'react';
import classNames from 'classnames';
import './styles.css';
import PropTypes from 'prop-types';

import { Search } from '../common/search';
import { Button } from '../common/button';
import { ImagesGrid } from './ImagesGrid';

export class ImagesPage extends Component {
  state = {
    searchValue: '',
    showImages: false,
  };

  searchHandler = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  fetchHandler = () => {
    this.setState({ showImages: true });

    const { searchValue } = this.state;
    const { fetchImages } = this.props;

    const query = `q=${encodeURI(searchValue)}`;
    fetchImages({ query });
  };

  render() {
    const { searchValue, showImages } = this.state;
    const { images } = this.props;
    const style = {
      backgroundColor: '#544150',
    };

    const divClasses = classNames(
      'container-fluid',
      'search-input',
      {
        'search-input-100': !showImages,
      },
      {
        'search-input-10': showImages,
      },
    );

    return (
      <>
        <div className={divClasses} style={style}>
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-6">
              <Search
                value={searchValue}
                onChange={this.searchHandler}
              />
            </div>
            <div className="col-2">
              <Button
                onClick={this.fetchHandler}
                label="Search"
              />
            </div>
          </div>
        </div>

        {showImages && <ImagesGrid images={images} />}
      </>
    );
  }
}

ImagesPage.propTypes = {
  images: PropTypes.shape({
    data: PropTypes.instanceOf(Array).isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
  fetchImages: PropTypes.func.isRequired,
};
