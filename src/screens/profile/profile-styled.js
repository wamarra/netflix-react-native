import styled from 'styled-components/native';

export const Screen = styled.View`
  flex: 1;
  background-color: #000;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
`;

export const GoBackButton = styled.Button`
  background-color: black;
  font-size: 16px;
  font-weight: bold;
`;

export const AvantarsContainer = styled.View`
  height: 150px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Row = styled.View`
  flex: 1;
  background-color: #000;
  padding: 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const NetflixButton = styled.TouchableOpacity`
  flex-direction: row;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  margin: 10px;
  color: gray;
`;
