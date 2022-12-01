import styled from "@emotion/native";
import { StyleProp, ViewStyle } from "react-native";
import { Colors } from "../Values/Colors";

const Container = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  height: 40px;
  margin-right: 15px;
  margin-bottom: 15px;
  padding: 0 15px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: #ffff;
  font-size: 20px;
`;

type ButtonProps = {
  children: string;
  onPressButton?: () => void;
  style?: StyleProp<ViewStyle>; //StyleProp: Permite que o estilo do componente seja sobrescrito
};

export const Button = ({ children, onPressButton, style }: ButtonProps) => {
  return (
    <Container onPress={onPressButton} style={style}>
      <Text>{children}</Text>
    </Container>
  );
};
