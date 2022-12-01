import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import { StarIcon } from "../icons/StarIcon";
import FavoriteOutlineIcon from "../icons/FavoriteOutlineIcon";
import { PlaceType } from "../@types/PlaceTypes";
import { useEffect, useState } from "react";
import { usePlace } from "../Providers/PlaceProvider";

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

const ImageOverlay = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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

const Buttons = styled.View`
  position: absolute;
  right: 10px;
  top: 10px;
  flex-direction: row;
`;

const Button = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  background-color: #FFFFFF99;
  align-items: center;
  justify-content: center;
  border-radius: 18px; 
  margin-left: 10px;
`;

type PlaceItemProps = {
  data: PlaceType
};

export const PlaceItem = ({ data }: PlaceItemProps) => {

  const [item, setItem] = useState(data);
  const { showPlace } = usePlace()



  useEffect(() => {
    setItem(data)
  }, [data]) //Atualiza a variavel item sempre que o parametro data for alterado


  return (
    <PlaceContainer
      onPress={() => {
        showPlace();
      }}
    >
      <PlaceImage
        source={{
          uri: item.photo,
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
        <PlaceTitle>{item.title}</PlaceTitle>
        <PlaceSubTitle>{item.subtitle}</PlaceSubTitle>

        <PlaceRating>
          <StarIcon />
          <PlaceRatingValue>{item.rating.toPrecision(2)}</PlaceRatingValue>
        </PlaceRating>

        <Buttons>
          <Button
          onPress={() => console.log('Favoritar')}
          >
            <FavoriteOutlineIcon /> 
          </Button>
        </Buttons>
         
      </PlaceImage>
      
    </PlaceContainer>
  );
};
