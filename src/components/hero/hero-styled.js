import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  bottom: 0;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  bottom: 0;
`;

export const Banner = styled.Image`
  height: 100px;
`;

export const Tags = styled.View`
  justify-content: center;
  margin-top: 20px;
  flex-direction: row;
`;

export const MenuTag = styled.Text`
  color: #fff;
  padding: 0 8px;
  font-size: 13px;
`;

export const Separator = styled.View`
  width: 3px;
  height: 3px;
  background-color: gray;
  margin: 6px 0;
  border-radius: 3px;
`;

export const MenuHero = styled.View`
  flex-direction: row;
  padding: 15px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  padding: 20px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 11px;
  letter-spacing: 0.1px;
`;

export const Play = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fff;
  width: 110px;
  height: 32px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
`;

export const TextButtonPlay = styled.Text`
  font-size: 13px;
  color: #000;
  padding-left: 5px;
`;

export const MovieCard = styled.View`
  margin-left: 0;
  padding-right: 10px;
  flex-direction: row;
`;

export const Logo = styled.Image`
  position: absolute;
  top: 6px;
  left: 2px;
  width: 16px;
  height: 16px;
`;

export const MoviePoster = styled.ImageBackground`
  width: ${Math.round((Dimensions.get('window').width * 28) / 100)}px;
  height: 150px;
  border-radius: 6px;
  overflow: hidden;
`;
