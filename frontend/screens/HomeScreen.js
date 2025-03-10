import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useQuery, gql } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setSelectedEvent } from "../store/store";

const GET_EVENTS = gql`
  query GetEvents {
    events {
      id
      name
      date
      availableTickets
    }
  }
`;

export default function HomeScreen({ navigation }) {
  const { data, loading, error } = useQuery(GET_EVENTS);
  const dispatch = useDispatch();

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>Error loading events</Text>;

  return (
    <View>
      <FlatList
        data={data.events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              dispatch(setSelectedEvent(item));
              navigation.navigate("EventDetails", { eventId: item.id });
            }}
          >
            <Text>
              {item.name} - {item.date}
            </Text>
            <Text>
              {item.availableTickets > 0
                ? `Tickets Available: ${item.availableTickets}`
                : "Sold Out"}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
