import { View, Text, Button, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import FormComponent from "./components/form_component";

export default function Index() {
    const router = useRouter();

    return (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ padding: 20 }}
        >
            <Text style={{ fontSize: 24, marginBottom: 12 }}>
                All Beautiful Resumes Start Here:
            </Text>

            <Button
                title="Go Back Home"
                onPress={() => router.navigate("/")}
            />

            <FormComponent />
        </ScrollView>
    );
}
