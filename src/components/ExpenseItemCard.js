import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tailwind from "twrnc";

const ExpenseItemCard = ({ item }) => {
  return (
    <View
      style={tailwind`bg-white rounded-2xl p-4 mx-5 mb-3 flex-row justify-between items-center shadow-lg`}
    >
      <View style={tailwind`flex-row items-center`}>
        <View
          style={tailwind`w-10 h-10 rounded-xl bg-gray-200 justify-center items-center`}
        >
          <Text style={tailwind`text-lg`}>{item.icon}</Text>
        </View>

        <View style={tailwind`ml-3`}>
          <Text style={tailwind`text-lg font-bold text-gray-800`}>
            {item.title}
          </Text>

          <View
            style={[
              tailwind`mt-1 px-2 py-1 rounded-lg self-start`,
              { backgroundColor: item.colorCode },
            ]}
          >
            <Text style={tailwind`text-xs font-bold text-white`}>
              {item.category}
            </Text>
          </View>
        </View>
      </View>

      {/* amount and date */}
      <View style={tailwind`items-end`}>
        <Text style={tailwind`text-base font-bold text-black`}>
          ${item.amount}
        </Text>
        <Text style={tailwind`text-xs text-gray-500 mt-1`}>
          {new Date().toLocaleDateString()}
        </Text>
      </View>
    </View>
  );
};

export default ExpenseItemCard;

const styles = StyleSheet.create({});
