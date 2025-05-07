import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../../componentes/botoes/styles.js";

const CustomButton = ({
  title,
  onPress,
  backgroundColor = "#007BFF",
  textColor = "#FFFFFF",
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor }, style]}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
