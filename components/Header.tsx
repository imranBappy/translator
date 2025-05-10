import baseStyles from '@/styles/baseStyle';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const uri = `https://avatars.githubusercontent.com/u/61227100?v=4`

export default function Header() {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Link href={`/history`}>
                    <Ionicons name="star" size={26} color="white" />
                </Link>
            </TouchableOpacity>
            <Text style={baseStyles.heading}>IHB Translate</Text>
            <TouchableOpacity>
                <Image
                    style={styles.profileImg}
                    source={{ uri: uri }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30
    },
    title: {
        fontSize: 24,
        fontWeight: "semibold"
    },
    profileImg: {
        width: 40,
        height: 40,
        backgroundColor: "gray",
        borderRadius: 50,
        borderWidth: 1
    }
})    