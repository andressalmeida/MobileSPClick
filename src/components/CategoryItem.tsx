import styled from "@emotion/native";
import { CategoryType } from "../@types/CategoryType";

const Container = styled.TouchableOpacity<{
  active: boolean;
}>`
  background-color: ${(props) => props.active ? '#002ff7' : 'transparent'};
  height: 40px;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 0 15px;
  border-radius: 15px;
  justify-content: center;
`;
const Text = styled.Text`
  color: #ffff;
  font-size: 16px;
`;

type CategoryItemProps = {
  data: CategoryType;
  isActive: boolean;
  onPressCategory: () => void;
};

export const CategoryItem = ({ data, isActive, onPressCategory }: CategoryItemProps) => {
  return (
    <Container
    active={isActive}
    onPress={onPressCategory}
    >
      <Text>{data.name}</Text>
    </Container>
  );
};
