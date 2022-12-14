import styled from "@emotion/native";
import { StatusBar } from "expo-status-bar";
import { StarIcon } from "../icons/StarIcon";
import { usePlace } from "../Providers/PlaceProvider";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../Values/Colors";
import { PlacesData } from "../data";
import { PlaceType } from "../@types/PlaceTypes";
import { useState } from "react";



const PlaceContainer = styled.TouchableOpacity`
  height: 200px;
  width: 100%;
  margin-top: 15px;
  position: relative;
`;

const PlaceImage = styled.ImageBackground`
  height: 200px;
  justify-content: flex-end;
  padding-left: 15px;
  padding-bottom: 15px;
`;

const PlaceTitle = styled.Text`
  font-size: 24px;
  color: #fff;
`;

const PlaceSubTitle = styled.Text`
  color: #fff;
`;


const PlaceRating = styled.View`
  position: absolute;
  right: 15px;
  bottom: 15px;
  align-items: center;
`;

const PlaceRatingValue = styled.Text`
  font-size: 14px;
  color: #fff;
`;

const ImageOverlay = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;



export const Favorites = () => {


  return (

      <PlaceContainer>
        
      <PlaceImage
        source={{
          uri: favorites?.photo,
        }}
        imageStyle={{
          borderRadius: 10,
        }}
      >
        <ImageOverlay
           colors={['#00000000', '#00000090']}
           start={{ x: 0, y: 0.4 }}
           end={{ x: 0, y: 0.8 }}
        />
     
        <PlaceTitle>{favorites?.title}</PlaceTitle>
        <PlaceSubTitle>{favorites?.subtitle}</PlaceSubTitle>

        <PlaceRating>
          <StarIcon />
          <PlaceRatingValue>{favorites?.rating.toPrecision(2)}</PlaceRatingValue>
        </PlaceRating>

      </PlaceImage>
      
    </PlaceContainer>
  );
};
