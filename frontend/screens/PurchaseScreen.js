import React from "react";
import { View, Text, Button } from "react-native";
import { useMutation, gql } from "@apollo/client";

const PURCHASE_TICKETS = gql`
  mutation PurchaseTickets($eventId: ID!, $quantity: Int!) {
    purchaseTickets(eventId: $eventId, quantity: $quantity) {
      orderId
    }
  }
`;

export default function PurchaseScreen({ route, navigation }) {
  const { eventId, tickets } = route.params;
  const [purchaseTickets, { data, loading, error }] = useMutation(
    PURCHASE_TICKETS,
  );

  const handlePurchase = async () => {
    try {
      const response = await purchaseTickets({
        variables: { eventId, quantity: tickets },
      });
      navigation.navigate("Confirmation", {
        orderId: response.data.purchaseTickets.orderId,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      <Text>Tickets: {tickets}</Text>
      <Button
        title="Confirm Purchase"
        onPress={handlePurchase}
        disabled={loading}
      />
      {error && <Text>Error: {error.message}</Text>}
    </View>
  );
}
