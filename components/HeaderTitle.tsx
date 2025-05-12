import baseStyles from '@/styles/baseStyle';
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function HeaderTitle() {
    const router = useRouter()
    return (
        <TouchableOpacity style={styles.header} onPress={() => router.back()}>
            <Entypo name="chevron-small-left" size={36} color="white" />
            <Text style={[baseStyles.heading, styles.title]}>History</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    title: {
        marginBottom:3
    },
});    