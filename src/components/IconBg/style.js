import styled from 'styled-components/native';

export const StyleIconContainer = styled.TouchableOpacity`
  height: 28px;
  width: 28px;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : '#f5a927'};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;
