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

export const StyleAddressCardsContainer = styled.View`
  margin-top: 20px;
  height: ${height - 290}px;
`;

export const StyleAddressCard = styled.TouchableOpacity`
  padding: 20px;
  border-radius: 15px;
  elevation: 2;
  margin-bottom: 15px;
`;

export const StyleAddressHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const StyleAddressBody = styled.View`
  padding-top: 10px;
`;

export const StyleBottomView = styled.View`
  justify-content: center;
  height: 140px;
`;
