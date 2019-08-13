import styled from 'styled-components';

const computeStyles = (type) => {
  const style = {
    style: null,
    flex: null,
  };

  switch (type) {
    case 'start':
      style.style = 'flex-start !important';
      style.flex = 'start !important';
      break;
    case 'end':
      style.style = 'flex-end !important';
      style.flex = 'start !important';
      break;
    case 'center':
      style.style = 'center !important';
      style.flex = 'center !important';
      break;
    case 'between':
      style.style = 'space-between !important';
      style.flex = 'justify !important';
      break;
    case 'around':
      style.style = 'space-around !important';
      style.flex = 'distribute !important';
      break;
    default:
      style.style = 'auto';
      style.flex = 'auto';
  }

  return style;
};


const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  -ms-flex-pack: ${(props) => (props.justify ? computeStyles(props.type).flex : 'auto')};
  justify-content: ${(props) => (props.justify ? computeStyles(props.type).style : 'auto')};
  -ms-flex-align: ${(props) => (props.align ? computeStyles(props.type).flex : 'auto')};
  align-items: ${(props) => (props.align ? computeStyles(props.type).style : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  width: 100%;
`;

export default Row;
