import HeaderTitle from '@/components/HeaderTitle';
import baseStyles from '@/styles/baseStyle';
import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';

const historyData = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    text: `Sample message ${i + 1}`,
    transTextL: `উদাহরণ বার্তা ${i + 1}`,
    createdAt: new Date(2025, 4, (i % 30) + 1), // May 2025, looping through days
}));
interface ITEM   { text: string; transTextL: string; createdAt: Date; id:number}
const Item = ({ item }: { item: ITEM }) => {
    return (
        <View style={baseStyles.card}>
            <Text style={[baseStyles.heading, { fontWeight: 'semibold' }]}>
                {item.text}
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,
                }}
            >
                <Text style={baseStyles.text}>উদাহরণ বার্তা 1</Text>
                <Text style={baseStyles.text}>10-05-2025</Text>
            </View>
        </View>
    );
};

export default function HistoryScreen() {
    return (
        <View style={baseStyles.container}>
            <StatusBar barStyle={'light-content'} backgroundColor={'#121212'} />
            <HeaderTitle />
            <FlatList
                style={{ marginTop: 20 }}
                data={historyData}
                renderItem={({ item }) => <Item key={item.id} item={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    

})