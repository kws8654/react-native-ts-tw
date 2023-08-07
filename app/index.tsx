import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text>Open up App.tsx tdo start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
