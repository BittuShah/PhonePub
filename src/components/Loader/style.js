import styled from 'styled-components/native';
import theme from '../../theme';

export const LoadingView = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.WHITE_FADE};
  justify-content: center;
  align-items: center;
`;
