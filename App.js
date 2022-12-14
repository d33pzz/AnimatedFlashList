import { AnimatedFlashList } from "@shopify/flash-list";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  FlatList,
} from "react-native";
import React, { useRef, useCallback } from "react";

const DATA = [
  {
    id: 1,
    title: "First Item",

    image:
      "https://images.unsplash.com/photo-1468937522678-585cf1a8ee55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80",
  },
  {
    id: 2,
    title: "Second Item",
    image:
      "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 3,
    title: "Third Item",
    image:
      "https://images.unsplash.com/photo-1519220483188-29ad34b93ca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 4,
    title: "Fourth Item",
    image:
      "https://images.unsplash.com/photo-1494326478400-c7963563456f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 5,
    title: "Fifth Item",
    image:
      "https://images.unsplash.com/photo-1468937522678-585cf1a8ee55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80",
  },
  {
    id: 6,
    title: "Sixth Item",
    image:
      "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 7,
    title: "Seventh Item",
    image:
      "https://images.unsplash.com/photo-1519220483188-29ad34b93ca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 8,
    title: "Eightth Item",
    image:
      "https://images.unsplash.com/photo-1494326478400-c7963563456f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 9,
    title: "Nineth Item",
    image:
      "https://images.unsplash.com/photo-1468937522678-585cf1a8ee55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80",
  },
  {
    id: 10,
    title: "Tenth Item",
    image:
      "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 11,

    title: "Shuffling Item",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 12,

    title: "First Item",
    image:
      "https://images.unsplash.com/photo-1468937522678-585cf1a8ee55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80",
  },
  {
    id: 13,

    title: "Second Item",
    image:
      "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 14,

    title: "Third Item",
    image:
      "https://images.unsplash.com/photo-1519220483188-29ad34b93ca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 15,

    title: "Fourth Item",
    image:
      "https://images.unsplash.com/photo-1494326478400-c7963563456f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 16,

    title: "Fifth Item",
    image:
      "https://images.unsplash.com/photo-1468937522678-585cf1a8ee55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80",
  },
  {
    id: 17,

    title: "Sixth Item",
    image:
      "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 18,

    title: "Seventh Item",
    image:
      "https://images.unsplash.com/photo-1519220483188-29ad34b93ca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 19,

    title: "Eightth Item",
    image:
      "https://images.unsplash.com/photo-1494326478400-c7963563456f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 20,

    title: "Nineth Item",
    image:
      "https://images.unsplash.com/photo-1468937522678-585cf1a8ee55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80",
  },
  {
    id: 21,

    title: "Tenth Item",
    image:
      "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 22,

    title: "Shuffling Item",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 23,

    title: "First Item",
    image:
      "https://images.unsplash.com/photo-1468937522678-585cf1a8ee55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80",
  },
  {
    id: 24,

    title: "Second Item",
    image:
      "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 25,

    title: "Third Item",
    image:
      "https://images.unsplash.com/photo-1519220483188-29ad34b93ca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 26,

    title: "Fourth Item",
    image:
      "https://images.unsplash.com/photo-1494326478400-c7963563456f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 27,

    title: "Fifth Item",
    image:
      "https://images.unsplash.com/photo-1468937522678-585cf1a8ee55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80",
  },
  {
    id: 28,

    title: "Sixth Item",
    image:
      "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 29,

    title: "Seventh Item",
    image:
      "https://images.unsplash.com/photo-1519220483188-29ad34b93ca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 30,

    title: "Eightth Item",
    image:
      "https://images.unsplash.com/photo-1494326478400-c7963563456f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 31,

    title: "Nineth Item",
    image:
      "https://images.unsplash.com/photo-1468937522678-585cf1a8ee55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80",
  },
  {
    id: 32,

    title: "Tenth Item",
    image:
      "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 33,

    title: "Shuffling Item",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
];

export default function App() {
  const SPACING = 10;
  const AVATAR_SIZE = 50;
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

  const scrollY = useRef(new Animated.Value(0)).current;
  const keyExtractorItem = useCallback((item) => item.id.toString(), []);

  const anEvent = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y: scrollY,
          },
        },
      },
    ],
    { useNativeDriver: true }
  );

  const renderItem = ({ item, index }) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const opacityinputRange = [
      -1,
      0,
      ITEM_SIZE * index,
      ITEM_SIZE * (index + 1),
    ];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });

    const opacity = scrollY.interpolate({
      inputRange: opacityinputRange,
      outputRange: [1, 1, 1, 0],
    });

    return (
      <Animated.View
        style={{
          flexDirection: "row",
          margin: 10,
          padding: 10,
          alignItems: "center",
          backgroundColor: "#00acc1a6",
          borderRadius: 20,
          shadowColor: "#000",
          elevation: 4,
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 4,
          opacity,
          transform: [{ scale }],
        }}
      >
        <Image style={styles.img} source={{ uri: item.image }} />
        <Text style={styles.title}>{item.title}</Text>
      </Animated.View>
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AnimatedFlashList
        onScroll={anEvent}
        contentContainerStyle={{ paddingTop: StatusBar.currentHeight || 42 }}
        data={DATA}
        keyExtractor={keyExtractorItem}
        renderItem={renderItem}
        estimatedItemSize={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f5e9",
    alignItems: "stretch",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#81b9bf",
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 10,
  },
  layout: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#00acc1a6",
    borderRadius: 20,
    shadowColor: "#000",
    elevation: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "400",
  },
});
