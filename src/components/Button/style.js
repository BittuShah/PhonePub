import styled from 'styled-components/native';
import theme from '../../theme';
import {Platform} from 'react-native';

export const StyleButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: ${Platform.OS === 'ios' ? '0px' : '12px'};
  width: 100%;
  border-radius: 50px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : theme.colors.skyBlue};
  color: ${props => (props.color ? props.color : theme.colors.WHITE)};
`;
// margin-top: 60px;
// margin-horizontal: 40px;
// height: 35px;
