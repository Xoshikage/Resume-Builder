import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router"
import form_component from "./components/form_component";
import { Link } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const name = 'Alice';

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Build your Resume!</Text>
      <Button
        title="Build Resume Here"
        onPress={() => router.navigate('/edit')}
      />
    </View>
  );
}
