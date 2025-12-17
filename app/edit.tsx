import { Text, View, Button } from "react-native";
import { useLocalSearchParams, useRouter, Stack } from "expo-router"
import { useState } from "react";
import FormComponent from "./components/form_component";

export default function Index() {
    const router = useRouter();

    const params = useLocalSearchParams<{ name?: string }>();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
            }}
        >
            <Text>Build your Resume {params.name}</Text>
            <Button
                title="Go Back Home"
                onPress={() => router.navigate('/')}
            />
            <FormComponent></FormComponent>
        </View>
    );
}
