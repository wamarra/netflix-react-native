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
import { translate } from '../../i18n';

const BottomSheetContent = ({ movieCard, movie, handleClosePress }) => {
  const [myListIcon, setMyListIcon] = React.useState('plus');

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
          <SmallLabel>{translate('watch')}</SmallLabel>
        </IconsBottomWrapper>
        <IconsBottomWrapper>
          <IconBottomCircle>
            <Feather name="download" size={20} color="white" />
          </IconBottomCircle>
          <SmallLabel>{translate('donwloads')}</SmallLabel>
        </IconsBottomWrapper>
        <IconsBottomWrapper
          onPress={() =>
            setMyListIcon(actual => (actual === 'plus' ? 'check' : 'plus'))
          }>
          <IconBottomCircle>
            <Feather name={myListIcon} size={20} color="white" />
          </IconBottomCircle>
          <SmallLabel>{translate('my-list')}</SmallLabel>
        </IconsBottomWrapper>
        <IconsBottomWrapper>
          <IconBottomCircle>
            <Feather name="share-2" size={20} color="white" />
          </IconBottomCircle>
          <SmallLabel>{translate('share')}</SmallLabel>
        </IconsBottomWrapper>
      </ContainerIconBottoms>
    </BottomSheetWrapper>
  );
};

export default BottomSheetContent;
