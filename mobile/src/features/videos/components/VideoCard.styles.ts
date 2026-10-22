import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    borderRadius: 16,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: "#E5E7EB",
  },
  thumbnailPlaceholder: {
    width: "100%",
    aspectRatio: 16 / 9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0B6B43",
  },
  details: {
    padding: 16,
    gap: 8,
  },
});

export default styles;
