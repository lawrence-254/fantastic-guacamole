
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 8,
  },
  label: {
    color: "#244535",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
  },
  input: {
    width: "100%",
    minHeight: 48,
    borderWidth: 1,
    borderColor: "#D4E2D8",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    color: "#183B2A",
    fontSize: 15,
  },
  submitButton: {
    minHeight: 50,
    backgroundColor: "#16804A",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 18,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  disabledButton: {
    opacity: 0.65,
  },
  error: {
  color: "#DC2626",
  marginTop: 8,
  marginBottom: 8,
  fontSize: 14,
},
});

export default styles;
