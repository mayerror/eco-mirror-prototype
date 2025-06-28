import Webcam from "react-webcam";
import { StyleSheet, View } from "react-native";

export default function WebCamera() {
  return (
    <View style={styles.container}>
      <Webcam
        style={styles.camera}
        audio={false}
        screenshotFormat="image/jpeg"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  camera: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
