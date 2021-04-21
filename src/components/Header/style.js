import styled from 'styled-components/native';
import theme from '../../theme';

export const StyleHeader = styled.View`
  background-color: ${theme.colors.NAVY_BLUE};
  flex-direction: row;
  justify-content: space-between;
  color: ${theme.colors.WHITE};
  padding-horizontal: 10px;
  padding-vertical: 10px;
`;
