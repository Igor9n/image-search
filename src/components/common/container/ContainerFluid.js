import styled from 'styled-components';

const ContainerFluid = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: ${(props) => (props.height ? props.height : 'auto')};
  min-height: ${(props) => (props.minHeight ? props.minHeight : 'auto')};
  transition: height 1s;
  background-color:${(props) => (props.backgroundColor)};
  padding:${(props) => (props.padding)};
  text-align: -webkit-center;
`;

export default ContainerFluid;
