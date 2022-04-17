import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  padding: 20px 0;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 16px;
  margin: 0 0 5px 10px;
`;

export const MovieScroll = styled.ScrollView`
  margin: 0 10px;
`;

export const MoviePoster = styled.ImageBackground`
  width: ${Math.round((Dimensions.get('window').width * 28) / 100)}px;
  height: 150px;
  border-radius: 6px;
  overflow: hidden;
`;

export const Logo = styled.Image`
  position: absolute;
  top: 6px;
  left: 2px;
  width: 16px;
  height: 16px;
`;

export const Top10Numbers = styled.Image`
  position: absolute;
  width: ${Math.round((Dimensions.get('window').width * 28) / 100)}px;
  height: 82px;
  bottom: 0;
  left: -50px;
`;

export const Top10Banner = styled.Image`
  position: absolute;
  top: 0;
  right: 10px;
  width: 19px;
  height: 23px;
  border-top-right-radius: 6px;
  overflow: hidden;
`;

export const MovieCard = styled.View`
  margin-left: ${({ withTop10Number }) => (withTop10Number ? '20px' : 0)};
  padding-right: 10px;
  flex-direction: row;
`;
