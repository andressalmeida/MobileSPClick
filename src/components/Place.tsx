import styled from "@emotion/native";
import { useState } from "react";
import { Dimensions } from "react-native";
import { StarIcon } from "../icons/StarIcon";
import { Colors } from "../Values/Colors";
import { Button } from "./Button";
import { HeaderBar } from "./HeaderBar";

const { width, height } = Dimensions.get("window"); //Recurso do react para obter dimensões da janela do dispositivo

const Container = styled.View`
  position: absolute;
  width: ${String(width)}px;
  height: ${String(height)}px;
`;
const PlaceContainer = styled.View`
  width: ${String(width)}px;
  height: ${String(height)}px;
  background-color: ${Colors.theme};
  align-items: center;
  justify-content: center;
  padding: 30px 20px 0 20px;
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

export const Place = () => {

  const [visible, setVisible] = useState(false);

  return (
    <Container
      style={{
        left: visible ? 0 : width
      }}
    >
      <PlaceContainer>
        <HeaderBar />

        <CoverImage
          source={{
            uri: "https://ppcult-2022.web.app/images/sp/zoo.jpg",
          }}
        />

        <PlaceTitle>Zoologico de São Paulo</PlaceTitle>
        <PlaceText>Av....</PlaceText>

        <Rating>
          <StarIcon />
          <RatingValue>5.0</RatingValue>
        </Rating>

        <Title>Descrição</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
          incidunt pariatur veniam sunt architecto. Doloribus, consequatur
          perspiciatis dignissimos cumque ducimus similique consequuntur
          voluptatibus, veritatis aliquid quis, laborum officia asperiores
          impedit?
        </Description>

        <AddButton>Adicionar à minha viagem</AddButton>
      </PlaceContainer>
    </Container>
  );
};
