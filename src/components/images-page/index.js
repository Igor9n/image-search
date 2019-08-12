import { connect } from 'react-redux';
import { fetchImages } from '../../store/image/actions';
import { ImagesPage } from './component';

const mapStateToProps = state => {
  const { images } = state;

  return {
    images
  };
};

const actionCreators = {
  fetchImages
};

export default connect(mapStateToProps, actionCreators)(ImagesPage);