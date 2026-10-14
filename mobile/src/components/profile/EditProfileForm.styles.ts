
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  label: {
    color: "#14532D",
    fontSize: 14,
    fontWeight: "700",
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#111827",
    backgroundColor: "#FFFFFF",
  },
  bioInput: {
    minHeight: 110,
    textAlignVertical: "top",
  },
  saveButton: {
    backgroundColor: "#166534",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
  },
  disabledButton: {
    opacity: 0.6,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});

export default styles;
