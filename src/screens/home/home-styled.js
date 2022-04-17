import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { animated } from 'react-spring/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

export const Poster = animated(styled.ImageBackground`
  width: 100%;
  height: ${(Dimensions.get('window').height * 81) / 100}px;
`);
