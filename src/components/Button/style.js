import styled from 'styled-components/native';
import theme from '../../theme';
import {Platform} from 'react-native';

export const StyleButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: ${Platform.OS === 'ios' ? '0px' : '12px'};
  height: 35px;
  background-color: ${theme.colors.NAVY_BLUE};
  color: ${(props) => (props.color ? props.color : theme.colors.WHITE)};
  margin-top: 600px;
  margin-horizontal: 40px;
`;
