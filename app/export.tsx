import { Text, View, Button } from "react-native";
import { useRouter } from "expo-router"
import form_component from "./components/form_component";
import { GeneratePDF } from "./components/GeneratePDF";
import { useRoute } from '@react-navigation/native'
import React from 'react'
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";


export default function ExportScreen({ }) {
    const router = useRouter();
    const route = useRoute();

    const params = useLocalSearchParams<{ name: string }>()

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "flex-start",
            }}
        >
            <Text>Here is your Resume</Text>
            <Button
                title="Download PDF"
                onPress={() => GeneratePDF()}
            />
            <Button
                title="Back to Home Screen"
                onPress={() => router.navigate('/')}
            />
        </View>
    );
}
