
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 36,
    backgroundColor: "#F5FAF6",
  },
  header: {
    marginBottom: 24,
  },
  brand: {
    color: "#16804A",
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 18,
  },
  title: {
    color: "#183B2A",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 8,
  },
  description: {
    color: "#627568",
    fontSize: 15,
    lineHeight: 22,
  },
  footer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    color: "#627568",
    fontSize: 14,
  },
  link: {
    color: "#16804A",
    fontSize: 14,
    fontWeight: "700",
  },
});

export default styles;
