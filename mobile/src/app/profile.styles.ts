
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 24,
    paddingBottom: 40,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#14532D",
  },
  editButton: {
    backgroundColor: "#166534",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editButtonText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E5E7EB",
    paddingVertical: 20,
  },
  statItem: {
    alignItems: "center",
    gap: 4,
  },
  statNumber: {
    color: "#14532D",
    fontSize: 20,
    fontWeight: "700",
  },
  statLabel: {
    color: "#6B7280",
    fontSize: 13,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    color: "#14532D",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  emptyText: {
    color: "#6B7280",
    fontSize: 14,
    lineHeight: 21,
  },
});

export default styles;
