import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { useSelector } from "react-redux";

export default function EventDetailsScreen({ navigation }) {
  const event = useSelector(state => state.event.selectedEvent);
  const [tickets, setTickets] = useState(1);

  return (
    <View>
      <Text>{event.name}</Text>
      <Text>{event.date}</Text>
      <Text>Available Tickets: {event.availableTickets}</Text>

      <Button
        title="Increase Tickets"
        onPress={() => setTickets(tickets + 1)}
        disabled={tickets >= event.availableTickets}
      />
      <Text>Selected Tickets: {tickets}</Text>
      <Button
        title="Purchase"
        onPress={() =>
          navigation.navigate("Purchase", { eventId: event.id, tickets })
        }
      />
    </View>
  );
}
