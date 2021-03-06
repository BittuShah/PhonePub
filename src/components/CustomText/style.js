import styled from 'styled-components/native';
import theme from '../../theme';

export const StyleCustomText = styled.Text`
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : theme.fontFamily.regular};
  font-size: ${props =>
    props.fontSize ? props.fontSize : theme.fontSize.NORMAL}px;
  color: ${props => (props.color ? props.color : theme.colors.BLACK)};
`;
