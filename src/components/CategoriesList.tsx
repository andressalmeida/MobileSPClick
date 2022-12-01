import styled from "@emotion/native";
import { useState } from "react";
import { CategoryItem } from "./CategoryItem";
import { CategoryType } from "../@types/CategoryType";

type CategoriesListProps = {
  onChange: (category: CategoryType) => void;
};

const Container = styled.ScrollView`
  padding-top: 5px;
`;

const Bar = styled.View`
  width: 30px;
`;

export const CategoriesList = (props: CategoriesListProps) => {
  const [selected, setSelected] = useState(1);
  const [categories, setCategories] = useState<CategoryType[]>([
    {
      id: 1,
      name: "Populares",
    },
    {
      id: 2,
      name: "Museus",
    },
    {
      id: 3,
      name: "Esportes",
    },
    {
      id: 4,
      name: "Restaurantes",
    },
    {
      id: 5,
      name: "Teatros",
    },
    {
      id: 6,
      name: "Parques",
    },
    {
      id: 7,
      name: "Natureza",
    },
  ]);

  return (
    <Container horizontal={true} showsHorizontalScrollIndicator={false}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          data={category}
          isActive={category.id === selected}
          onPressCategory={() => {
            setSelected(category.id);
            props.onChange(category);
          }}
        />
      ))}
      <Bar />
    </Container>
  );
};
