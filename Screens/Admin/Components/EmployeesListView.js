import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Employes from '../Screens/Employes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


const CustomListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                data={itemList}
                renderItem={({ item }) => <Employes
                    title='Sohaib Usmani'
                    designation='Shift Incharge'
                />}
            />

    </View>
);

export default CustomListview;
