import styled from "@emotion/native";
import { ReactNode, useContext, useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { PlaceType } from "../@types/PlaceTypes";
import { Button } from "../components/Button";
import { HeaderBar } from "../components/HeaderBar";
import { PlaceContext } from "../Contexts/PlaceContext";
import { StarIcon } from "../icons/StarIcon";
import { Colors } from "../Values/Colors";
import {PlacesData } from "../data"


const { width, height } = Dimensions.get("window"); //Recurso do react para obter dimensões da janela do dispositivo

const Container = styled.View`
  position: absolute;
  
`;

const PlaceContainer = styled.View`
  width: ${String(width)}px;
  height: ${String(height + 20)}px;
  background-color: ${Colors.theme};
  align-items: center;
  justify-content: center;
  padding: 10px 20px 0 20px;
  position: relative;
`;

const CoverImage = styled.Image`
  height: 250px;
  width: ${String(width - 40)}px;
  margin-top: 20px;
  border-radius: 10px;
`;

const PlaceTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  color: ${Colors.themeContrast};
  width: 100%;
`;

const PlaceText = styled.Text`
  font-size: 14px;
  color: ${Colors.themeContrast};
  width: 100%;
`;
const Rating = styled.View`
  margin-top: 20px;
  flex-direction: row;
  width: 100%;
`;

const RatingValue = styled.Text`
  color: ${Colors.themeContrast};
  font-size: 14px;
  margin-left: 10px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.themeContrast};
  width: 100%;
  margin-top: 10px;
`;

const Description = styled.Text`
  margin-top: 20px;
  color: ${Colors.themeContrast};
  line-height: 20px;
`;

const AddButton = styled(Button)`
  margin-top: 20px;
  width: ${String(width - 40)}px;
`;

type PlaceProviderProps = {
    children: ReactNode,
}

export const PlaceProvider = ({ children }: PlaceProviderProps) => {

  const [visible, setVisible] = useState(false);
  const [place, setPlace] = useState<PlaceType | null>(null);


  useEffect(() => {
    const masp = PlacesData.find((item) => item.id === 2);
    
    if(masp) {
        setPlace(masp)
    }
  }, [])


  const showPlace = () => {
    setVisible(true);
  }

  const hidePlace = () => {
    setVisible(false);
  }

  return (
    <PlaceContext.Provider value={{
        showPlace,
        hidePlace
    }}>
     {children}  

    <Container
      style={{
        left: visible ? 0 : width //Se o visible for igual a true o componente place será exibida, senão sumirá da tela
      }}
    >
      <PlaceContainer>
        <HeaderBar />

        <CoverImage
          source={{
            uri: place?.photo,
          }}
        />

        <PlaceTitle>{place?.title}</PlaceTitle>
        <PlaceText>{place?.address}</PlaceText>

        <Rating>
          <StarIcon />
          <RatingValue>{place?.rating.toPrecision(2)}</RatingValue>
        </Rating>

        <Title>Descrição</Title>
        <Description>
          {place?.description}
        </Description>

        <AddButton>Adicionar à minha viagem</AddButton>
      </PlaceContainer>
    </Container>
    </PlaceContext.Provider>
  );
};

export const usePlace = () => {

    const context = useContext(PlaceContext);

    return context;
}


