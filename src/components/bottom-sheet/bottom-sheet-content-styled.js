import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const BottomSheetWrapper = styled.View`
  flex-direction: column;
`;

export const ContainerBottomSheet = styled.View`
  padding: 0 20px;
  justify-content: space-between;
  flex-direction: row;
`;

export const IconWrapper = styled.TouchableOpacity`
  padding-top: 0;
  width: 25px;
  height: 25px;
`;

export const MovieInfo = styled.View`
  flex-direction: column;
  width: ${(Dimensions.get('window').width * 49) / 100}px;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const SmallLabelWrapper = styled.View`
  padding-top: 6px;
  align-items: center;
  flex-direction: row;
  width: ${(Dimensions.get('window').width * 50) / 100}px;
`;

export const SmallLabel = styled.Text`
  color: #868793;
  font-size: 10px;
`;

export const Classification = styled.Text`
  width: 15px;
  height: 15px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 2px;
  text-align: center;
  align-content: center;
  background-color: ${({ isFree }) => (isFree ? 'green' : 'red')};
  color: white;
  font-weight: bold;
  font-size: 11px;
`;

export const Description = styled.Text`
  padding-top: 10px;
  color: white;
  font-size: 12px;
  width: ${(Dimensions.get('window').width * 56) / 100}px;
`;

export const ContainerIconBottoms = styled.View`
  padding: 16px;
  flex-direction: row;
  justify-content: space-around;
`;

export const IconsBottomWrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const IconBottomCircle = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  overflow: hidden;
  padding: 5px;
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
  background-color: ${({ active }) => (active ? 'white' : '#434243')};
`;
