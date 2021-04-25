import styled from 'styled-components/native';
import theme from '../../theme';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

export const StyleMainContainer = styled.View`
  flex: 1;
  background-color: #f8f8f8;
`;

export const StyleCategoriedContainer = styled.View`
  height: 70px;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  margin-top: 15px;
`;

export const StyleContentContainer = styled.View``;

export const StyleProductsContainer = styled.View`
  padding-horizontal: 20px;
  margin-top: 20px;
  height: ${height - 190}px;
`;
