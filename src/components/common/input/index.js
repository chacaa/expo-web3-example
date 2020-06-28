import React, { useEffect, useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Animated,
  ViewPropTypes,
} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import colors from "../../../theme/colors";

const Input = ({ style, label, value, onChangeText }) => {
  const [focus, setFocus] = useState(false);
  const textInputRef = useRef(null);
  const labelAnimation = new Animated.Value(0);

  const emptyFieldLabelStyle = {
    ...styles.emptyLabel,
    top: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [24, 0],
    }),
    fontSize: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [colors.gray, colors.orange],
    }),
    fontWeight: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["400", "600"],
    }),
  };

  const labelStyle = {
    ...styles.label,
    color: focus ? colors.orange : colors.gray,
  };

  useEffect(() => {
    Animated.timing(labelAnimation, {
      toValue: focus ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  });

  const setInputFocus = () => {
    textInputRef.current.focus();
  };

  const toggleFocus = () => {
    setFocus(!focus);
  };

  return (
    <View style={style}>
      <TouchableOpacity
        style={styles.inputContainer}
        activeOpacity={1}
        onPress={setInputFocus}
      >
        <Animated.Text style={value === "" ? emptyFieldLabelStyle : labelStyle}>
          {label}
        </Animated.Text>

        <TextInput
          ref={textInputRef}
          onChangeText={onChangeText}
          value={value}
          onFocus={toggleFocus}
          onEndEditing={() => setFocus(false)}
          style={styles.text}
          autoCorrect={false}
          underlineColorAndroid={colors.transparent}
          selectionColor={colors.orange}
        />
      </TouchableOpacity>

      <View style={[styles.bottomLine, focus && styles.bottomLineOnFocus]} />
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
};

Input.defaultProps = {
  style: {},
};

export { Input };
