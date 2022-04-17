import * as React from 'react';
import {
  BottomSheetWrapper,
  Classification,
  ContainerBottomSheet,
  ContainerIconBottoms,
  Description,
  IconBottomCircle,
  IconsBottomWrapper,
  IconWrapper,
  Label,
  MovieInfo,
  SmallLabel,
  SmallLabelWrapper,
} from './bottom-sheet-content-styled';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomSheetContent = ({ movieCard, movie, handleClosePress }) => {
  return (
    <BottomSheetWrapper>
      <ContainerBottomSheet>
        {movieCard}
        <MovieInfo>
          <Label>{movie?.name}</Label>
          <SmallLabelWrapper>
            <SmallLabel>{movie?.year}</SmallLabel>
            <Classification isFree={movie?.classification === 'L'}>
              {movie?.classification}
            </Classification>
            <SmallLabel>{movie?.duration}</SmallLabel>
          </SmallLabelWrapper>
          <Description>{movie?.description}</Description>
        </MovieInfo>
        <IconWrapper onPress={handleClosePress}>
          <Ionicons name="ios-close-circle" size={25} color="#6b6b6c" />
        </IconWrapper>
      </ContainerBottomSheet>
      <ContainerIconBottoms>
        <IconsBottomWrapper>
          <IconBottomCircle active>
            <Ionicons name="ios-play" size={20} color="black" />
          </IconBottomCircle>
          <SmallLabel>Assistir</SmallLabel>
        </IconsBottomWrapper>
        <IconsBottomWrapper>
          <IconBottomCircle>
            <Feather name="download" size={20} color="white" />
          </IconBottomCircle>
          <SmallLabel>Baixar</SmallLabel>
        </IconsBottomWrapper>
        <IconsBottomWrapper>
          <IconBottomCircle>
            <Feather name="plus" size={20} color="white" />
          </IconBottomCircle>
          <SmallLabel>Minha lista</SmallLabel>
        </IconsBottomWrapper>
        <IconsBottomWrapper>
          <IconBottomCircle>
            <Feather name="share-2" size={20} color="white" />
          </IconBottomCircle>
          <SmallLabel>Compartilhe</SmallLabel>
        </IconsBottomWrapper>
      </ContainerIconBottoms>
    </BottomSheetWrapper>
  );
};

export default BottomSheetContent;
