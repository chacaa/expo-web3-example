import React, { useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

import { padding, styles } from "./styles";

const Button = ({ style, text, onPress, disabled }) => {
  const [width, setWidth] = useState(0);

  const handleLayout = ({ nativeEvent }) => {
    const { layout } = nativeEvent;
    setWidth(layout.width);
  };

  return (
    <TouchableOpacity
      style={[style, styles.container, disabled && styles.disabled]}
      onLayout={handleLayout}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <Text
        numberOfLines={1}
        style={[styles.text, { width: width - padding * 2 }]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  style: {},
  disabled: false,
};

export { Button };
