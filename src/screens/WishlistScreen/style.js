import styled from 'styled-components/native';
import theme from '../../theme';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

export const StyleMainContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.SCREEN_WHITE};
`;

export const StyleContentContainer = styled.View`
  padding-horizontal: 20px;
`;

export const StyleProductsContainer = styled.View`
  margin-top: 20px;
  height: 130px;
`;
