import styled from 'styled-components/native';
import theme from '../../theme/index';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

export const StyleMainContainer = styled.View`
  flex: 1;
  background-color: ${theme.colors.SCREEN_WHITE};
`;

export const StyleBodyContainer = styled.View`
  height: ${height - 370}px;
  padding-horizontal: 15px;
`;

export const StyleFooterContainer = styled.View`
  background-color: ${theme.colors.PRIMARY_BLUE};
  height: 280px;
  padding-horizontal: 15px;
  padding-vertical: 20px;
`;

export const StyleCard = styled.TouchableOpacity`
    background-color: ${props => props.background}
    border-radius: 20px;
    padding-horizontal: 25px;
    height: 120px;
    width: 220px;
    margin-right: 20px;
    padding-vertical: 20px;
`;

export const StyleCardBottomContainer = styled.View`
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
