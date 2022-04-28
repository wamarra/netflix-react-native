import Feather from 'react-native-vector-icons/Feather';
import * as React from 'react';
import { Overlay, OverlayContainer } from './avatar-styled';

const Editable = props => {
  return props.edit ? (
    <OverlayContainer big={props.big}>
      <Overlay big={props.big} />
      <Feather name="edit" size={24} color="white" />
    </OverlayContainer>
  ) : null;
};

export default Editable;
