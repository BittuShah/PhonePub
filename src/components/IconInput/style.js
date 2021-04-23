import styled from 'styled-components/native';
import theme from '../../theme';
// import {Icon} from '../Icon';
// import {Platform} from 'react-native';

const StyleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 17px;
  padding-horizontal: 15px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : theme.colors.GREY5};
  margin-bottom: 25px;
  height: 55px;
`;

const StyleInput = styled.TextInput`
  flex: 1;
  margin-left: 7px;
  border-radius: 17px;
  font-size: 15px;
  color: ${props => (props.color ? props.color : theme.colors.black)};
`;
// background-color: ${theme.colors.GREY5};

// const StyleIcon = Icon`
//   height: 100;
//   width: 100;
//   resize-mode: 'stretch';
//   align-items: 'center';
// `;

export {StyleContainer, StyleInput};
