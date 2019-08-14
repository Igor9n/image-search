import styled from 'styled-components';

const computeWidth = (size) => {
  if (!size) {
    return 'auto';
  }

  return `${(size / 12) * 100}%`;
};

const Col = styled.div`
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 ${(props) => computeWidth(props.size)};
  max-width: ${(props) => computeWidth(props.size)};
  width: 100%;
  padding: ${(props) => (props.padding)}
  text-align: ${(props) => (props.textAlign)}
`;

export default Col;
