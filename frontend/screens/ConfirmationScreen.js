import React from "react";
import { View, Text } from "react-native";

export default function ConfirmationScreen({ route }) {
  const { orderId } = route.params;

  return (
    <View>
      <Text>Order Confirmed!</Text>
      <Text>Order Number: {orderId}</Text>
    </View>
  );
}
