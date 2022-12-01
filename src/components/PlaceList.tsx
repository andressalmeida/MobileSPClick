import styled from "@emotion/native";
import { useEffect, useState } from "react";
import { CategoryType } from "../@types/CategoryType";
import { PlaceType } from "../@types/PlaceTypes";
import { PlacesData } from "../data";
import { PlaceItem } from "./PlaceItem";

const PlaceContainer = styled.ScrollView`
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
`;

type PlaceListProps = {
  selectedCategory?: CategoryType | null;
};

export const PlaceList = ({ selectedCategory }: PlaceListProps) => {
  const [places, setPlaces] = useState<PlaceType[]>(PlacesData);

  useEffect(() => {
    if (selectedCategory) {
      const filteredPlaces = PlacesData.filter((item) => {
        if (item.categories.includes(selectedCategory.id)) {
          return true;
        } else {
          return false;
        }
      });
      setPlaces(filteredPlaces);
    } else {
      setPlaces(PlacesData);
    }
  }, [selectedCategory]);

  return (
    <PlaceContainer>
      {places.map((place) => (
        <PlaceItem key={place.id} data={place} />
      ))}
    </PlaceContainer>
  );
};
