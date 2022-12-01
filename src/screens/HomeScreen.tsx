import styled from "@emotion/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { CategoryType } from "../@types/CategoryType";
import { CategoriesList } from "../components/CategoriesList";
import { PlaceList } from "../components/PlaceList";
import { Colors } from "../Values/Colors";

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.theme};
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${Colors.themeContrast};
  margin-top: 45px;
`;

export const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  return (
    <Container>
      <StatusBar style="light" />

      <Title>Descubra lugares incríveis!</Title>
      <CategoriesList onChange={(category) => setSelectedCategory(category)} />
      <PlaceList selectedCategory={selectedCategory} />
    </Container>
  );
};
