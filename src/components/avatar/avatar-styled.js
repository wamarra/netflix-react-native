import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
`;

export const avatarSize = css`
  width: ${props => (props.big ? '100px' : '60px')};
  height: ${props => (props.big ? '100px' : '60px')};
  margin: 10px;
`;

export const AvatarImage = styled.Image`
  ${avatarSize}
`;

export const AvatarText = styled.Text`
  color: white;
`;

export const Overlay = styled.View`
  ${avatarSize}
  position: absolute;
  background-color: black;
  opacity: 0.8;
  justify-content: center;
  align-items: center;
`;

export const OverlayContainer = styled.View`
  ${avatarSize}
  position: absolute;
  justify-content: center;
  align-items: center;
`;
