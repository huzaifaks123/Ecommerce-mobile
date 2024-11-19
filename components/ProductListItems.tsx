import { Text } from "react-native";

export default function ProductListItems({ product }) {
    return <Text style={{ fontSize: 30 }}>{product.name}</Text>;
}