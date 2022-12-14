import styled from "@emotion/native";
import { StatusBar } from "expo-status-bar";
import { StarIcon } from "../icons/StarIcon";
import { LinearGradient } from "expo-linear-gradient";
import { Favorites } from "../components/FavoritePlace";

const Container = styled.View`
  padding-top: 30px;
  align-items: center;

`;

const Title = styled.Text`
  font-size: 18px;
`;


export const FavoritesScreen = () => {

  
  return (
    <Container>
      <StatusBar style="light" />
      <Title>Favoritos</Title>

    <Favorites />
    </Container>
  );
};
