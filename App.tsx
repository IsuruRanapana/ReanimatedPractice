import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const SIZE = 100.0;

const handleRotation = (progress:Animated.SharedValue<number>) => {
  'worklet';
  return `${progress.value*2*Math.PI}rad`;
};
export default function App() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
  });



  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5),3,true);
    scale.value = withRepeat(withSpring(1),3,true)
  }, []);
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value *SIZE)/2,
      transform:[{scale: scale.value},{rotate: handleRotation(progress)}]
    };
  });



  return (
    <View style={styles.container}>
      <Animated.View
        style={
          [{ height: SIZE, width: SIZE, backgroundColor: "blue" },
            reanimatedStyle,
          ]} />
    </View>
  );

}
