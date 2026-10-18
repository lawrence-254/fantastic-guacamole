
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    maxWidth: 480,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    marginBottom: 28,
    alignItems: "center",
  },
  brand: {
    color: "#166534",
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 18,
  },
  title: {
    color: "#111827",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    color: "#6B7280",
    fontSize: 15,
    textAlign: "center",
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
