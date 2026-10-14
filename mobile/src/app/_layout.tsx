
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#15803D",
        tabBarInactiveTintColor: isDark ? "#9CA3AF" : "#6B7280",
        tabBarStyle: {
          backgroundColor: isDark ? "#111827" : "#FFFFFF",
          borderTopColor: isDark ? "#374151" : "#E5E7EB",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home", tabBarLabel: "Home" }}
      />

      <Tabs.Screen
        name="explore"
        options={{ title: "Explore", tabBarLabel: "Explore" }}
      />

      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", tabBarLabel: "Profile" }}
      />

      <Tabs.Screen
        name="edit-profile"
        options={{ href: null, title: "Edit Profile" }}
      />
    </Tabs>
  );
}
