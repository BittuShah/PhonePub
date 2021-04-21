import styled from 'styled-components/native';
import theme from '../../theme';

const CustomText = styled.Text`
  font-family: ${(props) =>
    props.bold ? theme.fontFamily.bold : theme.fontFamily.regular};
  font-size: ${theme.fontSize.MEDIUM}px;
  color: ${(props) => (props.color ? props.color : theme.colors.BLACK)};
`;

export {CustomText};
