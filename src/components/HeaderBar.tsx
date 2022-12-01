import styled from "@emotion/native";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import FavoriteOutlineIcon from "../icons/FavoriteOutlineIcon";
import ShareIcon from "../icons/ShareIcon";
import { Colors } from "../Values/Colors";

const Container = styled.View`
  flex-direction: row;
  padding: 0 20px;
  width: 100%;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.TouchableOpacity``;

const PlaceTitle = styled.Text`
  color: ${Colors.themeContrast};
`;

export const HeaderBar = () => {
  return (
    <Container>
      <Button>
        <ArrowLeftIcon />
      </Button>
      <PlaceTitle>Zoológico de São Paulo</PlaceTitle>
      <Button>
        <ShareIcon />
      </Button>

      <Button>
        <FavoriteOutlineIcon color={Colors.themeContrast} />
      </Button>
    </Container>
  );
};
