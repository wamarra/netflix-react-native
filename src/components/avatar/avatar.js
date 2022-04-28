import React from 'react';
import { View } from 'react-native';
import { AvatarImage, AvatarText, Container } from './avatar-styled';
import Editable from './editable';

const Avatar = props => {
  return (
    <Container onPress={props.onPress}>
      {props.uri ? (
        <View>
          <AvatarImage
            big={props.big}
            source={{ isStatic: true, uri: props.uri }}
          />
          <Editable edit={props.edit} {...props} />
        </View>
      ) : (
        <View>
          <AvatarImage big={props.big} source={props.image} />
          <Editable edit={props.edit} {...props} />
        </View>
      )}

      <AvatarText>{props.name}</AvatarText>
    </Container>
  );
};

export default Avatar;
