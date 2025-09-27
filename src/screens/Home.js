import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import tailwind from "twrnc";
import EmptyList from "../components/EmptyList";
import ExpenseItemCard from "../components/ExpenseItemCard";

// Constant data for expenses
const EXPENSE_DATA = [
  {
    id: 1,
    icon: "🍔",
    title: "Food",
    category: "Foods and Drinks",
    amount: 300,
    colorCode: "#fb923c", // orange-400
  },
  {
    id: 2,
    icon: "🚗",
    title: "Transport",
    category: "Transportation",
    amount: 150,
    colorCode: "#3b82f6", // blue-500
  },
  {
    id: 3,
    icon: "🛍️",
    title: "Shopping",
    category: "Retail",
    amount: 450,
    colorCode: "#8b5cf6", // violet-500
  },
  {
    id: 4,
    icon: "🏠",
    title: "Rent",
    category: "Housing",
    amount: 1200,
    colorCode: "#10b981", // emerald-500
  },
  {
    id: 5,
    icon: "⚡",
    title: "Utilities",
    category: "Bills",
    amount: 200,
    colorCode: "#f59e0b", // amber-500
  },
  {
    id: 6,
    icon: "🎬",
    title: "Entertainment",
    category: "Leisure",
    amount: 80,
    colorCode: "#ef4444", // red-500
  },
];

const Home = () => {
  // Calculate total amount from expense data
  const totalAmount = EXPENSE_DATA.reduce((sum, item) => sum + item.amount, 0);

  return (
    <View style={tailwind`px-5 pt-5 pb-3 flex-1`}>
      <Text style={tailwind`text-4xl font-bold text-black`}>Hello 👋</Text>
      <Text style={tailwind`text-base text-gray-500 mt-1`}>
        Start Tracking your expenses easily.
      </Text>

      <View
        style={tailwind`bg-black rounded-3xl p-6 my-5 mx-5 items-center shadow-lg`}
      >
        <Text style={tailwind`text-base text-gray-400`}>Spent so far</Text>
        <Text style={tailwind`text-4xl mt-2 font-bold font-bold text-white`}>
          ${totalAmount}
        </Text>
      </View>

      {/* flatlist */}
      <FlatList
        data={EXPENSE_DATA}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => <ExpenseItemCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
