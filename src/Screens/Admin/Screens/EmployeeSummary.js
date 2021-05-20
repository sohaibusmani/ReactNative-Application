import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const styles = StyleSheet.create({
    cardContainer: {
       marginTop: 10,
    },
    cardContent: {
        // alignItems:'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        paddingVertical: 10,
        paddingHorizontal: 12,
        width: 120,
      },
      appButtonText: {
        color: "#fff",
        alignSelf: "center",
      }
})

export default function Profile() {
    return (
        <View>
            <View style={styles.cardContainer}>
            <Card style={{borderRadius: 25, elevation: 3}}>
                <Card.Content>
                    <View style={styles.cardContent}>
                    <Title>Sohaib Usmani</Title>
                    <Paragraph>sohaibusmani52@gmail.com</Paragraph>
                    <Title style={{marginTop: 10}}>
                        Total Hours In a Month
                    </Title>
                    <Paragraph>678 hours</Paragraph>
                    </View>
                    <View style={{marginTop: 10}}>
                <Title>
                    Wage Per Hour
                </Title>
                <Paragraph>
                    PKR 50
                </Paragraph>
              </View>
              <View style={{marginTop: 10}}>
                <Title>
                    Wage Per Month
                </Title>
                <Paragraph>
                    PKR 50,000
                </Paragraph>
              </View>
                </Card.Content>
            </Card>
           
            </View>
        </View>
    )
}