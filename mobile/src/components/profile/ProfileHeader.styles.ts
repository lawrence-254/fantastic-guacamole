
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 28,
  },
  avatar: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: "#E5E7EB",
    marginBottom: 16,
  },
  avatarFallback: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: "#166534",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatarInitial: {
    color: "#FFFFFF",
    fontSize: 38,
    fontWeight: "700",
  },
  displayName: {
    color: "#166534",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
  },
  username: {
    color: "#6B7280",
    fontSize: 15,
    marginTop: 5,
  },
  bio: {
    color: "#374151",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
    marginTop: 14,
    maxWidth: 320,
  },
});

export default styles;
