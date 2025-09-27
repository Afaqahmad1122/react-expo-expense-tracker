import { Text, View } from "react-native";
import React from "react";
import tailwind from "twrnc";

const EmptyList = ({ title, message }) => {
  return (
    <View style={tailwind`flex-1 items-center justify-center p-8 mt-10`}>
      <Text
        accessibilityRole="image"
        accessibilityLabel="Empty list icon"
        style={tailwind`text-4xl mb-2`}
      >
        📝
      </Text>
      <Text
        accessibilityRole="header"
        style={tailwind`text-lg font-semibold text-gray-800 mb-1`}
      >
        {title || "No items yet. Add your first item!"}
      </Text>
      <Text
        accessibilityRole="text"
        style={tailwind`text-base text-gray-500 text-center`}
      >
        {message || "Add your first item to get started."}
      </Text>
    </View>
  );
};

export default EmptyList;
