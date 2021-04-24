import styled from 'styled-components/native';
import theme from '../../theme';

export const StyleHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  color: ${theme.colors.WHITE};
  padding-horizontal: 15px;
  height: 60px;
  align-items: center;
  background-color: ${props =>
    props.headerBackground ? props.headerBackground : '#fff'};
`;

export const StyleTextView = styled.View`
  align-items: center;
`;

export const StyleRightTextButton = styled.TouchableOpacity``;
export const StyleLeftTextButton = styled.TouchableOpacity``;
